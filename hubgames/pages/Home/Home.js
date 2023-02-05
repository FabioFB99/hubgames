import "./Home.css";
import { printTemplate as LoginTemplate } from "../Login/Login";
import { printTemplate as PokedexTemplate } from "../Pokedex/Pokedex";
import { printTemplate as PptTemplate } from "../PPT/PPT";
import { printTemplate as TRTemplate } from "../TresRaya/TresRaya";
import { printTemplate as AhTemplate } from "../Ahorcado/Ahorcado";
const template = () => `
<div class="contenedorgeneral"> 
    <h2>Bienvenido 👋🏻 ${localStorage.getItem("user")}</h2>
    <div class="contenedorjuegos">
        <button id="pokedex" class="my-btn">Pokedex</button>
        <button id="ppt" class="my-btn">💎🧻✂</button>
        <button id="tr" class="my-btn">3 Raya</button>
        <button id="ahor" class="my-btn">Ahorcado</button>
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
  document.querySelector("#ppt").addEventListener("click", () => {
    PptTemplate();
  });
  document.querySelector("#tr").addEventListener("click", () => {
    TRTemplate();
  });
  document.querySelector("#ahor").addEventListener("click", () => {
    AhTemplate();
  });
};

export const printTemplate = () => {
  document.querySelector("#main").innerHTML = template();
  addListeners();
};
