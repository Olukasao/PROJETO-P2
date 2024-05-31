
const API_URL = 'http://localhost:3000/usuarios';

const carregarUsuarios = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Erro ao buscar usuários');
        }
        const usuarios = await response.json();
        exibirUsuarios(usuarios);
    } catch (error) {
        console.error('Erro:', error);
    }
};

const exibirUsuarios = (usuarios) => {
    const usuariosList = document.getElementById('usuarios-list');
    usuariosList.innerHTML = ''; 
    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.textContent = `${usuario.nome} - ${usuario.email} - ${usuario.curso}`;

        // Botão de visualizar
        const visualizarButton = document.createElement('button');
        visualizarButton.textContent = 'Visualizar';
        visualizarButton.onclick = () => visualizarUsuario(usuario);
        li.appendChild(visualizarButton);

        // Botão de editar
        const editarButton = document.createElement('button');
        editarButton.textContent = 'Editar';
        editarButton.onclick = () => editarUsuario(usuario);
        li.appendChild(editarButton);

        // Botão de excluir
        const excluirButton = document.createElement('button');
        excluirButton.textContent = 'Excluir';
        excluirButton.onclick = () => excluirUsuario(usuario.id);
        li.appendChild(excluirButton);

        usuariosList.appendChild(li);
    });
};

const adicionarUsuario = async () => {
    const nome = prompt('Nome:');
    const email = prompt('Email:');
    const curso = prompt('Curso:');

    if (nome && email && curso) {
        const novoUsuario = { nome, email, curso };
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoUsuario),
            });
            if (!response.ok) {
                throw new Error('Erro ao adicionar usuário');
            }
            console.log('Usuário adicionado com sucesso');
            carregarUsuarios(); 
        } catch (error) {
            console.error('Erro:', error);
        }
    }
};

const visualizarUsuario = (usuario) => {
    alert(`Nome: ${usuario.nome}\nEmail: ${usuario.email}\nCurso: ${usuario.curso}`);
};

const editarUsuario = (usuario) => {
    const novoNome = prompt('Novo Nome:', usuario.nome);
    const novoEmail = prompt('Novo Email:', usuario.email);
    const novoCurso = prompt('Novo Curso:', usuario.curso);

    if (novoNome !== null && novoEmail !== null && novoCurso !== null) {
        const novoUsuario = { nome: novoNome, email: novoEmail, curso: novoCurso };
        atualizarUsuario(usuario.id, novoUsuario);
    }
};

const atualizarUsuario = async (id, usuario) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
        });
        if (!response.ok) {
            throw new Error('Erro ao atualizar usuário');
        }
        console.log('Usuário atualizado com sucesso');
        carregarUsuarios(); 
    } catch (error) {
        console.error('Erro:', error);
    }
};

const excluirUsuario = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Erro ao excluir usuário');
        }
        console.log('Usuário excluído com sucesso');
        carregarUsuarios();
    } catch (error) {
        console.error('Erro:', error);
    }
};

document.addEventListener('DOMContentLoaded', carregarUsuarios);
document.getElementById('add-usuario').addEventListener('click', adicionarUsuario);
