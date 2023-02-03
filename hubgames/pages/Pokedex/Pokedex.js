import "./Pokedex.css";
import { printTemplate as HomeTemplate } from "../Home/Home";

const url = "https://pokeapi.co/api/v2/pokemon/";
const arraypokemon = [];
let allPokemons = [];
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
  allPokemons = pokemons.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    tipo1: pokemon.types[0].type.name,
    tipo2: pokemon.types[1]?.type.name,
    height: pokemon.height,
    weight: pokemon.weight,
    image: pokemon.sprites.other.dream_world.front_default,
  }));
  //console.log(mappedPokemon);
  printPokemons(allPokemons);
};

const printPokemons = (pokemons) => {
  const container = document.querySelector("#containerpoke");
  container.innerHTML = "";
  for (const pokemon of pokemons) {
    const figure = document.createElement("figure");
    //console.log(pokemon.name);
    figure.innerHTML = `
    <p>Nº de pokedex ${pokemon.id}</p>
    <h2>${pokemon.name.toUpperCase()}</h2>
    <img src=${pokemon.image} alt=${pokemon.name}/>
    <h3>Tipo</h3>
    `;
    if (!pokemon.tipo2) {
      figure.innerHTML += `
        <div class="tipo">
          <img src="${fototipo(pokemon.tipo1)}" alt="${pokemon.tipo1}">
        </div>`;
    } else {
      figure.innerHTML += `
        <div class="tipos">
         <img src="${fototipo(pokemon.tipo1)}" alt="${pokemon.tipo1}">
         <img src="${fototipo(pokemon.tipo2)}" alt="${pokemon.tipo2}">
        </div>
      `;
    }

    container.appendChild(figure);
  }
};

const fototipo = (tipo) => {
  const todostipos = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "fairy",
  ];
  if (tipo == "normal") {
    return "../../public/icons/signonormal.png";
  }
  if (tipo == "fighting") {
    return "../../public/icons/signolucha.png";
  }
  if (tipo == "flying") {
    return "../../public/icons/signovolador.png";
  }
  if (tipo == "poison") {
    return "../../public/icons/signoveneno.png";
  }
  if (tipo == "ground") {
    return "../../public/icons/signotierra.png";
  }
  if (tipo == "rock") {
    return "../../public/icons/signoroca.png";
  }
  if (tipo == "bug") {
    return "../../public/icons/signobicho.png";
  }
  if (tipo == "ghost") {
    return "../../public/icons/signofantasma.png";
  }
  if (tipo == "steel") {
    return "../../public/icons/signoacero.png";
  }
  if (tipo == "fire") {
    return "../../public/icons/signofuego.png";
  }
  if (tipo == "water") {
    return "../../public/icons/signoagua.png";
  }
  if (tipo == "grass") {
    return "../../public/icons/signohierba.png";
  }
  if (tipo == "electric") {
    return "../../public/icons/signoelectrico.png";
  }
  if (tipo == "psychic") {
    return "../../public/icons/signopsiquico.png";
  }
  if (tipo == "ice") {
    return "../../public/icons/signohielo.png";
  }
  if (tipo == "dragon") {
    return "../../public/icons/signodragon.png";
  }
  if (tipo == "fairy") {
    return "../../public/icons/signoada.png";
  }
  if (tipo == "dark") {
    return "../../public/icons/signooscuro.png";
  }
};

const template = () => `
<div class="contenedorgeneral"> 
    <div class="headerpokedex"> 
        <h1>Pokedex</h1>
        <button id="backHomeBtn" class="my-btn">Back Home</button>
    </div>
    <div class="buscador">
    <h3>Busca tu pokemon: </h3>
    <input type="text" id="buscadorpokemon">
    </div>
    <div class="filter">
      <button id="botonAll" class="my-btnpoke">Todos los pokemons</button>
      <button id="grass" class="my-btnpoke">Grass</button>
      <button id="fire" class="my-btnpoke">Fire</button>
      <button id="water" class="my-btnpoke">Water</button>
      <button id="bug" class="my-btnpoke">Bug</button>
      <button id="normal" class="my-btnpoke">Normal</button>
      <button id="poison" class="my-btnpoke">Poison</button>
      <button id="electric" class="my-btnpoke">Electric</button>
      <button id="ground" class="my-btnpoke">Ground</button>
      <button id="fairy" class="my-btnpoke">Fairy</button>
      <button id="fighting" class="my-btnpoke">Fighting</button>
      <button id="psychic" class="my-btnpoke">Psychic</button>
      <button id="rock" class="my-btnpoke">Rock</button>
      <button id="ghost" class="my-btnpoke">Ghost</button>
      <button id="ice" class="my-btnpoke">Ice</button>
      <button id="dragon" class="my-btnpoke">Dragon</button>
    </div>
    <div id="containerpoke" class="containerpoke">
    </div>
</div>
`;
const filterPokemons = (pokemons, tipo) => {
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.tipo1.includes(tipo)
  );
  //console.log(filteredPokemons);
  printPokemons(filteredPokemons);
};

const addListeners = () => {
  document.querySelector("#backHomeBtn").addEventListener("click", () => {
    HomeTemplate();
  });
  document.querySelector("#botonAll").addEventListener("click", () => {
    mapPokemons(arraypokemon);
  });
  document.querySelector("#grass").addEventListener("click", () => {
    filterPokemons(allPokemons, "grass");
    //console.log("click");
  });

  document.querySelector("#normal").addEventListener("click", () => {
    filterPokemons(allPokemons, "normal");
  });
  document.querySelector("#fire").addEventListener("click", () => {
    filterPokemons(allPokemons, "fire");
  });
  document.querySelector("#water").addEventListener("click", () => {
    filterPokemons(allPokemons, "water");
  });
  document.querySelector("#bug").addEventListener("click", () => {
    filterPokemons(allPokemons, "bug");
  });
  document.querySelector("#poison").addEventListener("click", () => {
    filterPokemons(allPokemons, "poison");
  });
  document.querySelector("#electric").addEventListener("click", () => {
    filterPokemons(allPokemons, "electric");
  });
  document.querySelector("#ground").addEventListener("click", () => {
    filterPokemons(allPokemons, "ground");
  });
  document.querySelector("#fairy").addEventListener("click", () => {
    filterPokemons(allPokemons, "fairy");
  });
  document.querySelector("#fighting").addEventListener("click", () => {
    filterPokemons(allPokemons, "fighting");
  });
  document.querySelector("#psychic").addEventListener("click", () => {
    filterPokemons(allPokemons, "psychic");
  });
  document.querySelector("#rock").addEventListener("click", () => {
    filterPokemons(allPokemons, "rock");
  });
  document.querySelector("#ghost").addEventListener("click", () => {
    filterPokemons(allPokemons, "ghost");
  });
  document.querySelector("#ice").addEventListener("click", () => {
    filterPokemons(allPokemons, "ice");
  });
  document.querySelector("#dragon").addEventListener("click", () => {
    filterPokemons(allPokemons, "dragon");
  });
};

export const printTemplate = () => {
  document.querySelector("#main").innerHTML = template();
  addListeners();
  getPokemons();
};
