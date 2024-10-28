from flask import Blueprint, request, jsonify
from models import db, Aluno, Professor, Funcionario , User
from datetime import datetime

bp = Blueprint('api', __name__)

# Rotas de usuário
@bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if User.query.filter_by(username=username).first():
        return jsonify({'message': 'Usuário já existe!'}), 400

    new_user = User(username=username)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Usuário cadastrado com sucesso!'}), 201

@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()
    if user and user.check_password(password):
        return jsonify({'message': 'Login bem-sucedido!'}), 200
    else:
        return jsonify({'message': 'Usuário ou senha incorretos!'}), 401

# Rotas para Aluno
@bp.route('/alunos', methods=['POST'])
def adicionar_aluno():
    data = request.get_json()
    novo_aluno = Aluno(
        cod_cliente=data['cod_cliente'],
        nome_aluno=data['nome_aluno'],
        idade=data['idade'],
        nota=data.get('nota'),
        frequencia=data.get('frequencia', 0)
    )
    
    db.session.add(novo_aluno)
    db.session.commit()
    return jsonify({'message': 'Aluno adicionado com sucesso!'}), 201

@bp.route('/alunos', methods=['GET'])
def listar_alunos():
    alunos = Aluno.query.all()
    alunos_list = [{
        'cod_cliente': aluno.cod_cliente,
        'nome_aluno': aluno.nome_aluno,
        'idade': aluno.idade,
        'nota': aluno.nota,
        'frequencia': aluno.frequencia
    } for aluno in alunos]
    return jsonify(alunos_list), 200

# Rotas para Professor
@bp.route('/professores', methods=['POST'])
def adicionar_professor():
    data = request.get_json()
    novo_professor = Professor(
        cod_professor=data['cod_professor'],
        nome_professor=data['nome_professor'],
        idade=data['idade'],
        disciplina=data['disciplina']
    )
    
    db.session.add(novo_professor)
    db.session.commit()
    return jsonify({'message': 'Professor adicionado com sucesso!'}), 201

@bp.route('/professores', methods=['GET'])
def listar_professores():
    professores = Professor.query.all()
    professores_list = [{
        'cod_professor': professor.cod_professor,
        'nome_professor': professor.nome_professor,
        'idade': professor.idade,
        'disciplina': professor.disciplina
    } for professor in professores]
    return jsonify(professores_list), 200

# Rotas para Funcionário
@bp.route('/funcionarios', methods=['POST'])
def adicionar_funcionario():
    data = request.get_json()
    novo_funcionario = Funcionario(
        cod_funcionario=data['cod_funcionario'],
        nome_funcionario=data['nome_funcionario'],
        idade=data['idade'],
        funcao=data['funcao']
    )
    
    db.session.add(novo_funcionario)
    db.session.commit()
    return jsonify({'message': 'Funcionário adicionado com sucesso!'}), 201

@bp.route('/funcionarios', methods=['GET'])
def listar_funcionarios():
    funcionarios = Funcionario.query.all()
    funcionarios_list = [{
        'cod_funcionario': funcionario.cod_funcionario,
        'nome_funcionario': funcionario.nome_funcionario,
        'idade': funcionario.idade,
        'funcao': funcionario.funcao
    } for funcionario in funcionarios]
    return jsonify(funcionarios_list), 200
