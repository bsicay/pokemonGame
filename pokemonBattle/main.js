import kaboom from "kaboom";

import characterSelectorScene from "./src/scenes/characterSelector.js";
import gameScene from "./src/scenes/game.js";
import menuScene from "./src/scenes/menu.js";
import { PokemonList } from './src/api/api.js';


export const k = kaboom({
  global: true,
  scaleMode: "stretch",
  fullscreen: true,
  // scale: 1,
  debug: true,
  clearColor: [0, 0, 0, 1],
});

setBackground(Color.fromHex('#554981'))
const pokemons = await PokemonList();

pokemons.forEach(pokemon =>{
  //console.log(pokemon.name);
  loadSprite(pokemon.name, pokemon.frontDefault)
  loadSprite('back'+pokemon.name, pokemon.backDefault)
})

loadSprite('background', './src/assets/backgroundSelect.png');
loadSprite('battleBackground', './src/assets/battleBackground.png');
loadSound("audio", "./src/assets/sound/audio.mp3");

scene('characterSelector', (worldState) => characterSelectorScene(worldState))
// scene('game', (worldState) => gameScene(worldState))  

scene("menu", menuScene);
// scene("characterSelector", characterSelectorScene);
scene("game", gameScene);

// Comienza en la escena del menú
go("characterSelector");