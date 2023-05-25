export async function calculadorMultiplicador(pokemon1, pokemon2){
    try{
        //fortalezas y debilidades por tipo
        let tipoRelaciones = {
            normal: { weaknesses: [], strengths: [] },
            fire: { weaknesses: ["fire","water", "rock", "ground"], strengths: ["grass", "ice", "bug", "steel"] },
            water: { weaknesses: ["water","electric", "grass"], strengths: ["fire", "rock", "ground"] },
            electric: { weaknesses: ["electric","ground"], strengths: ["water", "flying"] },
            grass: { weaknesses: ["grass","fire", "ice", "poison", "flying", "bug"], strengths: ["water", "ground", "rock"] },
            ice: { weaknesses: ["ice","fire", "fighting", "rock", "steel"], strengths: ["grass", "ground", "flying", "dragon"] },
            fighting: { weaknesses: ["flying", "poison", "psychic", "bug", "fairy"], strengths: ["normal", "ice", "rock", "steel"] },
            poison: { weaknesses: ["poison","ground", "psychic"], strengths: ["grass", "fairy"] },
            ground: { weaknesses: ["ground","water", "grass", "ice"], strengths: ["electric", "poison", "fire", "rock", "steel"] },
            flying: { weaknesses: ["electric", "ice", "rock"], strengths: ["grass", "fighting", "bug"] },
            psychic: { weaknesses: ["psychic","bug", "ghost", "dark"], strengths: ["fighting", "poison"] },
            bug: { weaknesses: ["bug","fire", "flying", "rock"], strengths: ["grass", "psychic", "poison"] },
            rock: { weaknesses: ["rock","water", "grass", "fighting", "ground", "steel"], strengths: ["fire", "ice", "bug", "flying", "fairy"] },
            ghost: { weaknesses: ["ghost", "dark"], strengths: ["psychic"] },
            dragon: { weaknesses: ["fairy"], strengths: ["dragon"] }
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

    } catch (error) {
        throw new Error('Error fetching Pokemon list:', error);
    }
    
}