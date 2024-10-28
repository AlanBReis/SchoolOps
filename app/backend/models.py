from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

class Aluno(db.Model):
    __tablename__ = 'cadastro_aluno'
    
    cod_cliente = db.Column(db.Integer, primary_key=True)
    nome_aluno = db.Column(db.String(20), nullable=False)
    idade = db.Column(db.Integer, nullable=False)
    nota = db.Column(db.Integer)
    frequencia = db.Column(db.Integer, nullable=False, default=0)  # Porcentagem de frequência

class Professor(db.Model):
    __tablename__ = 'cadastro_professor'
    
    cod_professor = db.Column(db.Integer, primary_key=True)
    nome_professor = db.Column(db.String(20), nullable=False)
    idade = db.Column(db.Integer, nullable=False)
    disciplina = db.Column(db.String(20), nullable=False)

class Funcionario(db.Model):
    __tablename__ = 'cadastro_funcionarios'
    
    cod_funcionario = db.Column(db.Integer, primary_key=True)
    nome_funcionario = db.Column(db.String(20), nullable=False)
    idade = db.Column(db.Integer, nullable=False)
    funcao = db.Column(db.String(20), nullable=False)
