document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                errorMessage.textContent = '';
                console.log(data.message);
            } else {
                errorMessage.textContent = data.message;
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    });

    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const username = document.getElementById('new-username').value;
        const email = document.getElementById('new-email').value;
        const phone = document.getElementById('new-phone').value;
        const password = document.getElementById('new-password').value;
    
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, phone, password })
            });
    
            const data = await response.json();
    
            if (response.ok) {
                errorMessage.textContent = '';
                console.log(data.message);
            } else {
                errorMessage.textContent = data.message;
            }
        } catch (error) {
            console.error('Erro ao criar conta:', error);
        }
    });
});