# app/backend/models.py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Aluno(db.Model):
    __tablename__ = 'cadastro_aluno'
    
    cod_cliente = db.Column(db.Integer, primary_key=True)
    nome_aluno = db.Column(db.String(20), nullable=False)
    idade = db.Column(db.Integer, nullable=False)
    nota = db.Column(db.Integer)
    frequencia = db.Column(db.Integer, nullable=False, default=0)  # Porcentagem de frequência

class Professor(db.Model):
    __tablename__ = 'cadastro_professores'
    
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
