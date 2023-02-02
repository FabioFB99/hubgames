import "./style.css";
import { Header } from "./components/Header/Header";
import { changeBackground } from "./components/Header/Header";
import { printTemplate as LoginTemplate } from "./pages/Login/Login";
import { printTemplate as HomeTemplate } from "./pages/Home/Home";

const header = document.querySelector("header");
header.innerHTML = Header();
changeBackground();
export const initContent = (route) => {
  switch (route) {
    case undefined:
      localStorage.getItem("user") ? HomeTemplate() : LoginTemplate();
      break;
    case "Login":
      LoginTemplate();
      break;
  }
};
initContent();
