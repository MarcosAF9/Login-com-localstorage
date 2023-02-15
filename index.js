const getLocalStorage = () => JSON.parse(localStorage.getItem('database')) ?? [];
const setLocalStorage = (cliente) => localStorage.setItem('database', JSON.stringify(cliente));

function logar() {
    const dbClient = getLocalStorage();
    let userValid = {
        name: "",
        email: "",
        password: ""
    };
    dbClient.forEach((item) => {
        if(email.value == item.email && password.value == item.password) {
            userValid = {
                name: item.name,
                email: item.email,
                password: item.password
            }
        }
    });
    if(email.value === userValid.email && password.value === userValid.password) {
        alert(`Olá ${userValid.name}`);
        window.location.href = "http://127.0.0.1:5500/pages/logged/index.html";

        let token = Math.random().toString(16).substr(2);
        localStorage.setItem('token', token);

        localStorage.setItem('userLogado', JSON.stringify(userValid));
    } else {
        alert('Email ou senha não encontrados!')
    }
}



// Eventos
document.getElementById('loginBtn').onclick = () => logar();