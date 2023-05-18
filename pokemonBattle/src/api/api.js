export async function PokemonList() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        const results = data.results;
        const pokemonArray = await Promise.all(
        results.map(async pokemon => {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonData = await pokemonResponse.json();
            const sprites = pokemonData.sprites;
            const backDefault = sprites.back_default;
            const frontDefault = sprites.front_default;
            return {
              name: pokemon.name,
              backDefault,
              frontDefault
            };
          })
        );
        console.log(pokemonArray);
        return pokemonArray;
      } catch (error) {
        throw new Error('Error fetching Pokemon list:', error);
      }
}
  