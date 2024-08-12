let botaoSubmeter = document.getElementById("botao-submeter");

botaoSubmeter.addEventListener("click", submit);

console.log(elementoNome);

function submit() {
    let elementoNome = document.getElementById("nome").value;
    console.log(elementoNome)
}