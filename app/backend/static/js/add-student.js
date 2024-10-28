document.getElementById('studentForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const data = {
        cod_cliente: parseInt(document.getElementById('cod_cliente').value),
        nome_aluno: document.getElementById('nome_aluno').value,
        idade: parseInt(document.getElementById('idade').value),
        nota: document.getElementById('nota').value ? parseInt(document.getElementById('nota').value) : null,
        frequencia: parseInt(document.getElementById('frequencia').value)
    };

    const response = await fetch('http://localhost:5001/api/alunos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert('Aluno cadastrado com sucesso!');
        document.getElementById('studentForm').reset();
        atualizarLista();  // Atualiza a lista de alunos após o cadastro
    } else {
        alert('Erro ao cadastrar aluno.');
    }
});

// Função para atualizar a lista de alunos
async function atualizarLista() {
    const response = await fetch('http://localhost:5001/api/alunos');
    if (response.ok) {
        const alunos = await response.json();
        const studentList = document.getElementById('studentList');
        studentList.innerHTML = '';  // Limpa a lista atual

        alunos.forEach(aluno => {
            const listItem = document.createElement('li');
            listItem.textContent = `${aluno.nome_aluno} - Idade: ${aluno.idade}, Frequência: ${aluno.frequencia}%`;
            studentList.appendChild(listItem);
        });
    } else {
        console.error('Erro ao buscar a lista de alunos.');
    }
}

// Mostra/oculta a lista de alunos quando o botão é clicado
document.getElementById('showStudentListButton').addEventListener('click', function() {
    const studentList = document.getElementById('studentList');
    if (studentList.style.display === 'none') {
        studentList.style.display = 'block';
        atualizarLista();  // Atualiza a lista ao mostrar
    } else {
        studentList.style.display = 'none';
    }
});

// Atualiza a lista ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarLista);
