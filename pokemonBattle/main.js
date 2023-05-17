// Importa Kaboom
import kaboom from "kaboom";

// Importa tus escenas
import menuScene from "./src/scenes/menu.js";
import gameScene from "./src/scenes/game.js";

// Inicializa Kaboom
kaboom();

// Carga tus sprites
loadSprite('pikachu', './src/assets/sprites/pikachu.png');
loadSprite('charizard', './src/assets/sprites/charizard.png');
// Carga más sprites aquí...

// Define tus escenas
scene("menu", menuScene);
scene("game", gameScene);

// Comienza en la escena del menú
go("menu");
