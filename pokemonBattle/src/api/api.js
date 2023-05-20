
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
        //console.log(pokemonArray);
        return pokemonArray;
      } catch (error) {
        throw new Error('Error fetching Pokemon list:', error);
      }
}

export async function StatsPokemon(name){
  try{
    const url = 'https://pokeapi.co/api/v2/pokemon/' + name + '/';
    const response = await fetch(url);
    const pokemonData = await response.json();
    const stats = pokemonData.stats;
    const finalStats = stats.map(stat => stat.base_stat);
    return(finalStats)

  }catch(error){
    throw new Error('Error fetching Pokemon list:', error);
  }
}