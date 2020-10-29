var nome = document.createElement('h1')
nome.textContent = "Salve"
document.body.appendChild(nome) //inseri elemento no pai
    //appendChild = inseri elemento dentro de outro elemento


function fora() {
    nome.innerHTML = " Salve "
}
nome.addEventListener("mouseout", fora)



nome.addEventListener("mousedown", function(e) { //parecido com
    nome.innerHTML = "!Salve!"
    e.preventDefault();
})


//funcao anonima
//nome = e
nome.addEventListener("mousemove", function(e) {
    //target qual foi o alvo
    e.target.innerHTML = "(Salve)"
        //nao deixa selecionar
    e.preventDefault();
})