// Função para cadastrar aluno
document.getElementById('student-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const grade = document.getElementById('grade').value;

    const response = await fetch('http://localhost:5000/api/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, grade })
    });

    if (response.ok) {
        alert('Aluno cadastrado com sucesso!');
        document.getElementById('student-form').reset(); // Limpa o formulário
    } else {
        alert('Erro ao cadastrar aluno.');
    }
});

// Função para cadastrar professor
document.getElementById('teacher-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const name = document.getElementById('teacher-name').value;
    const subject = document.getElementById('teacher-subject').value;

    const response = await fetch('http://localhost:5000/api/teachers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, subject })
    });

    if (response.ok) {
        alert('Professor cadastrado com sucesso!');
        document.getElementById('teacher-form').reset(); // Limpa o formulário
    } else {
        alert('Erro ao cadastrar professor.');
    }
});

// Função para buscar e exibir alunos na página de lista
async function fetchStudents() {
    const response = await fetch('http://localhost:5000/api/students');
    const students = await response.json();
    const studentsList = document.getElementById('students-list');
    
    studentsList.innerHTML = ''; // Limpa a lista anterior
    students.forEach(student => {
        const studentItem = document.createElement('div');
        studentItem.textContent = `${student.name} - Nota: ${student.grade}`;
        studentsList.appendChild(studentItem);
    });
}

// Função para buscar e exibir professores na página de lista
async function fetchTeachers() {
    const response = await fetch('http://localhost:5000/api/teachers');
    const teachers = await response.json();
    const teachersList = document.getElementById('teachers-list');
    
    teachersList.innerHTML = ''; // Limpa a lista anterior
    teachers.forEach(teacher => {
        const teacherItem = document.createElement('div');
        teacherItem.textContent = `${teacher.name} - Disciplina: ${teacher.subject}`;
        teachersList.appendChild(teacherItem);
    });
}

// Chama a função para exibir alunos na página de lista
if (document.getElementById('students-list')) {
    fetchStudents();
}

// Chama a função para exibir professores na página de lista
if (document.getElementById('teachers-list')) {
    fetchTeachers();
}
