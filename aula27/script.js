var nome = document.createElement('p')
nome.textContent = "Salve"
document.body.appendChild(nome) //inseri elemento no pai

//appendChild = inseri elemento dentro de outro elemento


function msg() {
    nome.innerHTML = "! Salve !"
}

function down() {
    nome.innerHTML = "( Salve )"
}

function fora(params) {
    nome.innerHTML = " Salve "
}

nome.addEventListener("click", msg);
nome.addEventListener("mousemove", down)
nome.addEventListener("mouseout", fora)