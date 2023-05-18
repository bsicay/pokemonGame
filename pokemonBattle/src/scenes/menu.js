
import kaboom from "kaboom";
import { PokemonList } from '../../src/api/api.js';

const pokemons =[
    {name: "Bulbasaur", sprite: "bulbasaur"},
    {name: "Ivysaur", sprite: "ivysaur"},
    {name: "Venusaur", sprite: "venusaur"},
    {name: "Charmander", sprite: "charmander"},
    {name: "Charmeleon", sprite: "charmeleon"},
    {name: "Charizard", sprite: "charizard"},
    {name: "Squirtle", sprite: "squirtle"},
    {name: "Wartortle", sprite: "wartortle"},
    {name: "Blastoise", sprite: "blastoise"},
    {name: "Caterpie", sprite: "caterpie"},
    {name: "Metapod", sprite: "metapod"},
    {name: "Butterfree", sprite: "butterfree"},
    {name: "Weedle", sprite: "weedle"},
    {name: "Kakuna", sprite: "kakuna"},
    {name: "Beedrill", sprite: "beedrill"},
    {name: "Pidgey", sprite: "pidgey"},
    {name: "Pidgeotto", sprite: "pidgeotto"},
    {name: "Pidgeot", sprite: "pidgeot"},
    {name: "Rattata", sprite: "rattata"},
    {name: "Raticate", sprite: "raticate"},
    {name: "Spearow", sprite: "spearow"},
    {name: "Fearow", sprite: "fearow"},
    {name: "Ekans", sprite: "ekans"},
    {name: "Arbok", sprite: "arbok"},
    {name: "Pikachu", sprite: "pikachu"},
    {name: "Raichu", sprite: "raichu"},
    {name: "Sandshrew", sprite: "sandshrew"},
    {name: "Sandslash", sprite: "sandslash"},
    {name: "Nidoran♀", sprite: "nidoran-f"},
    {name: "Nidorina", sprite: "nidorina"},
    {name: "Nidoqueen", sprite: "nidoqueen"},
    {name: "Nidoran♂", sprite: "nidoran-m"},
    {name: "Nidorino", sprite: "nidorino"},
    {name: "Nidoking", sprite: "nidoking"},
    {name: "Clefairy", sprite: "clefairy"},
    {name: "Clefable", sprite: "clefable"},
    {name: "Vulpix", sprite: "vulpix"},
    {name: "Ninetales", sprite: "ninetales"},
    {name: "Jigglypuff", sprite: "jigglypuff"},
    {name: "Wigglytuff", sprite: "wigglytuff"},
    {name: "Zubat", sprite: "zubat"},
    {name: "Golbat", sprite: "golbat"},
    {name: "Oddish", sprite: "oddish"},
    {name: "Gloom", sprite: "gloom"},
    {name: "Vileplume", sprite: "vileplume"},
    {name: "Paras", sprite: "paras"},
    {name: "Parasect", sprite: "parasect"},
    {name: "Venonat", sprite: "venonat"},
    {name: "Venomoth", sprite: "venomoth"},
    {name: "Diglett", sprite: "diglett"},
    {name: "Dugtrio", sprite: "dugtrio"},
    {name: "Meowth", sprite: "meowth"},
    {name: "Persian", sprite: "persian"},
    {name: "Psyduck", sprite: "psyduck"},
    {name: "Golduck", sprite: "golduck"},
    {name: "Mankey", sprite: "mankey"},
    {name: "Primeape", sprite: "primeape"},
    {name: "Growlithe", sprite: "growlithe"},
    {name: "Arcanine", sprite: "arcanine"},
    {name: "Poliwag", sprite: "poliwag"},
    {name: "Poliwhirl", sprite: "poliwhirl"},
    {name: "Poliwrath", sprite: "poliwrath"},
    {name: "Abra", sprite: "abra"},
    {name: "Kadabra", sprite: "kadabra"},
    {name: "Alakazam", sprite: "alakazam"},
    {name: "Machop", sprite: "machop"},
    {name: "Machoke", sprite: "machoke"},
    {name: "Machamp", sprite: "machamp"},
    {name: "Bellsprout", sprite: "bellsprout"},
    {name: "Weepinbell", sprite: "weepinbell"},
    {name: "Victreebel", sprite: "victreebel"},
    {name: "Tentacool", sprite: "tentacool"},
    {name: "Tentacruel", sprite: "tentacruel"},
    {name: "Geodude", sprite: "geodude"},
    {name: "Graveler", sprite: "graveler"},
    {name: "Golem", sprite: "golem"},
    {name: "Ponyta", sprite: "ponyta"},
    {name: "Rapidash", sprite: "rapidash"},
    {name: "Slowpoke", sprite: "slowpoke"},
    {name: "Slowbro", sprite: "slowbro"},
    {name: "Magnemite", sprite: "magnemite"},
    {name: "Magneton", sprite: "magneton"},
    {name: "Farfetch'd", sprite: "farfetchd"},
    {name: "Doduo", sprite: "doduo"},
    {name: "Dodrio", sprite: "dodrio"},
    {name: "Seel", sprite: "seel"},
    {name: "Dewgong", sprite: "dewgong"},
    {name: "Grimer", sprite: "grimer"},
    {name: "Muk", sprite: "muk"},
    {name: "Shellder", sprite: "shellder"},
    {name: "Cloyster", sprite: "cloyster"},
    {name: "Gastly", sprite: "gastly"},
    {name: "Haunter", sprite: "haunter"},
    {name: "Gengar", sprite: "gengar"},
    {name: "Onix", sprite: "onix"},
    {name: "Drowzee", sprite: "drowzee"},
    {name: "Hypno", sprite: "hypno"},
    {name: "Krabby", sprite: "krabby"},
    {name: "Kingler", sprite: "kingler"},
    {name: "Voltorb", sprite: "voltorb"},
    {name: "Electrode", sprite: "electrode"},
    {name: "Exeggcute", sprite: "exeggcute"},
    {name: "Exeggutor", sprite: "exeggutor"},
    {name: "Cubone", sprite: "cubone"},
    {name: "Marowak", sprite: "marowak"},
    {name: "Hitmonlee", sprite: "hitmonlee"},
    {name: "Hitmonchan", sprite: "hitmonchan"},
    {name: "Lickitung", sprite: "lickitung"},
    {name: "Koffing", sprite: "koffing"},
    {name: "Weezing", sprite: "weezing"},
    {name: "Rhyhorn", sprite: "rhyhorn"},
    {name: "Rhydon", sprite: "rhydon"},
    {name: "Chansey", sprite: "chansey"},
    {name: "Tangela", sprite: "tangela"},
    {name: "Kangaskhan", sprite: "kangaskhan"},
    {name: "Horsea", sprite: "horsea"},
    {name: "Seadra", sprite: "seadra"},
    {name: "Goldeen", sprite: "goldeen"},
    {name: "Seaking", sprite: "seaking"},
    {name: "Staryu", sprite: "staryu"},
    {name: "Starmie", sprite: "starmie"},
    {name: "Mr. Mime", sprite: "mrMime"},
    {name: "Scyther", sprite: "scyther"},
    {name: "Jynx", sprite: "jynx"},
    {name: "Electabuzz", sprite: "electabuzz"},
    {name: "Magmar", sprite: "magmar"},
    {name: "Pinsir", sprite: "pinsir"},
    {name: "Tauros", sprite: "tauros"},
    {name: "Magikarp", sprite: "magikarp"},
    {name: "Gyarados", sprite: "gyarados"},
    {name: "Lapras", sprite: "lapras"},
    {name: "Ditto", sprite: "ditto"},
    {name: "Eevee", sprite: "eevee"},
    {name: "vaporeon", sprite: "vaporeon"},
    {name: "jolteon", sprite: "jolteon"},
    {name: "flareon", sprite: "flareon"},
    {name: "porygon", sprite: "porygon"},
    {name: "Omanyte", sprite: "omanyte"},
    {name: "Omastar", sprite: "omastar"},
    {name: "Kabuto", sprite: "kabuto"},
    {name: "Kabutops", sprite: "kabutops"},
    {name: "Aerodactyl", sprite: "aerodactyl"},
    {name: "Snorlax", sprite: "snorlax"},
    {name: "Articuno", sprite: "articuno"},
    {name: "Zapdos", sprite: "zapdos"},
    {name: "Moltres", sprite: "moltres"},
    {name: "Dratini", sprite: "dratini"},
    {name: "Dragonair", sprite: "dragonair"},
    {name: "Dragonite", sprite: "dragonite"},
    {name: "Mewtwo", sprite: "mewtwo"},
    {name: "mew", sprite: "mew"}
];
let backPokemon =[];



// async function loadPokemons() {
//     try {
//       const pokemonArray = await PokemonList();
//       pokemons = pokemonArray.map(pokemon => ({
//         name: pokemon.name,
//         sprite: pokemon.name
//       }));
//       backPokemon = pokemonArray.map(pokemon => ({
//         name: 'back' + pokemon.name,
//         sprite: 'back' + pokemon.name
//       }));
//       console.log(pokemons[0].sprite);
//       spritesLoaded = true;
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
//   loadPokemons();
  
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
