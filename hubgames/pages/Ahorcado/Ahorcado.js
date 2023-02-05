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
            <h1 id ="intentos"></h1>
        </div>
        <input type="text" id="letra">
        <button id="probar" class="my-btn">👍</button>
        
        <h1 id ="palabraahorcadoempty"></h1>
        <h1 class = "palabraahorcado" id ="palabraahorcado">Letras que contiene: </h1>
         <h1 class = "palabraahorcado" id ="nopalabraahorcado">Letras que no contiene: </h1>
        <h3 id="jugadaoponente"></h3>
        <h1 id="resultado"></h1>
     </div>
</div>
`;

// juan contiene j si => guardar => pintar
const ahorc = (letra) => {
  if (
    !arrayvaciopalabra.includes(letra) &&
    palabrasplit.includes(letra) &&
    cont != 0
  ) {
    console.log(letra);
    arrayvaciopalabra.push(letra.toLowerCase());
    document.querySelector("#palabraahorcado").innerHTML += `${letra}`;
  } else {
    cont--;
    if (cont != 0) {
      arrayletrasnocontiene.push(letra.toLowerCase());
      document.querySelector("#intentos").innerHTML = `${cont}`;
      document.querySelector("#nopalabraahorcado").innerHTML += `${letra}`;
    }
  }
};
const addListeners = () => {
  document.querySelector("#backHomeBtn").addEventListener("click", () => {
    HomeTemplate();
  });
  document.querySelector("#probar").addEventListener("click", () => {
    ahorc(document.querySelector("#letra").value);
    //console.log(palabrasplit);
  });
};

export const printTemplate = () => {
  document.querySelector("#main").innerHTML = template();
  addListeners();
};
