
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
async function getMoveDetails(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function StatsPokemon(name){
  try{
    console.log("nombre " + name)
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

export async function getPokemonMoves(name) {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);
  const data = await response.json();
  const moves = data.moves;

  let detailedMoves = await Promise.all(moves.map(move => getMoveDetails(move.move.url)));

  let normalPhysicalMove = detailedMoves.find(move => 
      move.damage_class.name === 'physical' && 
      move.type.name === 'normal'
  );
  if (normalPhysicalMove) {
    detailedMoves = detailedMoves.filter(move => move !== normalPhysicalMove);
  } else {
    normalPhysicalMove = detailedMoves.find(move => move.type.name === 'normal');
    if (normalPhysicalMove) {
      detailedMoves = detailedMoves.filter(move => move !== normalPhysicalMove);
    }
  }

  let specialTypeMove = detailedMoves.find(move => 
    move.damage_class.name === 'special'
  );

  if (specialTypeMove) {
    detailedMoves = detailedMoves.filter(move => move !== specialTypeMove);
  } else {
    specialTypeMove = detailedMoves.find(move => move.type.name === 'normal');
    if (specialTypeMove) {
      detailedMoves = detailedMoves.filter(move => move !== specialTypeMove);
    }
  }

  let normalMove = detailedMoves.find(move => move.type.name === 'normal');

  // Si no se encontró un movimiento normal, buscar cualquier movimiento
  if (!normalMove && detailedMoves.length > 0) {
    normalMove = detailedMoves[0];
  }

  if (!normalPhysicalMove && detailedMoves.length > 0) {
    normalPhysicalMove = detailedMoves[0];
  }

  if (!specialTypeMove && detailedMoves.length > 0) {
    specialTypeMove = detailedMoves[0];
  }

  return [normalPhysicalMove, specialTypeMove, normalMove];
}



export async function GetType(name){
  const maxRetries = 5;
  const delayBetweenRetriesMS = 2000; // 2 seconds
  let lastError = null;

  for(let i = 0; i < maxRetries; i++){
    try{
      const url = 'https://pokeapi.co/api/v2/pokemon/' + name + '/';
      const response = await fetch(url);
      const pokemonData = await response.json();
      const type = pokemonData.types;
      let finalTypes = [];
      for(let j = 0; j < type.length; j++){
        finalTypes.push(type[j].type.name);
      }
      return finalTypes;
    }catch(error){
      console.error('Error fetching Pokemon list:', error);
      lastError = error;
    }
    
    // Si llegamos a este punto, ha ocurrido un error, así que esperamos antes de volver a intentarlo.
    await new Promise(resolve => setTimeout(resolve, delayBetweenRetriesMS));
  }
  
  // Si hemos agotado todos los intentos y aún no hemos tenido éxito, lanzamos el último error.
  throw new Error(`Error after ${maxRetries} attempts: ${lastError}`);
}
