let carro = {
    gasolina: 0,

    carregar: function(valor) {
        return this.gasolina += valor
    },

    acelerar: function() {
        return this.gasolina -= 4;
    }
};

console.log(carro.carregar(10))

console.log(carro.acelerar())

console.log(carro.acelerar())