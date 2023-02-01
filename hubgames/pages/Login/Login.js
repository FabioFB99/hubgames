import "./Login.css";
import { cleanPage } from "../../utils/cleanPage";
import { NormalButton } from "../../components/NormalButton/NormalButton";
export const Login = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
  <div class="login">
          <h1>Neoland</h1>
          <h1>Hub-Games</h1>
          <p>Introduce tu Usuario y Contraseña</p>
          <input type="text" id="Usuario">
          <input type="password"  id="passwordLogin">
          ${NormalButton("👍", "login")}
 </div>`;
};
