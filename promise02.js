function somaArray(array){
    return new Promise((aceite, rejeite) => {
        if(!Array.isArray(array)){
            rejeite('Argumento inválido')
        }
        let soma = array.reduce((total, num) => total + num,0)
            aceite(soma)

        
    })
}

let myArray = [1,2,3,4,5,6]
somaArray(myArray)

.then((resultado) => {
    console.log(`a soma dos elementos é: ${resultado}`)
})

.catch((error) => {
    console.log(`deu ruim: ${error}`)
})