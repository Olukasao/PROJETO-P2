
      document.addEventListener("DOMContentLoaded", function () {
        document
          .getElementById("formLogin")
          .addEventListener("submit", function (event) {
            event.preventDefault();
            fazerLogin();
          });
      });

      async function fazerLogin() {
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

        if (email && senha) {
          const usuario = { email, senha };
          const autenticado = await autenticarUsuario(usuario);
          if (autenticado) {
            alert("Login bem sucedido!");
            // Redirecionar para a página de perfil do usuário ou outra página após o login
            window.location.href = "cursos.html";
          } else {
            alert("Credenciais inválidas. Por favor, tente novamente.");
          }
        } else {
          alert("Por favor, preencha todos os campos.");
        }
      }

      async function autenticarUsuario(usuario) {
        const API_URL = "http://localhost:3000/usuarios";
        try {
          const response = await fetch(API_URL);
          const usuarios = await response.json();
          const usuarioAutenticado = usuarios.find(
            (u) => u.email === usuario.email && u.senha === usuario.senha
          );
          return usuarioAutenticado !== undefined;
        } catch (error) {
          console.error("Erro:", error);
          alert(
            "Ocorreu um erro ao autenticar usuário. Por favor, tente novamente."
          );
          return false;
        }
      }