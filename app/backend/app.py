import os
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv

# Carregar variáveis de ambiente do arquivo .env
load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env'))

app = Flask(__name__)

# Configuração do banco de dados
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
db = SQLAlchemy(app)

# Modelo de Aluno
class Aluno(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(50), nullable=False)

@app.route('/')
def hello():
    return "Hello, SchoolOps!"

@app.route('/alunos', methods=['GET'])
def get_alunos():
    alunos = Aluno.query.all()
    return jsonify([{'id': aluno.id, 'nome': aluno.nome} for aluno in alunos])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
