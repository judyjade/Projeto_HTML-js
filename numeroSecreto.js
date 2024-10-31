function sorteiaNumero(){
    return Math.round(Math.random() * 100)
}

function criaListaNumeros(quantidade){
    let listaSegredos = []
    let numero = 1 
    while(numero <= quantidade){
        numeroAleatorio = sorteiaNumero()
        let achou = false

        for(let i = 0; i < listaSegredos.length; i++){
            if(listaSegredos[i] == numeroAleatorio){
                achou = true
                break
            }
        }
        if(achou == false){
            listaSegredos.push(numeroAleatorio)
            numero++
        }
    }
    return listaSegredos
}

let segredos = criaListaNumeros(8)
console.log(segredos)
let campoNumero = document.querySelector("input")
campoNumero.focus()

function verifica(){

    let acertou = false

    for(let i = 0; i < segredos.length; i++){
        if(segredos[i] == campoNumero.value){
            alert('Você acertou!')
            acertou = true
            break
        }
    }
    if(acertou) {
        alert('Você errou')
    }
    campoNumero = ''
    campoNumero.focus()
}

let botao = document.querySelector("button")
botao.onclick = verifica