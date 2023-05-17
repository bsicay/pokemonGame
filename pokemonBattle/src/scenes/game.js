import kaboom from "kaboom";

export default function(pokemon, opponent) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(response => response.json())
    .then(data => {
        console.log(data.results); // Imprime la lista de los primeros 150 Pokémon
    })
    .catch(error => console.error('Error:', error));
    // fetch('https://pokeapi.co/api/v2/pokemon')
    // .then(response => response.json())
    // .then(data => {
    //     // const moves = data.moves.map(move => move.move.name); // Lista de movimientos
    //     // const types = data.types.map(type => type.type.name); // Lista de tipos
    //     // const stats = data.stats.map(stat => ({name: stat.stat.name, base_stat: stat.base_stat})); // Lista de estadísticas
    //     // const frontSprite = data.sprites.map(sprite => sprite.back_default)
    //     console.log(data)
    //     // console.log('Movimientos:', moves);
    //     // console.log('Tipos:', types);
    //     // console.log('Estadísticas:', stats);
    //     // console.log(data.sprites.back_default)
    // })
    // .catch(error => console.error('Error:', error));

    add([
            sprite('battleBackground'),
            pos(100, 0),
            'battleBackground', 
            scale(1.3)
        ]);

    let player = add([
        sprite(pokemon.sprite),
        pos(500, 450),
        scale(2.9), 
        'player'
    ]);

    let secondPlayer = add([
        sprite(opponent.sprite),
        pos(1100, 150),
        scale(2.2), 
        'opponent'
    ]);

}
