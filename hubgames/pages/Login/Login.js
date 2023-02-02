import "./Login.css";
import { printTemplate as HomeTemplate } from "../Home/Home";
const template = () =>
  `
<section class="login">
<h2>Neoland</h2>
<h2>Hub-Games</h2>
<p>Introduce tu nombre</p>
<input type="text" id="loginInput"/>
<button id="loginBtn" class="my-btn">Login</button>
</section>`;
const addListeners = () => {
  const loginInput = document.querySelector("#loginInput");
  document.querySelector("#loginBtn").addEventListener("click", () => {
    localStorage.setItem("user", loginInput.value);
    if (loginInput.value) {
      HomeTemplate();
    }
  });
};

export const printTemplate = () => {
  document.querySelector("#main").innerHTML = template();
  addListeners();
};
