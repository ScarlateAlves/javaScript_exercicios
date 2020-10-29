//tentado fazer o forEah

let objeto = {
    arr: [1, 2, 3, 4, 5, 6],

    funcao: function(callbak) {
        for (let index = 0; index < this.arr.length; index++) {
            callbak(this.arr[index])
        }

    },
}

function callbak(arr) {
    console.log(arr * 5)
}
objeto.funcao(callbak)