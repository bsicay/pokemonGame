import kaboom from "kaboom";

import menuScene from "./src/scenes/menu.js";
import gameScene from "./src/scenes/game.js";
import { PokemonList } from './src/api/api.js';


kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  debug: true,
  clearColor: [0, 0, 0, 1],
});
setBackground(Color.fromHex('#554981'))
let bgImage = await loadSprite("background", "https://www.paulwheeler.us/files/windows-95-desktop-background.jpg");

const pokemons = await PokemonList();

pokemons.forEach(pokemon =>{
  //console.log(pokemon.name);
  loadSprite(pokemon.name, pokemon.frontDefault)
  loadSprite('back'+pokemon.name, pokemon.backDefault)
})


loadSprite('battleBackground', './src/assets/battleBackground.png');


scene("menu", menuScene);
scene("game", gameScene);

// Comienza en la escena del menú
go("menu");