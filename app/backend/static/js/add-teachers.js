document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('teacherForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const data = {
            cod_professor: parseInt(document.getElementById('cod_professor').value),
            nome_professor: document.getElementById('nome_professor').value,
            idade: parseInt(document.getElementById('idade').value),
            disciplina: document.getElementById('disciplina').value
        };

        const response = await fetch('http://localhost:5001/api/professores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Professor cadastrado com sucesso!');
            document.getElementById('teacherForm').reset();
            atualizarListaProfessores();  // Atualiza a lista de professores após o cadastro
        } else {
            alert('Erro ao cadastrar professor.');
        }
    });

    // Função para atualizar a lista de professores
    async function atualizarListaProfessores() {
        const response = await fetch('http://localhost:5001/api/professores');
        if (response.ok) {
            const professores = await response.json();
            const teacherList = document.getElementById('teacherList');
            teacherList.innerHTML = '';  // Limpa a lista atual

            professores.forEach(professor => {
                const listItem = document.createElement('li');
                listItem.textContent = `${professor.nome_professor} - Idade: ${professor.idade}, Disciplina: ${professor.disciplina}`;
                teacherList.appendChild(listItem);
            });
        } else {
            console.error('Erro ao buscar a lista de professores.');
        }
    }

    document.getElementById('voltar').addEventListener('click', function() {
        window.location.href = 'index'; 
    });
    

    // Mostra/oculta a lista de professores quando o botão é clicado
    document.getElementById('showTeacherListButton').addEventListener('click', function() {
        const teacherList = document.getElementById('teacherList');
        if (teacherList.style.display === 'none') {
            teacherList.style.display = 'block';
            atualizarListaProfessores();  // Atualiza a lista ao mostrar
        } else {
            teacherList.style.display = 'none';
        }
    });

    // Atualiza a lista ao carregar a página
    atualizarListaProfessores();
});
