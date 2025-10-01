const texto =  document.getElementById("texto");
const contador = document.getElementById("contador");
const contadorPalavras = document.getElementById("contador-palavras");

function contadorDeCaracteres() {
contador.innerText = texto.value.length;    
}

texto.addEventListener("input", contadorDeCaracteres);

function contadorDePalavras() {
    const palavras = texto.value.trim().split(/\s+/);
    const numeroDePalavras = palavras.filter(palavra => palavra.length > 0).length;
    contadorPalavras.innerText = numeroDePalavras;
}