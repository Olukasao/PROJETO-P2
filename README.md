# Rebranding do Site Unianchieta ⚒️

Bem-vindo ao projeto de rebranding do site Unianchieta! Este documento serve como uma introdução ao projeto e fornece instruções sobre como configurar e contribuir.

## Visão Geral 😎

O objetivo deste projeto é atualizar e modernizar a presença online da Unianchieta, proporcionando uma experiência de usuário aprimorada e uma identidade visual renovada. Isso inclui um redesign completo do site e melhorias na navegação.

## Estrutura do Projeto 🏨

- **/docs**: Documentação do projeto
- **/src**: Código-fonte do site
  - **/assets**: Imagens, ícones e outros recursos
  - **/components**: Componentes reutilizáveis do front-end
  - **/pages**: Páginas do site
  - **/styles**: Arquivos de estilo (CSS/SASS)
  - **/scripts**: Scripts de JavaScript
- **/tests**: Testes automatizados
- **/build**: Versão compilada para produção

## Tecnologias Utilizadas 💻

- HTML5
- CSS3 / SASS
- JavaScript / ES6+
- Node.js (para ambiente de desenvolvimento)

## Configuração do Ambiente de Desenvolvimento ⚒️

Para configurar o ambiente de desenvolvimento, siga as etapas abaixo:

1. Clone este repositório:

   ```
   git clone https://github.com/Olukasao/PROJETO-P2.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd trabalhofacul
   ```

3. Instale as dependências do Node.js:

   ```
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```
   npm start
   ```

5. Abra o navegador e acesse `http://localhost:3000` para visualizar o site em desenvolvimento.

## Funcionalidades Adicionais 🚀

Além do redesign do site, o projeto inclui as seguintes funcionalidades:

- **Abas de Cursos**: Cada curso na página possui um link que direciona o usuário para a página de cadastro.

- **CRUD em JSON**: O projeto também inclui um CRUD simples usando JSON como banco de dados. Para rodar o CRUD, siga estas etapas:

  - Instale o JSON Server globalmente (se ainda não estiver instalado):

    ```bash
    npm install -g json-server
    ```

  - Navegue até o diretório onde está o arquivo JSON com os dados:

    ```
    cd caminho/para/o/diretorio
    ```

  - Inicie o servidor JSON Server:

    ```bash
    json-server --watch db.json
    ```

  - Agora você pode acessar os dados do JSON Server em `http://localhost:3000`.

    Para acessar o gerenciamento de usuários (CRUD), siga estas etapas :

  - Abra o arquivo `crud.html` no seu navegador ou acesse o link `http://localhost:3000/crud.html`

  - Você poderá realizar operações básicas de CRUD (Criar, Ler, Atualizar, Deletar) para gerenciar dados.

## Contribuindo 🤝

Sinta-se à vontade para abrir problemas (issues) e enviar pull requests com melhorias. Todos os tipos de contribuições são bem-vindos!

---

Este projeto é mantido pela equipe de desenvolvimento da Unianchieta. Obrigado por contribuir para tornar nossa plataforma online ainda melhor!
