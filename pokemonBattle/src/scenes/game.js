import kaboom from "kaboom";
import { StatsPokemon } from "../api/api";
import { getPokemonMoves } from "../api/api";
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
    const moves = await getPokemonMoves(pokemon.name)
    console.log("movimiento " + moves[0].name)
    console.log("movimiento2 " + moves[1].name)
    console.log("movimiento3 " + moves[2].name)
    console.log("potencia "+ moves[0].power)
    //Segundo pokemon (oponente)
    console.log(opponent.name)
    const statsOpponent = await StatsPokemon(opponent.name)
    console.log(statsOpponent)
    const typesOpponent = await GetType(opponent.name)
    const movesOpponent = await getPokemonMoves(opponent.name)
    
    let multiplicadorPoke1 = await calculadorMultiplicador(typesUser, typesOpponent)
    let multiplicadorPoke2 = await calculadorMultiplicador(typesOpponent, typesUser)

    console.log("multiplicador de: ", pokemon.name,": ",multiplicadorPoke1)
    console.log("multiplicador de: ", opponent.name,": ",multiplicadorPoke2)

    const upperRect = add([rect(width(), height() / 2), pos(0, 0), color(0, 0, 0), z(1)]);
    const lowerRect = add([rect(width(), height() / 2), pos(0, height() / 2), color(0, 0, 0), z(1)]);
    let selectedMoveIndex = 0;
    let phase = 'player-selection'
    let moveNames = moves.map(move => move.name)
    let opponentMoveNames = movesOpponent.map(move => move.name);

    function calculateDamage(attackerSpecialAttack, movePower, defenderDefense, multiplier, move) {
        if (move.damage_class.name === "special") {
            return (attackerSpecialAttack * movePower * multiplier) / defenderDefense;
        } else {
            return (attackerSpecialAttack * movePower ) / defenderDefense;
        }
        
    }


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
        pos(0, 320),
        scale(3.5), 
        opacity(1), 
        {
            fainted: false
        },
        'player'
    ]);

    tween(
        player.pos.x, 
        400, 
        0.9, 
        (val) => player.pos.x = val, 
        easings.easeInSine
    )
    
    const playerHealthBox = add([
        rect(400, 100),
        outline(4),
        pos(1100, 350) 
     ])

     playerHealthBox.add([
        text(pokemon.name.toUpperCase(), {size: 32}),
        color(10,10,10),
        pos(10, 10)
    ])

    playerHealthBox.add([
        rect(370, 10),
        color(200,200,200),
        pos(15, 50)
    ])

    const playerHealthBar = playerHealthBox.add([
        rect(370, 10),
        color(0,200,0),
        pos(15, 50)
    ])

    tween(playerHealthBox.pos.x, 950, 0.9, (val) => playerHealthBox.pos.x = val, easings.easeInSine)

    let secondPlayer = add([
        sprite(opponent.sprite),
        pos(1400, 70),
        scale(2.2), 
        opacity(1), 
        {
            fainted: false
        },
        'opponent'
    ]);

    tween(
        secondPlayer.pos.x, 
        1100, 
        0.9, 
        (val) => secondPlayer.pos.x = val, 
        easings.easeInSine
    )

    const enemyHealthBox = add([
        rect(400, 100),
        outline(4),
        pos(100, 50) 
    ])

    enemyHealthBox.add([
        text(opponent.name.toUpperCase(), {size: 32}),
        color(10,10,10),
        pos(10, 10)
    ])

    enemyHealthBox.add([
        rect(370, 10),
        color(200,200,200),
        pos(15, 50)
    ])

    const enemyHealthBar = enemyHealthBox.add([
        rect(370, 10),
        color(0,200,0),
        pos(15, 50)
    ])

    tween(enemyHealthBox.pos.x, 300, 0.9, (val) => enemyHealthBox.pos.x = val, easings.easeInSine)

    const box = add([
        rect(1335, 300),
        outline(4),
        pos(100, 530)
    ])

    const content = box.add([
        text("¿Cuál será el movimiento de " + pokemon.name.toUpperCase() + "?", { size: 42}),
        color(10,10,10),
        pos(100,20)
    ])

    function reduceHealth(healthBar, damageDealt) {
        console.log("reduce")
        tween(
            healthBar.width,
            healthBar.width - damageDealt,
            0.5,
            (val) => healthBar.width = val,
            easings.easeInSine
        )
    }

    function makePlayerFlash(pokemon) {
        tween(
            pokemon.opacity,
            0,
            0.3,
            (val) => {
                pokemon.opacity = val
                if (pokemon.opacity === 0) {
                    pokemon.opacity = 1
                }
            },
            easings.easeInBounce
        )
    }

    onKeyPress('up', () => {
        selectedMoveIndex = (selectedMoveIndex - 1 + moveNames.length) % moveNames.length;
        if (phase === 'player-selection' || phase === 'player-turn') {
            content.text = moveNames.map((name, i) => (i === selectedMoveIndex ? '> ' : '  ') + name.toUpperCase()).join('\n');
        }
    });
    
    onKeyPress('down', () => {
        selectedMoveIndex = (selectedMoveIndex + 1) % moveNames.length;
        if (phase === 'player-selection' || phase === 'player-turn') {
            content.text = moveNames.map((name, i) => (i === selectedMoveIndex ? '> ' : '  ') + name.toUpperCase()).join('\n');
        }
    });
    
    onKeyPress('space', () => {
        if (player.fainted || secondPlayer.fainted) return

        if (phase === 'player-selection') {
            content.text = moveNames.map((name, i) => (i === selectedMoveIndex ? '> ' : '  ') + name.toUpperCase()).join('\n')
            phase = 'player-turn'
            return
        }

        if (phase === 'enemy-turn') {
            content.text = opponent.name.toUpperCase() + ' se prepara para atacar!';
            // Seleccionar un movimiento al azar de los movimientos disponibles del oponente}
            let selectedOpponentMoveIndex = Math.floor(Math.random() * opponentMoveNames.length);
            let selectedOpponentMove = opponentMoveNames[selectedOpponentMoveIndex];
            content.text = opponent.name.toUpperCase() + ' ha usado ' + selectedOpponentMove + '.';
            const damageDealt = calculateDamage(statsOpponent[3], movesOpponent[1].power, statsPokemon[2], multiplicadorPoke2, movesOpponent[selectedOpponentMoveIndex])
            console.log(statsOpponent[3])
            console.log(movesOpponent[selectedOpponentMoveIndex].power)
            console.log(statsPokemon[2])
            console.log(multiplicadorPoke2)
            console.log(damageDealt)
            if (damageDealt > 150) {
                content.text = "Golpe crítico!"
            }

            reduceHealth(playerHealthBar, damageDealt)
            makePlayerFlash(player)

            phase = 'player-selection'
            return
        }

        if (phase === 'player-turn') {
            const damageDealt = calculateDamage(statsPokemon[3],  moves[1].power, statsOpponent[2], multiplicadorPoke1, moves[selectedMoveIndex])
            console.log("daño " +damageDealt)
            console.log(statsPokemon[3])
            console.log(moves[selectedMoveIndex].power)
            console.log(statsOpponent[2])
            console.log(multiplicadorPoke1)
            console.log(damageDealt)
            if (damageDealt > 150) {
                content.text = "Golpe crítico!"
            } else {
                content.text = pokemon.name.toUpperCase() + ' ha usado ' + moveNames[selectedMoveIndex].toUpperCase() + '.';
            }

            reduceHealth(enemyHealthBar, damageDealt)
            makePlayerFlash(secondPlayer)

            phase = 'enemy-turn'
        }
    })

    function colorizeHealthBar(healthBar) {
        if (healthBar.width < 200) {
            healthBar.use(color(250, 150, 0))
        }

        if (healthBar.width < 100) {
            healthBar.use(color(200, 0, 0))
        }

    }
    
    function makePlayerDrop(player) {
        tween(
            player.pos.y,
            800,
            0.5,
            (val) => player.pos.y = val,
            easings.easeInSine
        )
    }

    onUpdate(() => {
        colorizeHealthBar(playerHealthBar)
        colorizeHealthBar(enemyHealthBar)

        if (enemyHealthBar.width < 0 && !secondPlayer.fainted) {
            makePlayerDrop(secondPlayer)
            content.text = opponent.name.toUpperCase() + ' se ha desmayado!'
            secondPlayer.fainted = true
            setTimeout(() => {
                content.text = pokemon.name.toUpperCase() + ' ha ganado la batalla!'
            }, 1000)
            setTimeout(() => {
                go('characterSelector')
            }, 2000)
        }

        if (playerHealthBar.width < 0 && !player.fainted) {
            makePlayerDrop(player)
            content.text = pokemon.name.toUpperCase() + ' se ha desmayado!'
            player.fainted = true
            setTimeout(() => {
                content.text = pokemon.name.toUpperCase() + ' ha perdido la batalla'
            }, 1000)
            setTimeout(() => {
                go('characterSelector')
            }, 2000)
        }
    })

}
