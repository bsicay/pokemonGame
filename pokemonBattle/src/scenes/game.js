import kaboom from "kaboom";

export default function(pokemon, opponent) {

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
