// On sélectionne le conteneur principal et les deux boutons du volet
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Quand on clique sur "SIGN UP", on ajoute la classe 'active'
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

// Quand on clique sur "SIGN IN", on retire la classe 'active'
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
