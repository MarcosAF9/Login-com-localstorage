const logoutBtn = document.getElementById('logoutBtn');
const spanName = document.getElementById('span-name');

let userLogado = JSON.parse(localStorage.getItem('userLogado'));

if(localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página!');
    window.location.href = "http://127.0.0.1:5500/index.html"
}

logoutBtn.onclick = () => {
    localStorage.removeItem('token');
    window.location.href = "http://127.0.0.1:5500/index.html"
}

spanName.innerHTML = `${userLogado.name}`