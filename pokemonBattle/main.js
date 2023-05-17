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
loadSprite('charizard', './src/assets/sprites/charizard.png');
loadSprite('venusaur', './src/assets/sprites/venusaur.png');
loadSprite('background', './src/assets/background.png');

scene("menu", menuScene);
scene("game", gameScene);

// Comienza en la escena del menú
go("menu");
