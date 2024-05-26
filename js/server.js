const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let users = [
    { id: 1, username: 'admin', password: 'admin' },
    { id: 2, username: 'user', password: 'password' }
];

// Rota de login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ message: 'Login bem-sucedido', user });
    } else {
        res.status(401).json({ message: 'Nome de usuário ou senha inválido' });
    }
});

// Rota de criação de usuário
app.post('/api/signup', (req, res) => {
    const { username, email, phone, password } = req.body;

    if (!username || !email || !phone || !password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    if (users.find(u => u.username === username)) {
        return res.status(400).json({ message: 'Nome de usuário já existe' });
    }

    const newUser = { id: users.length + 1, username, email, phone, password };
    users.push(newUser);
    
    res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
});

// Servir a página HTML estática
app.use(express.static('public'));

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



    