function somaVal(val){
    return new Promise((aceite, rejeite) => {
        if(val > 10){
          val += 2
            aceite(val)
        } else {
            rejeite('valor inválido')
        }
    })
}

function dobrarVal(val){
    return val * 2
}

function adicionar10Val(val){
    return val + 10
}

somaVal(11)

.then((valFinal) => {
    console.log(`boa, a soma deu: ${valFinal}`)
    return dobrarVal(valFinal)
})

.then((newVal) => {
    console.log('multiplicando por 2 e somando mais 15: ')
    return adicionar10Val(newVal)
})

.then((endResult) => {
    end = endResult += 5
    console.log(`Resultado final: ${end}`)
})

.catch((error) => {
    console.log(`deu ruim: ${error}`)
})