import jwt
from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Optional
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector
from datetime import datetime, timedelta


app = FastAPI()


origins = [
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
security = HTTPBasic()


mydb = mysql.connector.connect(
    # user=admin_bd
    # password=admin123
    host="127.0.0.1",
    port="3306",
    user="root",
    password="root",
    database="notas_bd"
)
mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM usuarios")

result = mycursor.fetchall()


class User(BaseModel):
    username: str
    password: str


class Note(BaseModel):
    titulo: str = ''
    texto: str = ''
    hora: str = ''
    fecha: str = ''
    likes: int = ''
    color: str = ''
    usuario_id: str = ''


# Definir una clave secreta para cifrar el token
SECRET_KEY = "my-secret-key"

# Definir la duración del token (en minutos)
TOKEN_EXPIRATION = 30


@app.post("/users/")
async def create_user(user: User):
    query = "INSERT INTO usuarios (username, password) VALUES (%s, %s)"
    values = (user.username, user.password)
    mycursor.execute(query, values)
    mydb.commit()
    return {"message": "Usuario creado exitosamente"}


@app.post("/login")
async def login(credentials: HTTPBasicCredentials):
    query = "SELECT id FROM usuarios WHERE username=%s AND password=%s"
    values = (credentials.username, credentials.password)
    mycursor.execute(query, values)
    user = mycursor.fetchone()
    if user is None:
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")

    # Generar el token utilizando el módulo jwt
    token_data = {
        "sub": user[0],
        "exp": datetime.utcnow() + timedelta(minutes=TOKEN_EXPIRATION)
    }
    token = jwt.encode(token_data, SECRET_KEY, algorithm="HS256")

    # Devolver el token y la ID del usuario en la respuesta
    response = JSONResponse(content={"id": user[0], "token": token})
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response


# Ruta protegida que requiere autenticación
@app.get("/notas/{usuario_id}")
async def get_notas_usuario(usuario_id: int):
    if usuario_id == None:
        raise HTTPException(
            status_code=403, detail="No tiene acceso a esta ruta")
    query = "SELECT * FROM nota WHERE usuario_id = %s"
    values = (usuario_id,)
    mycursor.execute(query, values)
    response = mycursor.fetchall()
    return response


@app.post("/like/{nota_id}")
async def like_note(nota_id: int):
    # Obtener la nota de la base de datos
    query = "SELECT * FROM nota WHERE id = %s"
    values = (nota_id,)
    mycursor.execute(query, values)
    nota = mycursor.fetchone()

    if nota is None:
        raise HTTPException(status_code=404, detail="Nota no encontrada")

    # Actualizar el contador de likes
    query = "UPDATE nota SET likes = %s WHERE id = %s"
    values = (nota[6] + 1, nota_id)  # Sumar 1 al contador de likes
    mycursor.execute(query, values)
    mydb.commit()

    return {"message": "Like agregado exitosamente"}


@app.get("/all")
async def get_notes():
    query = "select u.id,u.username,n.titulo,n.texto,n.hora,n.fecha,n.likes,n.color from nota n join usuarios u on n.usuario_id = u.id  "
    mycursor.execute(query)
    response = mycursor.fetchall()
    print(response)
    return response


@app.post("/create")
async def create_note(note: Note):
    query = "INSERT INTO nota (titulo, texto, hora, fecha, likes, color, usuario_id) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    values = (note.titulo, note.texto, note.hora, note.fecha,
              note.likes, note.color, note.usuario_id)
    mycursor.execute(query, values)
    mydb.commit()
    return {"message": "Nota creada exitosamente"}


@app.delete("/delete/{nota_id}")
async def delete_nota(nota_id: int):
    query = "DELETE FROM nota WHERE id = %s"
    values = (nota_id,)
    mycursor.execute(query, values)
    mydb.commit()
    return {"message": f"Nota con ID {nota_id} eliminada exitosamente"}


@app.put("/update/{nota_id}")
async def update_nota(nota_id: int, nota: Note):
    query = "UPDATE nota SET titulo = %s, texto = %s WHERE id = %s"
    values = (nota.titulo, nota.texto, nota_id)
    mycursor.execute(query, values)
    mydb.commit()
    return {"nota_id": nota_id, "mensaje": "Nota actualizada correctamente"}


if __name__ == "__main__":
    uvicorn.run(app)
