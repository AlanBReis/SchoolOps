// Simulação de um "banco de dados" local
const usersDatabase = {};

document.getElementById('registerToggle').addEventListener('click', function () {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'block';
});

document.getElementById('loginToggle').addEventListener('click', function () {
    document.getElementById('registerContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
});

// Lógica de autenticação para login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se as credenciais estão corretas
    if (usersDatabase[username] && usersDatabase[username] === password) {
        // Redireciona para index.html se o login for bem-sucedido
        window.location.href = 'index';
    } else {
        alert('Usuário ou senha inválidos.');
    }
});

// Lógica de registro
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newUsername && newPassword) {
        // Armazena o novo usuário no "banco de dados"
        usersDatabase[newUsername] = newPassword;

        alert('Registro realizado com sucesso!');

        // Volta para a página de login
        document.getElementById('registerContainer').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'block';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
