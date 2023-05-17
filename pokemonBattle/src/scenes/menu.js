// Importa Kaboom
import kaboom from "kaboom";

// Define tus personajes de Pokémon
const pokemons = [
    { name: 'Pikachu', sprite: 'pikachu' },
    { name: 'Charizard', sprite: 'charizard' },
    { name: 'Venusaur', sprite: 'venusaur' },
    // Añade más personajes aquí...
];

// Define un índice para la selección de personajes
let pokemonIndex = 0;

// Exporta la escena del menú
export default function() {
    // Muestra los Pokémon en el orden correcto
    const updateDisplay = () => {
        // Limpia la pantalla
        destroyAll();

        // Encuentra el índice del Pokémon a la izquierda y a la derecha
        const leftIndex = (pokemonIndex - 1 + pokemons.length) % pokemons.length;
        const rightIndex = (pokemonIndex + 1) % pokemons.length;

        // Muestra el Pokémon a la izquierda
        add([
            sprite(pokemons[leftIndex].sprite),
            pos(width() / 2 - 150, height() / 3),
            'pokemon'
        ]);

        // Muestra el Pokémon seleccionado
        add([
            sprite(pokemons[pokemonIndex].sprite),
            pos(width() / 2 - 10, height() / 3),
            scale(2.2), // Un poco más grande
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
        go("game", pokemons[pokemonIndex]);
    });
}
