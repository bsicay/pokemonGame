import kaboom from "kaboom";

import menuScene from "./src/scenes/menu.js";
import gameScene from "./src/scenes/game.js";

kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  debug: true,
  clearColor: [0, 0, 0, 1],
});
setBackground(Color.fromHex('#554981'))
let bgImage = await loadSprite("background", "https://www.paulwheeler.us/files/windows-95-desktop-background.jpg");

// Carga tus sprites

loadSprite('pikachu', './src/assets/sprites/pikachu.png');
loadSprite('backPikachu', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png');
loadSprite('charizard', './src/assets/sprites/charizard.png');
loadSprite('backCharizard', './src/assets/sprites/backCharizard.png');
loadSprite('venusaur', './src/assets/sprites/venusaur.png');
loadSprite('backVenusaur', './src/assets/sprites/backVenusaur.png');
loadSprite('blastoise', './src/assets/sprites/blastoise.png');
loadSprite('backBlastoise', './src/assets/sprites/backBlastoise.png');
loadSprite('background', './src/assets/background.png');
loadSprite('battleBackground', './src/assets/battleBackground.png');


scene("menu", menuScene);
scene("game", gameScene);

// Comienza en la escena del menú
go("menu");