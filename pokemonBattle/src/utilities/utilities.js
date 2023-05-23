export function calculadorMultiplicador(pokemon1, pokemon2){
    //fortalezas y debilidades por tipo
    let tipoRelaciones = {
        normal: { weaknesses: [], strengths: [] },
        fire: { weaknesses: ["water", "rock", "ground"], strengths: ["grass", "ice", "bug", "steel"] },
        water: { weaknesses: ["electric", "grass"], strengths: ["fire", "rock", "ground"] },
        electric: { weaknesses: ["ground"], strengths: ["water", "flying"] },
        grass: { weaknesses: ["fire", "ice", "poison", "flying", "bug"], strengths: ["water", "ground", "rock"] },
        ice: { weaknesses: ["fire", "fighting", "rock", "steel"], strengths: ["grass", "ground", "flying", "dragon"] },
        fighting: { weaknesses: ["flying", "poison", "psychic", "bug", "fairy"], strengths: ["normal", "ice", "rock", "steel"] },
        poison: { weaknesses: ["ground", "psychic"], strengths: ["grass", "fairy"] },
        ground: { weaknesses: ["water", "grass", "ice"], strengths: ["electric", "poison", "fire", "rock", "steel"] },
        flying: { weaknesses: ["electric", "ice", "rock"], strengths: ["grass", "fighting", "bug"] },
        psychic: { weaknesses: ["bug", "ghost", "dark"], strengths: ["fighting", "poison"] },
        bug: { weaknesses: ["fire", "flying", "rock"], strengths: ["grass", "psychic", "poison"] },
        rock: { weaknesses: ["water", "grass", "fighting", "ground", "steel"], strengths: ["fire", "ice", "bug", "flying", "fairy"] },
        ghost: { weaknesses: ["ghost", "dark"], strengths: ["psychic"] },
        dragon: { weaknesses: ["fairy", "dragon"], strengths: ["dragon"] }
      }

    

    let multiplicador = 1;
    for (let i = 0; i < pokemon1.length; i++){
        let tipo = pokemon1[i]
        let relaciones = tipoRelaciones[tipo]
        //console.log(relaciones)
        let fortalezas = relaciones.strengths
        let debilidades = relaciones.weaknesses
        
        //revisar tipos del segundo pokemon
        for(let j= 0; j< pokemon2.length;j++){
            let tipo2 = pokemon2[j]
            if(fortalezas.includes(tipo2)){
                multiplicador = multiplicador*2;
            }
            if(debilidades.includes(tipo2)){
                multiplicador = multiplicador*0.5
            }
        }
    }
    return multiplicador
}