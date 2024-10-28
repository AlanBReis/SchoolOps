document.getElementById('employeeForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const data = {
        cod_funcionario: parseInt(document.getElementById('cod_funcionario').value),
        nome_funcionario: document.getElementById('nome_funcionario').value,
        idade: parseInt(document.getElementById('idade').value),
        funcao: document.getElementById('funcao').value
    };

    const response = await fetch('http://localhost:5001/api/funcionarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert('Funcionário cadastrado com sucesso!');
        document.getElementById('employeeForm').reset();
        atualizarLista();  // Atualiza a lista de funcionários após o cadastro
    } else {
        alert('Erro ao cadastrar funcionário.');
    }
});

// Função para atualizar a lista de funcionários
async function atualizarLista() {
    const response = await fetch('http://localhost:5001/api/funcionarios');
    if (response.ok) {
        const funcionarios = await response.json();
        const employeeList = document.getElementById('employeeList');
        employeeList.innerHTML = '';  // Limpa a lista atual

        funcionarios.forEach(funcionario => {
            const listItem = document.createElement('li');
            listItem.textContent = `${funcionario.nome_funcionario} - ${funcionario.funcao}`;
            employeeList.appendChild(listItem);
        });
    } else {
        console.error('Erro ao buscar a lista de funcionários.');
    }
}

// Mostra/oculta a lista de funcionários quando o botão é clicado
document.getElementById('showEmployeeListButton').addEventListener('click', function() {
    const employeeList = document.getElementById('employeeList');
    if (employeeList.style.display === 'none') {
        employeeList.style.display = 'block';
        atualizarLista();  // Atualiza a lista ao mostrar
    } else {
        employeeList.style.display = 'none';
    }
});

// Atualiza a lista ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarLista);
