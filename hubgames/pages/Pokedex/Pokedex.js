import "./Pokedex.css";
import { printTemplate as HomeTemplate } from "../Home/Home";

const url = "https://pokeapi.co/api/v2/pokemon/";
const arraypokemon = [];
const getPokemons = async () => {
  for (let i = 1; i <= 150; i++) {
    const data = await fetch(url + `${i}`);
    const datospokemon = await data.json();
    arraypokemon.push(datospokemon);
  }

  mapPokemons(arraypokemon);
};

const mapPokemons = (pokemons) => {
  //console.log(pokemons);
  const mappedPokemon = pokemons.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    tipo1: pokemon.types[0].type.name,
    tipo2: pokemon.types[1]?.type.name,
    height: pokemon.height,
    weight: pokemon.weight,
    image: pokemon.sprites.front_default,
  }));
  //console.log(mappedPokemon);
  printPokemons(mappedPokemon);
};

const printPokemons = (pokemons) => {
  const container = document.querySelector("#containerpoke");
  container.innerHTML = "";
  for (const pokemon of pokemons) {
    const figure = document.createElement("figure");
    console.log(pokemon.name);
    figure.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src=${pokemon.image} alt=${pokemon.name}/>
    `;
    container.appendChild(figure);
  }
};

const template = () => `
<div class="contenedorgeneral"> 
    <div class="headerpokedex"> 
        <h1>Pokedex</h1>
        <button id="backHomeBtn" class="my-btn">Back Home</button>
    </div>
    <div id="containerpoke" class="containerpoke">
    </div>
</div>
`;

const addListeners = () => {
  document.querySelector("#backHomeBtn").addEventListener("click", () => {
    HomeTemplate();
  });
};

export const printTemplate = () => {
  document.querySelector("#main").innerHTML = template();
  addListeners();
  getPokemons();
};
