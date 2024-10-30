let segredo = [2, 5, 8]
let campoNumero = document.querySelector("input")
campoNumero.focus()

function verifica(){

    let acertou = false

    for(let i = 0; i < segredo.length; i++){
        if(segredo[i] == campoNumero.value){
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