const inputNota =  document.getElementById("nota");
const resultado =  document.getElementById("result");
const message =  document.getElementById("message");


function resultadoNotaClick(event){
    event.preventDefault() 
    if(inputNota.value >= 6  ){
        resultado.innerHTML =  "Aprovado"
        resultado.style =  "color: green"
    }
    else if(inputNota.value <= 5){
        resultado.innerHTML =  "Reprovado"     
        resultado.style =  "color: red"   
    }


    //validação

    if (inputNota.value == ""){
        message.style.display = "block" 
        

        return false 
    } 
        message.style.display = "none"
        inputNota.value = ""
}


/* 



// Entrada de dados
let xp = Number(prompt("Quantos anos de experiência você tem?"));
let escolha = prompt("Qual seu nível de escolaridade?");

// Inicialização de variáveis
let nivel = 0;
let pontos = 0;

// Avaliação da experiência
if (xp === 0) {
    alert("Você não tem experiência para receber pontos.");
} else {
    pontos += 50;
    alert(`Seus pontos graças à sua experiência de ${xp} anos são ${pontos}.`);
}

// Avaliação do nível de escolaridade
if (escolha === "Fundamental") {
    nivel += 10;
    alert("Parabéns! Seu nível é 10.");
} else if (escolha === "Ensino superior") {
    nivel += 20;
    alert("Parabéns! Seu nível é 20.");
} else if (escolha === "Pós-graduação") {
    nivel += 30;
    alert("Parabéns! Seu nível é 30.");
} else if (escolha === "Mestrado") {
    nivel += 40;
    alert("Parabéns! Seu nível é 40.");
} else if (escolha === "Doutorado") {
    nivel += 50;
    alert("Parabéns! Seu nível é 50.");
} else {
    nivel = 0;
    alert("Aparentemente você não tem nenhum ponto. Vai estudar, safado!");
}

// Cálculo total de pontos
let totalPontos = pontos + nivel;

// Avaliação final
if (totalPontos >= 1 && totalPontos <= 49) {
    alert("Eita, parece que não obteve pontos suficientes, mas ficaremos de olho em você.");
} else if (totalPontos >= 50 && totalPontos <= 70) {
    alert("Você obteve pontos suficientes, mas ainda não é garantia. Ficaremos de olho em você.");
} else if (totalPontos === 100) {
    alert("Parabéns! Você obteve pontos suficientes para entrar na nossa empresa!");
} else if (totalPontos === 0) {
    alert("Aparentemente você não tem nenhum ponto...");
}
 */