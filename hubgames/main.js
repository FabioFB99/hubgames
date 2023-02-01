import "./style.css";
import { Header } from "./components/Header/Header";
import { changeBackground } from "./components/Header/Header";
const header = document.querySelector("header");
header.innerHTML = Header();
changeBackground();
