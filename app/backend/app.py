# app/backend/app.py
import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv

# Carregue as variáveis do arquivo .env
load_dotenv()

app = Flask(__name__)

# Configurar a URI do banco de dados
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Opcional, mas recomendado

# Inicializar o banco de dados
db = SQLAlchemy(app)

@app.route('/')
def hello():
    return "Hello, SchoolOps!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
