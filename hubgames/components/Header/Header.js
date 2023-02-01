import "./Header.css";
import { ButtonColor } from "../ButtonColor/ButtonColor";

export const Header = () => `
<h2>Made by Fabio with fun ❤</h2>
${ButtonColor()}
`;
export const changeBackground = () => {
  const themeBtn = document.querySelector("#mybtncolor");
  themeBtn.addEventListener("click", () => {
    let numaleat = Math.floor(Math.random() * ColoresFondo.length);
    //console.log(numaleat);
    for (let i = 0; i < ColoresFondo.length; i++) {
      if (numaleat == i) {
        document.body.style.backgroundColor = ColoresFondo[i];
        //console.log(ColoresFondo[i]);
      }
    }
  });
};

const ColoresFondo = [
  "#28262C",
  "#998FC7",
  "#D4C2FC",
  "#F9F5FF",
  "#14248A",
  "#931621",
  "#42D9C8",
  "#326771",
  "#9DB5B2",
  "#1EFFBC",
  "#B4E33D",
  "#EE8434",
  "#AE8799",
];
