import kaboom from "kaboom";
import { StatsPokemon } from "../api/api";

export default async function(pokemon, opponent) {
    /*
    primera stats: hp
    segunda stats: attack
    tercera stats: defense
    cuarta stats: special-attack
    quinta stats: special-defense
    sexta stats: speed
    */
    console.log(pokemon.name)
    const statsPokemon = await StatsPokemon(pokemon.name)
    console.log(statsPokemon)
    console.log(opponent.name)
    const statsOpponent = await StatsPokemon(opponent.name)
    console.log(statsOpponent)
    add([
            sprite('battleBackground'),
            pos(100, 0),
            'battleBackground', 
            scale(1.3)
        ]);

    let player = add([
        sprite(pokemon.sprite),
        pos(400, 320),
        scale(3.5), 
        'player'
    ]);

    let secondPlayer = add([
        sprite(opponent.sprite),
        pos(1100, 70),
        scale(2.2), 
        'opponent'
    ]);

}
