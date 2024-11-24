const ObrControle = document.querySelectorAll(".controls");
let ind = 1;
const OBRsimuls = document.querySelectorAll(".Simulado");
const Obrmax = OBRsimuls.length;



ObrControle.forEach((obrc) => {
  obrc.addEventListener("click", (f) => {
    esquobr = f.target.classList.contains("esquerda");
        
    if (esquobr) {
      ind -= 1;

      if (ind < 1) {
        ind = 1;
      }
      
    } else {
      ind += 1;

      if (ind >= Obrmax-1) {
        ind = Obrmax-2;
      }
    }

    OBRsimuls.forEach((silobr) => silobr.classList.remove("visto"));

    OBRsimuls[ind].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    OBRsimuls[ind].classList.add("visto");
    
  });
});

const obicontrl = document.querySelectorAll(".ct2");
let mostrado = 1;
const obisimulados = document.querySelectorAll(".sl2");
const obimax = obisimulados.length;



obicontrl.forEach((obic) => {
  obic.addEventListener("click", (c) => {
    leftobi = c.target.classList.contains("esquerda");
        
    if (leftobi) {
      mostrado -= 1;
    } 
    else {
      mostrado += 1;
    }

    
    if (mostrado < 1) {
      mostrado = 1;
    }
    if (mostrado >= obimax-1) {
      mostrado = obimax-2;
    }

    obisimulados.forEach((simobi) => simobi.classList.remove("Mostrado"));

    obisimulados[mostrado].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    obisimulados[mostrado].classList.add("Mostrado");
    
  });
});

function IntoSimuladosTESTE(){
  document.querySelector(".ConteinerSimulados").classList.add("IntoSimul");
}

function d(){
  document.querySelector(".ConteinerSimulados").classList.remove("IntoSimul");
}
