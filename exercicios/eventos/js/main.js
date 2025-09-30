function mostrarAlerta() {
alert("Item adicionado com sucesso!");
}
// Seleciona o Elemento
const meuBotao = document.getElementById("adicionar-item");
// ADICIONA P EVENTO COM CALLBACK
meuBotao.addEventListener("click", mostrarAlerta);{
    console.log("Botão clicado!");
}