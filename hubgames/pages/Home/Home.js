import "./Home.css";
import { printTemplate as LoginTemplate } from "../Login/Login";
const template = () => `
<section class="home">
<h2>Logeado</h2>
<button id="loginOutBtn">Logout</button>
</section>
`;

const addListeners = () => {
  document.querySelector("#loginOutBtn").addEventListener("click", () => {
    localStorage.removeItem("user");
    LoginTemplate();
  });
};

export const printTemplate = () => {
  document.querySelector("#main").innerHTML = template();
  addListeners();
};
