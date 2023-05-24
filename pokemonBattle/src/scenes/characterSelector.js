
import kaboom from "kaboom";


// Arreglo con los pokemons y sus sprites
const pokemons =[
    {name: "bulbasaur", sprite: "bulbasaur"},
    {name: "ivysaur", sprite: "ivysaur"},
    {name: "venusaur", sprite: "venusaur"},
    {name: "charmander", sprite: "charmander"},
    {name: "charmeleon", sprite: "charmeleon"},
    {name: "charizard", sprite: "charizard"},
    {name: "squirtle", sprite: "squirtle"},
    {name: "wartortle", sprite: "wartortle"},
    {name: "blastoise", sprite: "blastoise"},
    {name: "caterpie", sprite: "caterpie"},
    {name: "metapod", sprite: "metapod"},
    {name: "butterfree", sprite: "butterfree"},
    {name: "weedle", sprite: "weedle"},
    {name: "kakuna", sprite: "kakuna"},
    {name: "beedrill", sprite: "beedrill"},
    {name: "pidgey", sprite: "pidgey"},
    {name: "pidgeotto", sprite: "pidgeotto"},
    {name: "pidgeot", sprite: "pidgeot"},
    {name: "rattata", sprite: "rattata"},
    {name: "raticate", sprite: "raticate"},
    {name: "spearow", sprite: "spearow"},
    {name: "fearow", sprite: "fearow"},
    {name: "ekans", sprite: "ekans"},
    {name: "arbok", sprite: "arbok"},
    {name: "pikachu", sprite: "pikachu"},
    {name: "raichu", sprite: "raichu"},
    {name: "sandshrew", sprite: "sandshrew"},
    {name: "sandslash", sprite: "sandslash"},
    {name: "nidoran-f", sprite: "nidoran-f"},
    {name: "nidorina", sprite: "nidorina"},
    {name: "nidoqueen", sprite: "nidoqueen"},
    {name: "nidoran-m", sprite: "nidoran-m"},
    {name: "nidorino", sprite: "nidorino"},
    {name: "nidoking", sprite: "nidoking"},
    {name: "clefairy", sprite: "clefairy"},
    {name: "clefable", sprite: "clefable"},
    {name: "vulpix", sprite: "vulpix"},
    {name: "ninetales", sprite: "ninetales"},
    {name: "jigglypuff", sprite: "jigglypuff"},
    {name: "wigglytuff", sprite: "wigglytuff"},
    {name: "zubat", sprite: "zubat"},
    {name: "golbat", sprite: "golbat"},
    {name: "oddish", sprite: "oddish"},
    {name: "gloom", sprite: "gloom"},
    {name: "vileplume", sprite: "vileplume"},
    {name: "paras", sprite: "paras"},
    {name: "parasect", sprite: "parasect"},
    {name: "venonat", sprite: "venonat"},
    {name: "venomoth", sprite: "venomoth"},
    {name: "diglett", sprite: "diglett"},
    {name: "dugtrio", sprite: "dugtrio"},
    {name: "meowth", sprite: "meowth"},
    {name: "persian", sprite: "persian"},
    {name: "psyduck", sprite: "psyduck"},
    {name: "golduck", sprite: "golduck"},
    {name: "mankey", sprite: "mankey"},
    {name: "primeape", sprite: "primeape"},
    {name: "growlithe", sprite: "growlithe"},
    {name: "arcanine", sprite: "arcanine"},
    {name: "poliwag", sprite: "poliwag"},
    {name: "poliwhirl", sprite: "poliwhirl"},
    {name: "poliwrath", sprite: "poliwrath"},
    {name: "abra", sprite: "abra"},
    {name: "kadabra", sprite: "kadabra"},
    {name: "alakazam", sprite: "alakazam"},
    {name: "machop", sprite: "machop"},
    {name: "machoke", sprite: "machoke"},
    {name: "machamp", sprite: "machamp"},
    {name: "bellsprout", sprite: "bellsprout"},
    {name: "weepinbell", sprite: "weepinbell"},
    {name: "victreebel", sprite: "victreebel"},
    {name: "tentacool", sprite: "tentacool"},
    {name: "tentacruel", sprite: "tentacruel"},
    {name: "geodude", sprite: "geodude"},
    {name: "graveler", sprite: "graveler"},
    {name: "golem", sprite: "golem"},
    {name: "ponyta", sprite: "ponyta"},
    {name: "rapidash", sprite: "rapidash"},
    {name: "slowpoke", sprite: "slowpoke"},
    {name: "slowbro", sprite: "slowbro"},
    {name: "magnemite", sprite: "magnemite"},
    {name: "magneton", sprite: "magneton"},
    {name: "farfetchd", sprite: "farfetchd"},
    {name: "doduo", sprite: "doduo"},
    {name: "dodrio", sprite: "dodrio"},
    {name: "deel", sprite: "seel"},
    {name: "dewgong", sprite: "dewgong"},
    {name: "grimer", sprite: "grimer"},
    {name: "muk", sprite: "muk"},
    {name: "shellder", sprite: "shellder"},
    {name: "cloyster", sprite: "cloyster"},
    {name: "gastly", sprite: "gastly"},
    {name: "haunter", sprite: "haunter"},
    {name: "gengar", sprite: "gengar"},
    {name: "onix", sprite: "onix"},
    {name: "drowzee", sprite: "drowzee"},
    {name: "hypno", sprite: "hypno"},
    {name: "krabby", sprite: "krabby"},
    {name: "kingler", sprite: "kingler"},
    {name: "voltorb", sprite: "voltorb"},
    {name: "electrode", sprite: "electrode"},
    {name: "exeggcute", sprite: "exeggcute"},
    {name: "exeggutor", sprite: "exeggutor"},
    {name: "cubone", sprite: "cubone"},
    {name: "marowak", sprite: "marowak"},
    {name: "hitmonlee", sprite: "hitmonlee"},
    {name: "hitmonchan", sprite: "hitmonchan"},
    {name: "lickitung", sprite: "lickitung"},
    {name: "koffing", sprite: "koffing"},
    {name: "weezing", sprite: "weezing"},
    {name: "rhyhorn", sprite: "rhyhorn"},
    {name: "rhydon", sprite: "rhydon"},
    {name: "chansey", sprite: "chansey"},
    {name: "tangela", sprite: "tangela"},
    {name: "kangaskhan", sprite: "kangaskhan"},
    {name: "horsea", sprite: "horsea"},
    {name: "seadra", sprite: "seadra"},
    {name: "goldeen", sprite: "goldeen"},
    {name: "seaking", sprite: "seaking"},
    {name: "staryu", sprite: "staryu"},
    {name: "starmie", sprite: "starmie"},
    {name: "mr-mime", sprite: "mr-mime"},
    {name: "scyther", sprite: "scyther"},
    {name: "jynx", sprite: "jynx"},
    {name: "electabuzz", sprite: "electabuzz"},
    {name: "magmar", sprite: "magmar"},
    {name: "pinsir", sprite: "pinsir"},
    {name: "tauros", sprite: "tauros"},
    {name: "magikarp", sprite: "magikarp"},
    {name: "gyarados", sprite: "gyarados"},
    {name: "lapras", sprite: "lapras"},
    {name: "ditto", sprite: "ditto"},
    {name: "eevee", sprite: "eevee"},
    {name: "vaporeon", sprite: "vaporeon"},
    {name: "jolteon", sprite: "jolteon"},
    {name: "flareon", sprite: "flareon"},
    {name: "porygon", sprite: "porygon"},
    {name: "omanyte", sprite: "omanyte"},
    {name: "omastar", sprite: "omastar"},
    {name: "kabuto", sprite: "kabuto"},
    {name: "kabutops", sprite: "kabutops"},
    {name: "aerodactyl", sprite: "aerodactyl"},
    {name: "snorlax", sprite: "snorlax"},
    {name: "articuno", sprite: "articuno"},
    {name: "zapdos", sprite: "zapdos"},
    {name: "moltres", sprite: "moltres"},
    {name: "dratini", sprite: "dratini"},
    {name: "dragonair", sprite: "dragonair"},
    {name: "dragonite", sprite: "dragonite"},
    {name: "mewtwo", sprite: "mewtwo"},
    {name: "mew", sprite: "mew"},
];
const backPokemon = pokemons.map(pokemon =>{
    return {name: pokemon.name, sprite: 'back'+pokemon.sprite}
});

  
// Define un índice para la selección de personajes
let pokemonIndex = 0;
// let leftIndex = 150;
// let rightIndex = 1;

// Exporta la escena del menú
export default function() {
    // Muestra los Pokémon en el orden correcto
    const updateDisplay = () => {
        
        // Limpia la pantalla
        destroyAll();

        const leftIndex = (pokemonIndex - 1 + pokemons.length) % pokemons.length;
        const rightIndex = (pokemonIndex + 1) % pokemons.length;

        add([
            sprite('background'),
            pos(80, 0),
            'background', 
            scale(0.69)
        ]);
      
        // if(pokemonIndex==0){
        //     leftIndex = 150;
        //     rightIndex = 1;
        // }else if (pokemonIndex == 150){
        //     leftIndex = 150;
        //     rightIndex = 0;
        // }else{
        //     leftIndex = pokemonIndex -1;
        //     rightIndex = pokemonIndex +1;
        // }

        
        // Muestra el Pokémon a la izquierda
        add([
            sprite(pokemons[leftIndex].sprite),
            pos(width() / 2 - 600, height() / 3),
            scale(2.7), 
            'pokemon'
        ]);
        // Muestra el Pokémon seleccionado
        add([
            sprite(pokemons[pokemonIndex].sprite),
            pos(width() / 2 - 200, height() / 4),
            scale(4), 
            'pokemon'
        ]);
        // Muestra el Pokémon a la derecha
        add([
            sprite(pokemons[rightIndex].sprite),
            pos(width() / 2 + 300, height() / 3), 
            scale(2.7),   
            'pokemon'
        ]); 
        // Añade texto para mostrar el nombre del Pokémon seleccionado
        add([
            text(pokemons[pokemonIndex].name.toUpperCase()),
            pos(width() / 2 - 210, height() / 3 + 400),
            color(0, 0, 0),
        ]);
       
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

    function flashScreen() {
        const flash = add([rect(width(), height()), color(10,10,10), fixed(), opacity(0)])
        tween(flash.opacity, 1, 0.5, (val) => flash.opacity = val, easings.easeInBounce)
    }

    // Cuando el usuario presione la tecla de espacio, inicia el juego con el personaje seleccionado
    onKeyPress("space", () => {
        let opponentIndex = Math.floor(Math.random() * pokemons.length);

        while (opponentIndex === pokemonIndex) {
            opponentIndex = Math.floor(Math.random() * pokemons.length);
        }
        flashScreen()
        setTimeout(() => {
            go("game", backPokemon[pokemonIndex], pokemons[opponentIndex]);
        }, 600)
    });
}
