// Função para alternar entre login e registro
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

    if (username && password) {
        // Aqui você pode adicionar a lógica de autenticação real
        // Exemplo: Redireciona para index.html se login for bem-sucedido
        window.location.href = 'index';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Lógica de registro
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newUsername && newPassword) {
        // Aqui você pode adicionar a lógica de registro no banco de dados
        // Exemplo: Simular registro bem-sucedido
        alert('Registro realizado com sucesso!');

        // Volta para a página de login
        document.getElementById('registerContainer').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'block';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
