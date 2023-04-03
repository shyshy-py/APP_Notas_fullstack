from fastapi import FastAPI, HTTPException
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector


app = FastAPI()


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
    #user=admin_bd
    #password=admin123
    host="db4free.net",
    port="3306",
    user="admin_bd",
    password="admin123",
    database="notas_bd"
)
mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM usuarios")

result = mycursor.fetchall()


class User(BaseModel):
    username: str
    password: str


@app.post("/users/")
async def create_user(user: User):
    query = "INSERT INTO usuarios (users, password) VALUES (%s, %s)"
    values = (user.username, user.password)
    mycursor.execute(query, values)
    mydb.commit()
    return {"message": "Usuario creado exitosamente"}


@app.post("/login")
def login(credentials: HTTPBasicCredentials):
    query = "SELECT id FROM usuarios WHERE users=%s AND password=%s"
    values = (credentials.username, credentials.password)
    mycursor.execute(query, values)
    user = mycursor.fetchone()
    if user is None:
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")
    response = JSONResponse(content={"token": "my-secret-token"})
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response


if __name__ == "__main__":
    uvicorn.run(app)
