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

function IntoCapaOlimpiadas(capa) {
    des();

    document.querySelector(`.capa-${capa}`).classList.add("apdr");
}

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

    let capas = Array.from(document.querySelectorAll(".olimpiada-capas > div"));
    capas.forEach(capa => {
        capa.classList.remove("apdr");
    });

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

    Aula1Olimp2();
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
    // document.getElementById('sc').innerHTML = "Aula 1";
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
    // document.getElementById('sc').innerHTML = "Aula 3";
    document.getElementById('titleAula').innerHTML = "Conteúdo tal";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste accusantium, maiores vero aliquam veniam hic, iure illo suscipit eveniet inventore fugit porro doloribus fugiat ex rerum molestias voluptatibus necessitatibus.";
    document.getElementById('autoria').innerHTML = "Professor fulano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    Pausar();
}

function Aula4Olimp1(){
    video.src = "20240407_073514.mp4";
    // document.getElementById('sc').innerHTML = "Aula 4";
    document.getElementById('titleAula').innerHTML = "Conteúdo diverso";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit beatae placeat aperiam, perferendis totam a eveniet veritatis fuga suscipit itaque, maiores maxime consectetur modi, possimus sit ab? Facilis, provident sed?";
    document.getElementById('autoria').innerHTML = "Professor beltrano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/Fungos - ap.pdf";
    material.download = "Fungos - ap.pdf";
    Pausar();
}

function Aula5Olimp1(){
    video.src = "VID-20230504-WA0033.mp4";
    // document.getElementById('sc').innerHTML = "Aula 5";
    document.getElementById('titleAula').innerHTML = "Conteúdo tal";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste accusantium, maiores vero aliquam veniam hic, iure illo suscipit eveniet inventore fugit porro doloribus fugiat ex rerum molestias voluptatibus necessitatibus.";
    document.getElementById('autoria').innerHTML = "Professor fulano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    Pausar();
}

/* */

function Aula1Olimp2(){
    video.src = "https://www.youtube.com/embed/SWG9KWk5XPI?si=whr3RdEqXKjYbrHM";
    video.title = "Apresentando o VSCode";
    // document.getElementById("sc").innerHTML = "Aula 1";
    document.getElementById("Titulo").innerHTML = "Preparando o Ambiente de programação";
    document.getElementById("descricao").innerHTML = "É sempre importante ter um espaço para trabalhar, antes de partir para as contas, é necessário conseguir papel e lápis, já para começar a programar, é necessário possuir um interpretador de comandos, ou seja, um software/aplicativo capaz de interpretar os códigos.";
    document.getElementById("professor").innerHTML = "Professor Yuri Lacerda - IFCE Campus Crato.";
    // material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    // material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    // Pausar();
}

function Aula2Olimp2(){
    video.src = "https://www.youtube.com/embed/Gn94NkoAlxY?si=C7gJcmQlq5SUao47";
    video.title = "Funções em Python";
    // document.getElementById("sc").innerHTML = "Aula 1";
    document.getElementById("Titulo").innerHTML = "Funções em Python";
    document.getElementById("descricao").innerHTML = "Um conteúdo constantemente é nessa olimpíada e seu domínio é de extrema imprtância, mas ter conhecimento sobre funções está além da progração, uma vez que utilizamos da ideia de função em várias outras áreas do conhecimento, principalmente na matemático. Funções são muito úteis na programação, com elas podemos reutilizar blocos de código e otimizar o processamento do programa. Em definição, um função é um bloco de código identificado unicamente por nome que, ao ser definida, pode ser acessada várias vezes e em várias partes do código, além disso, as funções podem receber parâmetro e retornar valores.";
    document.getElementById("professor").innerHTML = "Professor Yuri Lacerda - IFCE Campus Crato.";
    // material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    // material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    // Pausar();
}

function Aula3Olimp2(){
    video.src = "https://www.youtube.com/embed/8wS_DmpA_dA?si=QIbtqPYctFkllCwj";
    video.title = "Manipulação de listas em Python";
    // document.getElementById('sc').innerHTML = "Aula 2";
    document.getElementById('Titulo').innerHTML = "Listas em Python";
    document.getElementById('descricao').innerHTML = "Com a forte presença de questões que necessitem desse conhecimento, as listas apresentam-se desempenhando grande importãncia para a realização de certas questões. Em diferentes momentos de nossa vida, precisamos organizar diferentes elementos por meio de listas. Na programação não é muito diferente, onde a lista é definida como uma estrutura/sequência de dados (de qualquer tipo em python).";
    document.getElementById("professor").innerHTML = "Professor Yuri Lacerda - IFCE Campus Crato.";
    // material.href = "file:///C:/Users/alisson/Desktop/Plataforma/Fungos - ap.pdf";
    // material.download = "Fungos - ap.pdf";
    // Pausar();
}

function Aula4Olimp2(){
    video.src = "https://www.youtube.com/embed/ERkvPPT7BJ8?si=frVLXAAAh9oegeZW";
    video.title = "Manipulando matrizes em py";
    // document.getElementById('sc').innerHTML = "Aula 3";
    document.getElementById('Titulo').innerHTML = "Matrizes em Python";
    document.getElementById('descricao').innerHTML = "Dentre as questões mais complicadas, várias tem abordado esse conteúdo, o qual também não se esconde de nossa vida cotidiana. Ao brincarmos de batalha naval e até nos referenciarmos em certos mapas, estamos utlizando esse conteúdo, que por sinal também está presente na matemática. Segundo o livro <i>Fundamentos de Programação<i/>, uma matriz é uma variável formada por uma sequência de valores dispostos em linhas e coluna.";
    document.getElementById("professor").innerHTML = "Professor Yuri Lacerda - IFCE Campus Crato.";
    // material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    // material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    // Pausar();
}

function Aula5Olimp2(){
    video.src = "VID-20230504-WA0033.mp4";
    // document.getElementById('sc').innerHTML = "Aula 5";
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


// Responsividade

var menu = document.getElementById("IdMenu");
var bg = document.querySelector("body")
var r = false

bg.classList.add("offbg");

function showMenu(){
    r = !r

    if (r){
        menu.classList.remove("off");
        bg.classList.remove("offbg")
    }
    else{
        menu.classList.add("off");
        bg.classList.add("offbg");
    }
    
}
showMenu();