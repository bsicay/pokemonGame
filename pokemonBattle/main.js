import kaboom from "kaboom";

import menuScene from "./src/scenes/menu.js";
import gameScene from "./src/scenes/game.js";

kaboom({
  width: 1280,
  height: 720,
  fullscreen: true ,
  // letterbox: true,
  stretch: true
});
let bgImage = await loadSprite("background", "https://www.paulwheeler.us/files/windows-95-desktop-background.jpg");

// Carga tus sprites
loadSprite('pikachu', './src/assets/sprites/pikachu.png');
loadSprite('charizard', './src/assets/sprites/charizard.png');
loadSprite('venusaur', './src/assets/sprites/venusaur.png');


scene("menu", menuScene);
scene("game", gameScene);

// Comienza en la escena del menú
go("menu");
