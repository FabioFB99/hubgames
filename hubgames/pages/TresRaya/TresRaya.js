import "./TresRaya.css";
import { printTemplate as HomeTemplate } from "../Home/Home";
let turno = 0;
const posiciones = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const template = () => `
<div class="contenedorgeneral"> 
    <div class="headerppt"> 
        <h1>Tres en Raya</h1>
        <button id="backHomeBtn" class="my-btn">Back Home</button>
     </div>
     <div class="resultado" id="resu"></div>
     <div class="juegotr">
      <button id="btnjuego" value ="0"></button>
      <button id="btnjuego" value ="1"></button>
      <button id="btnjuego" value ="2"></button>
      <button id="btnjuego" value ="3"></button>
      <button id="btnjuego" value ="4"></button>
      <button id="btnjuego" value ="5"></button>
      <button id="btnjuego" value ="6"></button>
      <button id="btnjuego" value ="7"></button>
      <button id="btnjuego" value ="8"></button>
     </div>
     
</div>
`;
const Resultado = (array) => {
  if (
    array[0] == array[1] &&
    array[0] == array[2] &&
    (array[0] == "red" || array[0] == "blue")
  ) {
    document.querySelector(
      "#resu"
    ).innerHTML = `<h1>Ha ganado el de color ${array[0]}</h1>`;
    document.body.style.backgroundColor = array[0];
  }
  if (
    array[3] == array[4] &&
    array[3] == array[5] &&
    (array[3] == "red" || array[3] == "blue")
  ) {
    document.querySelector(
      "#resu"
    ).innerHTML = `<h1>Ha ganado el de color ${array[3]}</h1>`;
    document.body.style.backgroundColor = array[3];
  }
  if (
    array[6] == array[7] &&
    array[6] == array[8] &&
    (array[6] == "red" || array[6] == "blue")
  ) {
    document.querySelector(
      "#resu"
    ).innerHTML = `<h1>Ha ganado el de color ${array[6]}</h1>`;
    document.body.style.backgroundColor = array[6];
  }
  if (
    array[0] == array[4] &&
    array[0] == array[8] &&
    (array[0] == "red" || array[0] == "blue")
  ) {
    document.querySelector(
      "#resu"
    ).innerHTML = `<h1>Ha ganado el de color ${array[0]}</h1>`;
    document.body.style.backgroundColor = array[0];
  }
  if (
    array[2] == array[4] &&
    array[2] == array[6] &&
    (array[2] == "red" || array[2] == "blue")
  ) {
    document.querySelector(
      "#resu"
    ).innerHTML = `<h1>Ha ganado el de color ${array[2]}</h1>`;
    document.body.style.backgroundColor = array[2];
  }
};

const BotonPulsado = (ebtn) => {
  turno++;
  let color = turno % 2 ? "blue" : "red";
  ebtn.target.style.backgroundColor = color;
  //console.log(ebtn.target.value);
  posiciones[ebtn.target.value] = color;
  Resultado(posiciones);
};
const addListeners = () => {
  document.querySelector("#backHomeBtn").addEventListener("click", () => {
    HomeTemplate();
  });
  document
    .querySelectorAll("#btnjuego")
    .forEach((btn) => btn.addEventListener("click", (ev) => BotonPulsado(ev)));
  // aqui en la linea de arriba cogemnos cualquier voton y le pasamos el evento directamente a nuestra funcion para
  // que el target sepa a cual de los elementos estamos haciendo referencia
};
export const printTemplate = () => {
  document.querySelector("#main").innerHTML = template();
  addListeners();
};
