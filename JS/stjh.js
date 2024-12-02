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

var pausar = document.getElementById('videoaula');

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

    pausar.src = "https://www.youtube.com/embed/SWG9KWk5XPI?si=whr3RdEqXKjYbrHM";
};


function IntoOlimpiada1(){
    des();

    document.querySelector(".videotela").classList.add("aparecer_db2");
    document.getElementById('listaV1').classList.remove("sumir");
    document.getElementById('listaV2').classList.add("sumir");

    Aula1Olimp1();
};

function IntoOlimpiada2(){
    des();
    
    document.querySelector(".videotela").classList.add("aparecer_db2");
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
    video.src = "https://www.youtube.com/embed/SWG9KWk5XPI?si=whr3RdEqXKjYbrHM";
    video.title = "Apresentando o VSCode";
    // document.getElementById("sc").innerHTML = "Aula 1";
    document.getElementById("Titulo").innerHTML = "Preparando o Ambiente de programação";
    document.getElementById("descricao").innerHTML = "É sempre importante ter um espaço para trabalhar, antes de partir para as contas, é necessário conseguir papel e lápis, já para começar a programar, é necessário possuir um interpretador de comandos, ou seja, um software/aplicativo capaz de interpretar os códigos.";
    document.getElementById("professor").innerHTML = "Professor Yuri Lacerda - IFCE Campus Crato.";
    // material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    // material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    // Pausar();

    Bquiz(4);
}

function Aula2Olimp1(){
    video.src = "https://www.youtube.com/embed/SWG9KWk5XPI?si=whr3RdEqXKjYbrHM";
    video.title = "Apresentando o VSCode";
    // document.getElementById("sc").innerHTML = "Aula 1";
    document.getElementById("Titulo").innerHTML = "Preparando o Ambiente de programação";
    document.getElementById("descricao").innerHTML = "É sempre importante ter um espaço para trabalhar, antes de partir para as contas, é necessário conseguir papel e lápis, já para começar a programar, é necessário possuir um interpretador de comandos, ou seja, um software/aplicativo capaz de interpretar os códigos.";
    document.getElementById("professor").innerHTML = "Professor Yuri Lacerda - IFCE Campus Crato.";
    // material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    // material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    // Pausar();

    Bquiz(5);
}

function Aula3Olimp1(){
    video.src = "https://www.youtube.com/embed/SWG9KWk5XPI?si=whr3RdEqXKjYbrHM";
    video.title = "Apresentando o VSCode";
    // document.getElementById("sc").innerHTML = "Aula 1";
    document.getElementById("Titulo").innerHTML = "Preparando o Ambiente de programação";
    document.getElementById("descricao").innerHTML = "É sempre importante ter um espaço para trabalhar, antes de partir para as contas, é necessário conseguir papel e lápis, já para começar a programar, é necessário possuir um interpretador de comandos, ou seja, um software/aplicativo capaz de interpretar os códigos.";
    document.getElementById("professor").innerHTML = "Professor Yuri Lacerda - IFCE Campus Crato.";
    // material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    // material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    // Pausar();

    Bquiz(6);
}

function Aula4Olimp1(){
    video.src = "https://www.youtube.com/embed/SWG9KWk5XPI?si=whr3RdEqXKjYbrHM";
    video.title = "Apresentando o VSCode";
    // document.getElementById("sc").innerHTML = "Aula 1";
    document.getElementById("Titulo").innerHTML = "Preparando o Ambiente de programação";
    document.getElementById("descricao").innerHTML = "É sempre importante ter um espaço para trabalhar, antes de partir para as contas, é necessário conseguir papel e lápis, já para começar a programar, é necessário possuir um interpretador de comandos, ou seja, um software/aplicativo capaz de interpretar os códigos.";
    document.getElementById("professor").innerHTML = "Professor Yuri Lacerda - IFCE Campus Crato.";
    // material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    // material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    // Pausar();

    Bquiz(0);
}

function Aula5Olimp1(){
    video.src = "https://www.youtube.com/embed/SWG9KWk5XPI?si=whr3RdEqXKjYbrHM";
    video.title = "Apresentando o VSCode";
    // document.getElementById("sc").innerHTML = "Aula 1";
    document.getElementById("Titulo").innerHTML = "Preparando o Ambiente de programação";
    document.getElementById("descricao").innerHTML = "É sempre importante ter um espaço para trabalhar, antes de partir para as contas, é necessário conseguir papel e lápis, já para começar a programar, é necessário possuir um interpretador de comandos, ou seja, um software/aplicativo capaz de interpretar os códigos.";
    document.getElementById("professor").innerHTML = "Professor Yuri Lacerda - IFCE Campus Crato.";
    // material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    // material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    // Pausar();

    Bquiz(0);
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

    Bquiz(0);
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

    Bquiz(1);
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

    Bquiz(2);
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

    Bquiz(3);
}

function Aula5Olimp2(){
    video.src = "VID-20230504-WA0033.mp4";
    // document.getElementById('sc').innerHTML = "Aula 5";
    document.getElementById('titleAula').innerHTML = "Conteúdo tal";
    document.getElementById('descript').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste accusantium, maiores vero aliquam veniam hic, iure illo suscipit eveniet inventore fugit porro doloribus fugiat ex rerum molestias voluptatibus necessitatibus.";
    document.getElementById('autoria').innerHTML = "Professor fulano - instituição tal.";
    material.href = "file:///C:/Users/alisson/Desktop/Plataforma/MODELOS DCUMENTOS OMIF 2024.pdf";
    material.download = "MODELOS DCUMENTOS OMIF 2024.pdf";
    // Pausar();

    // Bquiz(0);
}

let buttons = document.querySelectorAll(".botoesDQ");

function Bquiz(indB){
    buttons.forEach(element => {
        element.classList.add("sumir");
    });

    buttons[indB].classList.remove("sumir");
}

let perguntas = [["<b>1º</b> Existem inúmeros sites que apresentam aplicativos para download, desde jogos até editores. Todos apresentando inúmeros recursos e telas diferentes. Sobre essa situação, um determinado aluno precisa instalar o Vscode, mas questiona-se de qual site utilizar. Marque a alternativa que apresenta o que esse jovem deve fazer: ",
                    "<b>2º</b> O Visual Studio Code é um editor de código fonte bastante utilizado no mundo da programação, ele foi desenvolvido pela Microsoft e é disponibilizado de forma gratuita. Seu desenvolvimento de deu com base em open source (um softaware de código-fonte aberto para uso público). Sobre o Vscode, assinale a questão que Não apresenta uma funcionalidade do mesmo: ",
                    "<b>3º</b> Além do próprio objetivo de cada aplicativo, os mesmos também podem apresentar diversas outras funcionalidades que busquem manter, agradar e até auxiliar seus usuários. Ciente de que o objetivo de qualquer aplicativo é que ele seja acessado, e que para isso são desenvolvidos recursos que permitem ao usuário customizá-lo, marque a alternativa que apresenta a única opção de customização que não está disponível no Vscode:",
                    "<b>4º</b> Interações com as funcionalidades da interface de aplicativos são majoritariamente realizadas pelo mouse, clicar em botões, dispor janelas e reorganizá-las, etc. Contudo, essa não é a única forma de realizar essa ação, pois existem os atalhos do teclado, que agilizam determinadas ações. Marque a alternativa que apresenta a opção presente no menu do Vscode acionada pelo atalho 'Ctrl + Shift + E': ",
                    "<b>5º</b> Em relação ao código:<tt><br>x = int(input('Digite um alguma coisa: ')) <br>y = input('Digite outra coisa')<br>print(x,y)<br><br><tt> foram digitadas as respectivas entradas, 'um' e 2. Marque a alternativa que representa a saída gerada:"],
                
                    ["<b>1º</b> Funções em python são blocos de código que podem ser reutilizados ao longo do código, elas são extremamente úteis em diversos projetos, principalmente os mais complexos, proporcionando o desenvolvimento de determinadas aplicações e a otimização do código. Para declarar uma função, é necessário seguir determinadas regras, marque a alternativa que apresenta um nome válido para uma função:",
                    "<b>2º</b> Muitas práticas de programação são ditas como 'boas práticas', geralmente buscando padronizações ou melhorando o conteúdo do próprio programa. Contudo, certas práticas como a utilização de certos comandos podem trazer várias vantagens ao programador, o que não é diferente para as funções. Após analisar as alternativas abaixo, marque aquela que não apresentar uma vantagem propiciada pelas funções:",
                    "<b>3º</b> Após analizar o código abaixo, marque a alternativa que apresenta a saída que será apresentada: <tt><br>def funcao1(x):<br> &emsp; x = 20<br>def funcao2(x):<br> &emsp; x = 10<br> &emsp; funcao1(x)<br> &emsp; return x<br>x = 0<br>print(funcao2(x))<tt>",
                    "<b>4º</b> Ao trabalharmos com funções em python, nos deparamos com a seguinte situação: criamos uma função para alterar o valor de uma variável, mas ao utilizá-la, a variável permanece sem alterações. Isso ocorre devido ao escopo da variável, ou seja, a parte do programa onde podemos utilizá-la. Uma forma de evitar que a variável não seja alterada está descrita na alternativa:",
                    "<b>5º</b> Como visto na questão anterior, o escopo de uma variável define aonde ela pode ser utilizada, ou seja, aonde pode ter seu valor alterado. Dessa forma, para garantir que variáveis possam ser alteradas por funções, utiliza-se o comando return, todavia, existe um tipo de variável que não precisa disto, assinale a alternativa que apresenta esse tipo de variável: "],
                
                    ["<b>1º</b> Em relação aos comandos para manipulação de listas, assilane a alternativa que apresenta dois comandos para inserir dados em uma lista: ",
                    "<b>2º</b> Existem diversos tipos de variáveis, cada uma podendo conter tipos específicos de dados, por exemplo: string contem texto; booleana, valores booleanos(true e false) e assim por dientes. Marque a alternativa que apresenta o tipo de dados que armazena em listas (para a linguagem python):",
                    "<b>3º</b> Marque a alternativa que representa a saída do seguinte código:<tt><br>lista = []<br>lista2 = lista<br><br>for i in range(11):<br> &emsp; if (i%2) == 0:<br>&emsp; &emsp;lista2.append(i)<br>&emsp;else:<br>&emsp;&emsp;lista.append(i)<br>print(lista)<tt>",
                    "<b>4º</b> Conforme demonstrado no item anterior, atrubuir uma lista antiga a uma nova lista pode gerar problemas, pois ao realizar isso, acabamos alocando o mesmo espaço na memória para as duas listas, assim o que for alterado em uma também é alterado na outra. Para solucionar esse problema, existe um certo comando para manipulação de listas que pode ser utilizado. Marque a alternativa que apresenta esse comando:",
                    "<b>5º</b> Sobre os comandos listados abaixo, qual não se aplica à listas?"],

                    ["<b>1º</b> Matrizes são definidas como estruturas que dispõem dados em i linha e j colunos, geralemente abrangem o mesmo tipo de dados, mas em python podem conter dados de diferentes tipos, assim como as listas. Depois dessa brevíssima explicação, assinale a alternativa que apresenta uma definição ainda mais simples.",
                    "<b>2º</b> Ainda a respeito da definição de matrizes, uma possível analogia está presente em:",
                    "<b>3º</b> Para percorrer uma lista, comummente utilizamos o comando for. Marque a alternativa que apresenta uma possível abordagem para realizar essa ação com uma matriz.",
                    "<b>4º</b> Marque a alternativa que apresenta a saída referente ao código abaixo:<bt> matriz = [[10,22,36],[45,50,6],[70,8,9,100]]<br><br>maior = matriz[0][0]<br>for linha in matriz:<br>&emsp; for elemento in linha:<br>&emsp; &emsp; if elemento > maior:<br>&emsp; &emsp; &emsp; maior = elemento<br><br>print(maior)",
                    "<b>5º</b> Que tal um teste de memória? Marque a alternativa que contém um comando que reduziria a quantidade de linhas e laços para a execução da aplicação:"],

                    ["<b>1º</b> Enunciado da questão. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.",
                    "<b>2º</b> Enunciado da questão. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.",
                    "<b>3º</b> Enunciado da questão. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.",
                    "<b>4º</b> Enunciado da questão. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.",
                    "<b>5º</b> Enunciado da questão. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia."],

                    ["<b>1º</b> Enunciado da questão. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.",
                    "<b>2º</b> Enunciado da questão. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.",
                    "<b>3º</b> Enunciado da questão. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.",
                    "<b>4º</b> Enunciado da questão. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.",
                    "<b>5º</b> Enunciado da questão. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia."],

                    ["<b>1º</b> Enunciado da questão. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.",
                    "<b>2º</b> Enunciado da questão. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.",
                    "<b>3º</b> Enunciado da questão. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.",
                    "<b>4º</b> Enunciado da questão. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.",
                    "<b>5º</b> Enunciado da questão. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia.Neque, accusantium qui dolore iusto necessitatibus fugit, doloribus nostrum ipsum voluptatum architecto recusandae nisi aperiam facilis amet aliquid, repudiandae eos molestias quia."]
]

let alternertivas = [
                [["Utilizar o site oficial", "Utilizar site pirata", "Procurar outra IDE", "Nada"],
                ["Mais de 10 mil extensões", "Gerenciamento de dispositivos periféricos", "Depura em qualquer SO", "Suporte para GIT"],
                ["Instalar ferramentas e linguagens", "Configurações e atalhos", "Tema de cores", "Espaço acupado na memória"],
                ["Gerenciamento de extensões", "Ferramenta de busca", "Gerenciamento de código", "Explorador de arquivos"],
                ["um 2", "um<br>2", "Ocorrerá um erro", "Nenhuma das alternativas"]
                ],
                [["Funcao(arg)", "1Correta()", "não()", "Marca#()"],
                ["Agrupamento de comandos", "Independência de sintaxes", "Elimina repetiçao de código", "Usada por diversos programas"],
                ["0", "20", "erro", "10"],
                ["Criar outra função", "adicioanar escopo = false", "utilizar argumentos", "utilizar o return"],
                ["Booleana", "String", "lista", "tupla"]
                ],

                [["append() e insert()", "sort() e append", "int() e index()", "append() e into()"],
                ["booleanos", "Nenhuma das alternativas", "valores numéricos", "textos"],
                ["none", "[1, 3, 5, 7, 9]", "[0, 2, 4, 6, 8, 10]", "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"],
                [".sort()", ".index()", ".no_memory()", ".copy()"],
                ["len()", "max()", ".replace()", ".index()"]
                ],

                [["Uma lista de listas", "não é possível", "variável especial", "caixa de dados"],
                ["fila de supermercado", "Jogo batalha naval", "dado", "nenhuma das alternativas"],
                ["Utilizar o while", "utilizar muitos if's", "utilizar um comando próprio para isso", "utilizar dois comandos for alinhados"],
                ["10", "30", "9", "100"],
                ["min()", "while", "max()", "def() #criar função"]
                ],

                [["Alternativa", "Alternativa", "Alternativa", "Alternativa"],
                ["Alternativa", "Alternativa", "Alternativa", "Alternativa"],
                ["Alternativa", "Alternativa", "Alternativa", "Alternativa"],
                ["Alternativa", "Alternativa", "Alternativa", "Alternativa"],
                ["Alternativa", "Alternativa", "Alternativa", "Alternativa"]
                ],
                [["Alternativa", "Alternativa", "Alternativa", "Alternativa"],
                ["Alternativa", "Alternativa", "Alternativa", "Alternativa"],
                ["Alternativa", "Alternativa", "Alternativa", "Alternativa"],
                ["Alternativa", "Alternativa", "Alternativa", "Alternativa"],
                ["Alternativa", "Alternativa", "Alternativa", "Alternativa"]
                ],
                [["Alternativa", "Alternativa", "Alternativa", "Alternativa"],
                ["Alternativa", "Alternativa", "Alternativa", "Alternativa"],
                ["Alternativa", "Alternativa", "Alternativa", "Alternativa"],
                ["Alternativa", "Alternativa", "Alternativa", "Alternativa"],
                ["Alternativa", "Alternativa", "Alternativa", "Alternativa"]
                ]
]

let imagens = [["Img/OncFundo.jpg", "Img/obi.png", "Img/obr.png", "Img/OncFundo.jpg", "Img/OncFundo.jpg"],
                ["Img/OncFundo.jpg", "Img/obi.png", "Img/obr.png", "Img/OncFundo.jpg", "Img/OncFundo.jpg"],
                ["Img/OncFundo.jpg", "Img/obi.png", "Img/obr.png", "Img/OncFundo.jpg", "Img/OncFundo.jpg"],
                ["Img/OncFundo.jpg", "Img/obi.png", "Img/obr.png", "Img/OncFundo.jpg", "Img/OncFundo.jpg"],
                ["Img/OncFundo.jpg", "Img/obi.png", "Img/obr.png", "Img/OncFundo.jpg", "Img/OncFundo.jpg"],
                ["Img/OncFundo.jpg", "Img/obi.png", "Img/obr.png", "Img/OncFundo.jpg", "Img/OncFundo.jpg"],
                ["Img/OncFundo.jpg", "Img/obi.png", "Img/obr.png", "Img/OncFundo.jpg", "Img/OncFundo.jpg"]
]

let Contquizzes = document.querySelector(".ConteinerQuiz");
let quiz = document.querySelector(".quiz");

let pers = document.querySelectorAll(".Enunciado p");
let alts = document.querySelectorAll(".Alternativas button");
let imgs = document.querySelectorAll(".questao img");

function Quiz(ind){
    Contquizzes.classList.add("iniciarConteiner");
    quiz.classList.add("initQuiz");

    var c = 0
    for (let i = 0; i < 5; i++) {
        pers[i].innerHTML = perguntas[ind][i];
        imgs[i].src = imagens[ind][i];

        
        for (let j = 0; j < 4; j++) {
            alts[j + c].innerHTML = alternertivas[ind][i][j];
            
        }
        c = c + 4
        
    }
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

    Contquizzes.classList.remove("iniciarConteiner");
    
    quiz.classList.remove("initQuiz");
}


// Responsividade

var menu = document.getElementById("IdMenu");
var bg = document.querySelector("body")
var r = true

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

function CloseMenu(){
    menu.classList.add("off");
    bg.classList.add("offbg");

    r = false
}
