async function somar (n1,n2){
    return n1 + n3; //n2 para estar correto
}

somar(2,4).then(
    (resultado) => {
        console.log("Resultado:", resultado)
    }).catch((erro) => {
        console.log("Erro: ", erro)
    }).finally(() => {
        console.log("Encerrando")
    })