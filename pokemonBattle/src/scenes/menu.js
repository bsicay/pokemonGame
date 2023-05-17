import kaboom from "kaboom";

const pokemons = [
    { name: 'Pikachu', sprite: 'pikachu' },
    { name: 'Charizard', sprite: 'charizard' },
    // Añade más personajes aquí...
];

let pokemonIndex = 0;

export default function() {
    // mostrar primer pokemon
    let pokemon = add([
        sprite(pokemons[pokemonIndex].sprite),
        pos(12, 12),
        'pokemon'
    ]);

    // muestra el nombre del pokemon
    let label = add([
        text(pokemons[pokemonIndex].name),
        pos(12, 80),
    ]);

    // Cuando el usuario presione la tecla derecha
    onKeyPress("right", () => {
        // Incrementa el índice de personajes
        pokemonIndex = (pokemonIndex + 1) % pokemons.length;

        // Elimina el sprite actual y añade el nuevo
        pokemon.destroy();
        pokemon = add([
            sprite(pokemons[pokemonIndex].sprite),
            pos(12, 12),
            'pokemon'
        ]);

        // Actualiza el nombre del personaje
        label.text = pokemons[pokemonIndex].name;
    });

    onKeyPress("left", () => {
        // Decrementa el índice de personajes
        pokemonIndex = (pokemonIndex - 1 + pokemons.length) % pokemons.length;

        // Elimina el sprite actual y añade el nuevo
        pokemon.destroy();
        pokemon = add([
            sprite(pokemons[pokemonIndex].sprite),
            pos(12, 12),
            'pokemon'
        ]);

        // Actualiza el nombre del personaje
        label.text = pokemons[pokemonIndex].name;
    });

    // Cuando el usuario presione la tecla de espacio, inicia el juego con el personaje seleccionado
    onKeyPress("space", () => {
        go("game", pokemons[pokemonIndex]);
    });
}
