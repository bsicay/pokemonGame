import kaboom from "kaboom";
import { StatsPokemon } from "../api/api";
import { GetType } from "../api/api";
import { calculadorMultiplicador } from "../utilities/utilities";

export default async function(pokemon, opponent) {
    /*
    primera stats: hp
    segunda stats: attack
    tercera stats: defense
    cuarta stats: special-attack
    quinta stats: special-defense
    sexta stats: speed
    */
    //Primer pokemon (usuario)
    console.log(pokemon.name)
    const statsPokemon = await StatsPokemon(pokemon.name)
    console.log(statsPokemon)
    const typesUser = await GetType(pokemon.name)
    console.log(typesUser)
    
    //Segundo pokemon (oponente)
    console.log(opponent.name)
    const statsOpponent = await StatsPokemon(opponent.name)
    console.log(statsOpponent)
    const typesOpponent = await GetType(opponent.name)
    console.log(typesOpponent)
    
    let multiplicadorPoke1 = calculadorMultiplicador(typesUser, typesOpponent)
    let multiplicadorPoke2 = calculadorMultiplicador(typesOpponent, typesUser)

    console.log("multiplicador de: ", pokemon.name,": ",multiplicadorPoke1)
    console.log("multiplicador de: ", opponent.name,": ",multiplicadorPoke2)

    const upperRect = add([rect(width(), height() / 2), pos(0, 0), color(0, 0, 0), z(1)]);
    const lowerRect = add([rect(width(), height() / 2), pos(0, height() / 2), color(0, 0, 0), z(1)]);

    // Animación de los rectángulos
    const duration = 0.2; // Duración de la animación en segundos
    upperRect.onUpdate(() => {
        upperRect.move(0, -height() / (duration * 10));  // Movimiento hacia arriba
        if (upperRect.pos.y <= -height() / 2) {
            destroy(upperRect);  // Destruir el rectángulo superior cuando llega a su posición final
        }
    });

    lowerRect.onUpdate(() => {
        lowerRect.move(0, height() / (duration * 5));  // Movimiento hacia abajo
        if (lowerRect.pos.y >= height()) {
            destroy(lowerRect);  // Destruir el rectángulo inferior cuando llega a su posición final
        }
    });

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
    add([
        text(pokemon.name, 32),
        pos(width() / 2 + 450, height()/2+7),
        color(0, 0, 0), // Cambia el color del texto a negro (RGB: 0, 0, 0)
    ]);

    let secondPlayer = add([
        sprite(opponent.sprite),
        pos(1100, 70),
        scale(2.2), 
        'opponent'
    ]);
    add([
        text(opponent.name, 32),
        pos(width()/15 +10, 40),
        color(0, 0, 0), // Cambia el color del texto a negro (RGB: 0, 0, 0)
    ]);
    

}
