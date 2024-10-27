# app/backend/app.py
import os
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from models import db
from routes import bp
from flask_cors import CORS
from flask import *


# Carrega as variáveis do arquivo .env
load_dotenv()

app = Flask(__name__)

# Habilitar CORS para todas as rotas
CORS(app, resources={r"/api/*": {"origins": "*"}})  # Permite todas as origens

# Configurar a URI do banco de dados
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 

# Inicializar o banco de dados
db.init_app(app)

# Registrar o Blueprint
app.register_blueprint(bp, url_prefix='/api')

@app.route('/')
def hello():
    return render_template('index.html')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Cria as tabelas no banco de dados se não existirem
    app.run(host='0.0.0.0', port=5000)
