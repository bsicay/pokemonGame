
import kaboom from "kaboom";
import { PokemonList } from '../../src/api/api.js';

let pokemons =[];
let backPokemon =[];
let spritesLoaded = false;

PokemonList()
 .then(pokemonArray => {
   pokemons = pokemonArray.map(pokemon => ({
     name: pokemon.name,
     sprite: pokemon.name
   }));
   backPokemon = pokemonArray.map(pokemon => ({
     name: 'back' + pokemon.name,
     sprite: 'back' + pokemon.name
   })); 
   console.log(pokemons[0].sprite);
   spritesLoaded = true;
 })
 .catch(error => {
   console.error('Error:', error);
 }); 


// Define un índice para la selección de personajes
let pokemonIndex = 0;
let leftIndex = 150;
let rightIndex = 1;

// Exporta la escena del menú
export default function() {
    // Muestra los Pokémon en el orden correcto
    const updateDisplay = () => {
        // Limpia la pantalla
        destroyAll();
      
        if(pokemonIndex==0){
            leftIndex = 150;
            rightIndex = 1;
        }else if (pokemonIndex == 150){
            leftIndex = 149;
            rightIndex = 0;
        }else{
            leftIndex = pokemonIndex -1;
            rightIndex = pokemonIndex +1;
        }
        if(spritesLoaded){
            add([
                sprite(pokemons[leftIndex].sprite),
                pos(width() / 2 - 150, height() / 3),
                'pokemon'
            ]);
            // Muestra el Pokémon seleccionado
            add([
                sprite(pokemons[pokemonIndex].sprite),
                pos(width() / 2 - 10, height() / 3),
                scale(2.2), 
                'pokemon'
            ]);
            // Muestra el Pokémon a la derecha
            add([
                sprite(pokemons[rightIndex].sprite),
                pos(width() / 2 + 150, height() / 3),   
                'pokemon'
            ]);
            // Añade texto para mostrar el nombre del Pokémon seleccionado
            add([
                text(pokemons[pokemonIndex].name),
                pos(width() / 2 - 40, height() / 3 + 150),
            ]);
        }else{
            add([
                text("Cargando sprites..."),
                pos(width()/2, height() / 2),
                color(1, 1, 1),
            ]);
            
        }
        // Muestra el Pokémon a la izquierda
        
    };
    // Actualiza la pantalla inicialmente
    updateDisplay();

    // Cuando el usuario presione la tecla derecha
    onKeyPress("right", () => {
        // Incrementa el índice de personajes
        pokemonIndex = (pokemonIndex + 1) % pokemons.length;

        // Actualiza la pantalla
        updateDisplay();
    });

    // Cuando el usuario presione la tecla izquierda
    onKeyPress("left", () => {
        // Decrementa el índice de personajes
        pokemonIndex = (pokemonIndex - 1 + pokemons.length) % pokemons.length;

        // Actualiza la pantalla
        updateDisplay();
    });

    // Cuando el usuario presione la tecla de espacio, inicia el juego con el personaje seleccionado
    onKeyPress("space", () => {
        let opponentIndex = Math.floor(Math.random() * pokemons.length);

        while (opponentIndex === pokemonIndex) {
            opponentIndex = Math.floor(Math.random() * pokemons.length);
        }

        console.log(pokemons[pokemonIndex].name)
        console.log("Oponente: ")
        console.log(pokemons[opponentIndex].name)
        // go("game", pokemons[pokemonIndex]);
        go("game", backPokemon[pokemonIndex], pokemons[opponentIndex]);
    });
}
