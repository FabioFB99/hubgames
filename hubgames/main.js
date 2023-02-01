import "./style.css";
import { Header } from "./components/Header/Header";
import { changeBackground } from "./components/Header/Header";
import { NormalButton } from "./components/NormalButton/NormalButton";
import { Login } from "./pages/Login/Login";
import { linkPage } from "./utils/linkPage";

const header = document.querySelector("header");
header.innerHTML = Header();
changeBackground();
Login();
