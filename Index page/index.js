
      document.addEventListener("DOMContentLoaded", function () {
        document
          .getElementById("formCadastro")
          .addEventListener("submit", function (event) {
            event.preventDefault();
            adicionarUsuario();
          });
      });

      function adicionarUsuario() {
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();
        const curso = document.getElementById("curso").value;

        if (nome && email && senha && curso) {
          const novoUsuario = { nome, email, senha, curso };
          enviarUsuarioParaServidor(novoUsuario);
        } else {
          alert("Por favor, preencha todos os campos.");
        }
      }

      async function enviarUsuarioParaServidor(usuario) {
        const API_URL = "http://localhost:3000/usuarios";
        try {
          const response = await fetch(API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
          });
          if (!response.ok) {
            throw new Error("Erro ao adicionar usuário");
          }
          window.location.href = "../login page/login.html";
          alert("Usuário cadastrado com sucesso! Verifique seu email!!");
        } catch (error) {
          console.error("Erro:", error);
          alert(
            "Ocorreu um erro ao cadastrar usuário. Por favor, tente novamente."
          );
        }
      }
