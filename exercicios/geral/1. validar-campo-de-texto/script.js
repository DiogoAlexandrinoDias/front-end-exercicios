
const btn = document.getElementById("btn");
const nome = document.getElementById("nome");
btn.addEventListener("click", validarcampo);

function validarcampo(){
    if(nome.value === "")
    alert("Campo não foi prenchido!");
    else
    alert("Campo prenchido com sucesso!");
}
