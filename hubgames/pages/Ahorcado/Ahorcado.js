import "./Ahorcado.css";
import { printTemplate as HomeTemplate } from "../Home/Home";
const palabra = "juan";
const palabrasplit = palabra.split("");
const arrayvaciopalabra = [];
const arrayletrasnocontiene = [];
let cont = 10;
const template = () => `
<div class="contenedorgeneralahorcado"> 
    <div class="headerppt"> 
        <h1>Ahorcado</h1>
        <button id="backHomeBtn" class="my-btn">Back Home</button>
     </div>
     <div class="juegoahorcado">
        <div class="intentoss">
            <h1>Numero de intentos restantes</h1>
            <h1 id ="intentos"> ${cont}</h1>
        </div>
        <input type="text" id="letra">
        <button id="probar" class="my-btn">👍</button>
        
        <h1 id ="palabraahorcadoempty"></h1>
        <h1 class = "palabraahorcado" id ="palabraahorcado">¿palabra? </h1>
         <h1 class = "palabraahorcado" id ="nopalabraahorcado">Letras que no contiene: </h1>
        <h3 id="jugadaoponente"></h3>
        <h1 id="resultado"></h1>
     </div>
</div>
`;
for (let i = 0; i < palabrasplit.length; i++) {
  arrayvaciopalabra.push("");
}
// juan contiene j si => guardar => pintar
const ahorc = (letra) => {
  if (
    !arrayvaciopalabra.includes(letra) &&
    palabrasplit.includes(letra) &&
    cont != 0
  ) {
    console.log(letra);
    for (let i = 0; i < palabrasplit.length; i++) {
      if (letra == palabrasplit[i]) {
        arrayvaciopalabra[i] = letra;
      }
    }
    document.querySelector("#palabraahorcado").innerHTML = ``;
    for (let i = 0; i < arrayvaciopalabra.length; i++) {
      if (arrayvaciopalabra[i] == "") {
        document.querySelector("#palabraahorcado").innerHTML += `_`;
      } else {
        document.querySelector(
          "#palabraahorcado"
        ).innerHTML += `${arrayvaciopalabra[i]}`;
      }
    }
    let palabracomprobar = "";
    for (let i = 0; i < arrayvaciopalabra.length; i++) {
      const element = arrayvaciopalabra[i];
      palabracomprobar += element;
      if (palabracomprobar.toLocaleLowerCase() == palabra.toLocaleLowerCase()) {
        document.querySelector("#resultado").innerHTML = `Has ganado el juego`;
        document.body.style.backgroundColor = "green";
      }
    }
  } else {
    cont--;
    if (cont != 0) {
      arrayletrasnocontiene.push(letra.toLowerCase());
      document.querySelector("#intentos").innerHTML = `${cont}`;
      document.querySelector("#nopalabraahorcado").innerHTML += `${letra}`;
    }
    if (cont == 0 && arrayvaciopalabra != palabrasplit) {
      document.querySelector("#intentos").innerHTML = `${cont}`;
      document.querySelector("#resultado").innerHTML = `Has perdido el juego`;
      document.body.style.backgroundColor = "red";
    }
  }
};
const addListeners = () => {
  document.querySelector("#backHomeBtn").addEventListener("click", () => {
    HomeTemplate();
  });
  document.querySelector("#probar").addEventListener("click", () => {
    ahorc(document.querySelector("#letra").value.toLowerCase());
    //console.log(palabrasplit);
  });
};

export const printTemplate = () => {
  document.querySelector("#main").innerHTML = template();
  addListeners();
};
