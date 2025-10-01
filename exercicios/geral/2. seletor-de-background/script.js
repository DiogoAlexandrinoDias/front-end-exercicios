const btnwhite = document.getElementById("btnwhite");
const btnblack = document.getElementById("btnblack");


btnwhite.addEventListener("click", trocarFundo);
btnblack.addEventListener("click", trocarFundo);

function trocarFundo(event) {
    if (event.target === btnwhite) {
        document.body.style.backgroundColor = "#fff";
    } else if (event.target === btnblack) {
        document.body.style.backgroundColor = "#000";
    }
}
