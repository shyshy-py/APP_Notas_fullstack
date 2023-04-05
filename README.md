# Backend

Esta es una API de Notas desarrollada con FastAPI que permite a los usuarios crear, leer, actualizar y eliminar notas.


#Requisitos previos
Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

Python: Puedes descargarlo e instalarlo desde el sitio web oficial de Python (https://www.python.org/). Se recomienda usar Python 3.7 o superior.
Pip: Pip es el gestor de paquetes de Python. Asegúrate de tenerlo instalado en tu máquina. Por lo general, viene instalado con Python 3.x, pero si no lo tienes, puedes instalarlo desde el sitio web oficial de Pip (https://pip.pypa.io/en/stable/installation/).

## Requisitos

- Python 3.7 o superior
- MySQL 8.0 o superior

## Configuración

1. Clona este repositorio en tu máquina local.
 
2.Crea un entorno virtual y actívalo.
- python3 -m venv .venv
En la carpeta raiz ejecuta:   
- .venv\Scripts\Activate.bat


3.Installa las dependencias
pip install -r requirements.txt


4.Configura la base de datos MySQL.
Crea una base de datos MySQL en tu servidor local.
Abre el archivo main.py y actualiza los siguientes parámetros en la función mysql.connector.connect() con la información de tu base de datos:

- mydb = mysql.connector.connect(
    host="127.0.0.1",
    port="3306",
    user="root",
    password="root",
    database="notas_bd"
)


5.Ejecuta la aplicación.
- uvicorn main:app --reload

La API estará disponible en http://localhost:8000 en tu navegador o en tu cliente de API.




# Frontend
Esta es una aplicacion desarrollada con Vue3 y Typescript

## Requisitos previos
Asegúrate de tener instalado Node.js y npm en tu sistema local.

## Instalación 

1.Clona este repositorio en tu máquina local

2.Navega a la raíz del proyecto e instala las dependencias 
- npm install
 
3.Luego, puedes ejecutar la aplicación en modo de desarrollo con el siguiente comando:
- npm run serve

Esto iniciará el servidor de desarrollo y la aplicación estará disponible en tu navegador en la URL http://localhost:8080/


