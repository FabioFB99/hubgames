import "./Home.css";
import { printTemplate as LoginTemplate } from "../Login/Login";
import { printTemplate as PokedexTemplate } from "../Pokedex/Pokedex";
const template = () => `
<div class="contenedorgeneral"> 
    <h2>Bienvenido 👋🏻 ${localStorage.getItem("user")}</h2>
    <div class="contenedorjuegos">
        <button id="pokedex" class="my-btn">Pokedex</button>
        <button  class="my-btn">Ya veremos</button>
    </div>
    <button id="loginOutBtn" class="my-btn">Logout</button>
</div>
`;

const addListeners = () => {
  document.querySelector("#loginOutBtn").addEventListener("click", () => {
    localStorage.removeItem("user");
    LoginTemplate();
  });
  document.querySelector("#pokedex").addEventListener("click", () => {
    PokedexTemplate();
  });
};

export const printTemplate = () => {
  document.querySelector("#main").innerHTML = template();
  addListeners();
};
