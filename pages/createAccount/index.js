const email = document.getElementById('email');
const password = document.getElementById('password');
const getLocalStorage = () => JSON.parse(localStorage.getItem('database')) ?? [];
const setLocalStorage = (cliente) => localStorage.setItem('database', JSON.stringify(cliente));

// Validação dos campos de input
const isValid = () => {
    return document.getElementById('form').reportValidity();
}

function createAcc() {
    if(isValid()) {
        const dados = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        const dbClient = getLocalStorage();
        for(let i = 0; i < dbClient.length; i++) {
            if(dbClient[i].email === dados.email) {
                alert('email já cadastrado!');
                email.value = "";
                password.value = "";
                email.focus();
                return
            }
        }
        dbClient.push(dados);
        setLocalStorage(dbClient);
        alert('Usuário registrado com sucesso!')
        window.location.href = "http://127.0.0.1:5500/pages/home/index.html";
    }
}



// Eventos
document.getElementById('createBtn').onclick = () => createAcc();