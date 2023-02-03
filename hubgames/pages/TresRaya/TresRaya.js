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
    array[0] == array[3] &&
    (array[0] == "red" || array[0] == "blue")
  ) {
  }
};
const BotonPulsado = (ebtn) => {
  turno++;
  color = turno % 2 ? "blue" : "red";
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
