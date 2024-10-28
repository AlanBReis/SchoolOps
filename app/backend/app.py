import os
from flask import Flask, render_template
from dotenv import load_dotenv
from routes import bp  
from flask_cors import CORS
from flask import *
from models import db, Aluno, Professor, Funcionario, User 

load_dotenv()

app = Flask(__name__)

# Habilitar CORS para todas as rotas
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Configurar a URI do banco de dados
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicializar o banco de dados
db.init_app(app)

# Registrar o Blueprint
app.register_blueprint(bp, url_prefix='/api')

@app.route('/')
def login():
    return render_template('login.html')

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/add-employee')
def add_employee():
    return render_template('add-employee.html')

@app.route('/add-student')
def add_student():
    return render_template('add-student.html')

@app.route('/add-teachers')
def add_teachers():
    return render_template('add-teachers.html')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Cria todas as tabelas, incluindo a de usuários
    app.run(host='0.0.0.0', port=5000)

with app.app_context():
        db.create_all()