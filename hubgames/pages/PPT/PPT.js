import "./PPT.css";
import { printTemplate as HomeTemplate } from "../Home/Home";
const elementos = ["piedra", "papel", "tijera"];
let oponente = "";
const template = () => `
<div class="contenedorgeneralppt"> 
    <div class="headerppt"> 
        <h1>Piedra Papel Tijera</h1>
        <button id="backHomeBtn" class="my-btn">Back Home</button>
     </div>
     <div class="juegoppt">
        <select id="eleccion">
            <option value="piedra">๐</option>
            <option value="papel">๐งป</option>
            <option value="tijera">โ</option>
        </select>
        <button id="jugar" class="my-btn">Lets Play</button>
        <h3 id="jugadaoponente"></h3>
        <h1 id="resultado"></h1>
     </div>
</div>
`;

const Resultado = (j1, j2) => {
  if (j1 == j2) {
    document.querySelector("#resultado").innerHTML = `Empate Prueba otra vez`;
    document.body.style.backgroundColor = "white";
  }
  if (j1 == "piedra" && j2 == "tijera") {
    document.querySelector("#resultado").innerHTML = `Bien :) has ganado!!!!!!`;
    document.body.style.backgroundColor = "green";
  }
  if (j1 == "papel" && j2 == "piedra") {
    document.querySelector("#resultado").innerHTML = `Bien :) has ganado!!!!!!`;
    document.body.style.backgroundColor = "green";
  }
  if (j1 == "tijera" && j2 == "papel") {
    document.querySelector("#resultado").innerHTML = `Bien :) has ganado!!!!!!`;
    document.body.style.backgroundColor = "green";
  }
  if (j1 == "piedra" && j2 == "papel") {
    document.querySelector("#resultado").innerHTML = `Fatal has perdido :(`;
    document.body.style.backgroundColor = "red";
  }
  if (j1 == "papel" && j2 == "tijera") {
    document.querySelector("#resultado").innerHTML = `Fatal has perdido :(`;
    document.body.style.backgroundColor = "red";
  }
  if (j1 == "tijera" && j2 == "piedra") {
    document.querySelector("#resultado").innerHTML = `Fatal has perdido :(`;
    document.body.style.backgroundColor = "red";
  }
};
const jugadaOponente = () => {
  oponente = elementos[Math.floor(Math.random() * elementos.length)];

  document.querySelector(
    "#jugadaoponente"
  ).innerHTML = `El oponente ha sacado: ${oponente.toUpperCase()}`;
  if (oponente == "piedra") {
    document.querySelector("#jugadaoponente").innerHTML += `๐`;
  }
  if (oponente == "papel") {
    document.querySelector("#jugadaoponente").innerHTML += `๐งป`;
  }
  if (oponente == "tijera") {
    document.querySelector("#jugadaoponente").innerHTML += `โ`;
  }
  const tu = document.querySelector("#eleccion").value;
  Resultado(tu, oponente);
};

const addListeners = () => {
  document.querySelector("#backHomeBtn").addEventListener("click", () => {
    HomeTemplate();
  });
  document.querySelector("#jugar").addEventListener("click", () => {
    jugadaOponente();
  });
};
export const printTemplate = () => {
  document.querySelector("#main").innerHTML = template();
  addListeners();
};
