class  myclass{
    constructor(val){
        this.val = val
    }

    operaAssin(){
        return new Promise((aceite, rejeite) => {
            let resul = this.val * 2

            if(resul >= 0){
                aceite(resul)
            } else {
                rejeite(`O resultado deu negativo`)
            }

        })
    }
}

let minhaclasse = new myclass(9)
minhaclasse.operaAssin()

.then((resultado) => {
    console.log(`Deu bom: ${resultado}`)
})

.catch((error) => {
    console.log(`deu ruim: ${error}`)
})