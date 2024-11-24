
/* 
function IntoOlimpiadas(){
    document.querySelector(".tela").classList.add("aparecer_db");
}
function des(){
    document.querySelector(".tela").classList.remove("aparecer_db");
}
*/

function IntoChat(){
    document.querySelector(".telachat").classList.add("apdr");
}
function IntoExposicao(){


    document.querySelector(".telaexpo").classList.add("aprdb");
}

var m = false
function ShowMore(){
    m = !m

    if (m){
        document.getElementById('Btler').innerHTML = "Ler menos";

        document.querySelector(".MaisSobre").classList.add("mostrar");
        
    }
    else{
        document.getElementById('Btler').innerHTML = "Ler mais";

        document.querySelector(".MaisSobre").classList.remove("mostrar");
    }
}