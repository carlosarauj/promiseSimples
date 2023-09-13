let mypromisse = new Promise((aceite, rejeite) => {
    let resultado = true

    if(resultado){
        aceite('Deu bom')
    } else {
        rejeite('Deu ruim')
    }
})

    mypromisse
    .then((acerto) => {
        console.log(`Foi um sucesso, ${acerto}`)
    })
    .catch((error) => {
        console.log(`vish,  ${error}`)
    })