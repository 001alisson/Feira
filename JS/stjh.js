function IntoHome(){
    des();
    buton1();

    document.querySelector(".welcome").classList.add("aparecer_dr");
    document.getElementById('listaV2').classList.add("sumir");
};

function IntoOlimpiadas(){
    des();
    buton2();

    document.querySelector(".tela").classList.add("aparecer_db");
};


function IntoSimulados(){
    des();
    buton3();
    
    document.querySelector(".ConteinerSimulados").classList.add("IntoSimul");
}

function IntoChat(){
    des();
    buton4();
    document.querySelector(".telachat").classList.add("apdr");
}

function IntoExposicao(){
    des();
    buton5();

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


function des(){
    document.querySelector(".welcome").classList.remove("aparecer_dr");
    document.querySelector(".tela").classList.remove("aparecer_db");

    document.querySelector(".videotela").classList.remove("aparecer_db2");
    document.querySelector(".videotela").classList.remove("aprecer_db2");

    document.querySelector(".telachat").classList.remove("apdr");

    document.querySelector(".telaexpo").classList.remove("aprdb");

    document.querySelector(".ConteinerSimulados").classList.remove("IntoSimul");
};


function IntoOlimpiada1(){
    des();

    document.querySelector(".videotela").classList.add("aparecer_db2");
    document.getElementById('listaV1').classList.remove("sumir");
    document.getElementById('listaV2').classList.add("sumir");
};

function IntoOlimpiada2(){
    IntoOlimpiada1();

    document.getElementById('listaV1').classList.add("sumir");
    document.getElementById('listaV2').classList.remove("sumir");
}

var botoes = document.querySelectorAll(".menu button");

function buton1(){
    botoes.forEach(b => {
        b.classList.remove("btclick");
    });

    botoes[0].classList.add("btclick");
}
function buton2(){
    botoes.forEach(b => {
        b.classList.remove("btclick");
    });

    botoes[1].classList.add("btclick");
}
function buton3(){
    botoes.forEach(b => {
        b.classList.remove("btclick");
    });

    botoes[2].classList.add("btclick");
}
function buton4(){
    botoes.forEach(b => {
        b.classList.remove("btclick");
    });

    botoes[3].classList.add("btclick");
}
function buton5(){
    botoes.forEach(b => {
        b.classList.remove("btclick");
    });

    botoes[4].classList.add("btclick");
}

IntoHome();


var video = document.getElementById('videoaula');
var material = document.getElementById('material');

function Pausar(){
    video.pause();
}

function Aula1Olimp1(){
    video.src = "VID-20230504-WA0033.mp4";
    document.getElementById('sc').innerHTML = "Aula 1";
    document.getElementById('titleAula').innerHTML = "Conteúdo tal";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste accusantium, maiores vero aliquam veniam hic, iure illo suscipit eveniet inventore fugit porro doloribus fugiat ex rerum molestias voluptatibus necessitatibus.";
    document.getElementById('autoria').innerHTML = "Professor fulano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";

    Pausar();
}

function Aula2Olimp1(){
    video.src = "20240407_073514.mp4";
    document.getElementById('sc').innerHTML = "Aula 2";
    document.getElementById('titleAula').innerHTML = "Conteúdo diverso";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit beatae placeat aperiam, perferendis totam a eveniet veritatis fuga suscipit itaque, maiores maxime consectetur modi, possimus sit ab? Facilis, provident sed?";
    document.getElementById('autoria').innerHTML = "Professor beltrano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/Fungos - ap.pdf";
    material.download = "Fungos - ap.pdf";
    Pausar();
}

function Aula3Olimp1(){
    video.src = "VID-20230504-WA0033.mp4";
    document.getElementById('sc').innerHTML = "Aula 3";
    document.getElementById('titleAula').innerHTML = "Conteúdo tal";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste accusantium, maiores vero aliquam veniam hic, iure illo suscipit eveniet inventore fugit porro doloribus fugiat ex rerum molestias voluptatibus necessitatibus.";
    document.getElementById('autoria').innerHTML = "Professor fulano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    Pausar();
}

function Aula4Olimp1(){
    video.src = "20240407_073514.mp4";
    document.getElementById('sc').innerHTML = "Aula 4";
    document.getElementById('titleAula').innerHTML = "Conteúdo diverso";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit beatae placeat aperiam, perferendis totam a eveniet veritatis fuga suscipit itaque, maiores maxime consectetur modi, possimus sit ab? Facilis, provident sed?";
    document.getElementById('autoria').innerHTML = "Professor beltrano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/Fungos - ap.pdf";
    material.download = "Fungos - ap.pdf";
    Pausar();
}

function Aula5Olimp1(){
    video.src = "VID-20230504-WA0033.mp4";
    document.getElementById('sc').innerHTML = "Aula 5";
    document.getElementById('titleAula').innerHTML = "Conteúdo tal";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste accusantium, maiores vero aliquam veniam hic, iure illo suscipit eveniet inventore fugit porro doloribus fugiat ex rerum molestias voluptatibus necessitatibus.";
    document.getElementById('autoria').innerHTML = "Professor fulano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    Pausar();
}

/* */

function Aula1Olimp2(){
    video.src = "VID-20230504-WA0033.mp4";
    document.getElementById('sc').innerHTML = "Aula 1";
    document.getElementById('titleAula').innerHTML = "Conteúdo tal";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste accusantium, maiores vero aliquam veniam hic, iure illo suscipit eveniet inventore fugit porro doloribus fugiat ex rerum molestias voluptatibus necessitatibus.";
    document.getElementById('autoria').innerHTML = "Professor fulano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    Pausar();
}

function Aula2Olimp2(){
    video.src = "20240407_073514.mp4";
    document.getElementById('sc').innerHTML = "Aula 2";
    document.getElementById('titleAula').innerHTML = "Conteúdo diverso";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit beatae placeat aperiam, perferendis totam a eveniet veritatis fuga suscipit itaque, maiores maxime consectetur modi, possimus sit ab? Facilis, provident sed?";
    document.getElementById('autoria').innerHTML = "Professor beltrano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/Fungos - ap.pdf";
    material.download = "Fungos - ap.pdf";
    Pausar();
}

function Aula3Olimp2(){
    video.src = "VID-20230504-WA0033.mp4";
    document.getElementById('sc').innerHTML = "Aula 3";
    document.getElementById('titleAula').innerHTML = "Conteúdo tal";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste accusantium, maiores vero aliquam veniam hic, iure illo suscipit eveniet inventore fugit porro doloribus fugiat ex rerum molestias voluptatibus necessitatibus.";
    document.getElementById('autoria').innerHTML = "Professor fulano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    Pausar();
}

function Aula4Olimp2(){
    video.src = "20240407_073514.mp4";
    document.getElementById('sc').innerHTML = "Aula 4";
    document.getElementById('titleAula').innerHTML = "Conteúdo diverso";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit beatae placeat aperiam, perferendis totam a eveniet veritatis fuga suscipit itaque, maiores maxime consectetur modi, possimus sit ab? Facilis, provident sed?";
    document.getElementById('autoria').innerHTML = "Professor beltrano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/Fungos - ap.pdf";
    material.download = "Fungos - ap.pdf";
    Pausar();
}

function Aula5Olimp2(){
    video.src = "VID-20230504-WA0033.mp4";
    document.getElementById('sc').innerHTML = "Aula 5";
    document.getElementById('titleAula').innerHTML = "Conteúdo tal";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste accusantium, maiores vero aliquam veniam hic, iure illo suscipit eveniet inventore fugit porro doloribus fugiat ex rerum molestias voluptatibus necessitatibus.";
    document.getElementById('autoria').innerHTML = "Professor fulano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    Pausar();
}




function Quiz(){
    document.querySelector(".ConteinerQuiz").classList.add("iniciarConteiner");
    document.querySelector(".quiz").classList.add("initQuiz");
}


const controls = document.querySelectorAll(".Alternativas button");
let currentItem = 0;
const items = document.querySelectorAll(".questao");
const maxItems = items.length;

var acertos = 0;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    certa = e.target.classList.contains("correta");
    
    if (certa){
        acertos += 1
    }

    currentItem += 1;
    
    items[currentItem].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
    });

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    
    document.getElementById("IdAcertos").innerHTML = acertos;
    document.getElementById("IdTotal").innerHTML = maxItems-1;

    if (acertos > ((maxItems-1) / 2)){
        document.getElementById("IdApoio").innerHTML = "PARABÉNS";
    }
    else{
        document.getElementById("IdApoio").innerHTML = "NÃO DESISTA";
    }

  });
});

function DesQuiz(){
    acertos = 0;
    currentItem = 0;

    items[currentItem].scrollIntoView({
        behavior: "instant",
        inline: "center",
        block: "nearest"
    });

    document.querySelector(".ConteinerQuiz").classList.remove("iniciarConteiner");
    document.querySelector(".quiz").classList.remove("initQuiz");
}











// const controlsOBR = document.querySelectorAll(".controls");
// let indece = 2;
// const itemsOBR = document.querySelectorAll(".Simulado");
// const maxItemsOBR = itemsOBR.length;

// itemsOBR[indece].scrollIntoView({
//     behavior: "instant",
//     inline: "center",
//     block: "nearest"
// });

// controlsOBR.forEach((controlOBR) => {
//   controlOBR.addEventListener("click", (f) => {
//     isLeftOBR = f.target.classList.contains("esquerda");
        
//     if (isLeftOBR) {
//       indece -= 1;

//       if (indece < 1) {
//         indece = 1;
//       }
      
//     } else {
//       indece += 1;

//       if (indece >= maxItemsOBR-1) {
//         indece = maxItemsOBR-2;
//       }
//     }

//     itemsOBR.forEach((itemB) => itemB.classList.remove("Simulado_view"));

//     itemsOBR[indece].scrollIntoView({
//       behavior: "smooth",
//       inline: "center",
//       block: "nearest"
//     });

//     itemsOBR[indece].classList.add("Simulado_view");
    
//   });
// });

// const controlsOBI = document.querySelectorAll(".ct2");
// let indeceOBI = 2;
// const itemsOBI = document.querySelectorAll(".sl2");
// const maxItemsOBI = itemsOBI.length;

// itemsOBI[indeceOBI].scrollIntoView({
//     behavior: "instant",
//     inline: "center",
//     block: "nearest"
// });

// controlsOBI.forEach((control2) => {
//   control2.addEventListener("click", (c) => {
//     isLeftOBI = c.target.classList.contains("esquerda");
        
//     if (isLeftOBI) {
//       indeceOBI -= 1;

//       if (indeceOBI < 1) {
//         indeceOBI = 1;
//       }
      
//     } else {
//       indeceOBI += 1;

//       if (indeceOBI >= maxItemsOBI-1) {
//         indeceOBI = maxItemsOBI-2;
//       }
//     }

//     itemsOBI.forEach((item2) => item2.classList.remove("Simulado_view"));

//     itemsOBI[indeceOBI].scrollIntoView({
//       behavior: "smooth",
//       inline: "center",
//       block: "nearest"
//     });

//     itemsOBI[indeceOBI].classList.add("Simulado_view");
    
//   });
// });
