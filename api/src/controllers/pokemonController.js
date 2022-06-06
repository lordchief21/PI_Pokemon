const {Pokemon, Types} = require('../db');
const axios = require('axios');


async function getApiPokemons ()  {

    
        const pokeAPI= (await axios("https://pokeapi.co/api/v2/pokemon")).data;
        const pokeAPI2 = (await axios(pokeAPI.next));
        const totalPokeAPI = pokeAPI.results.concat(pokeAPI2.data.results);

        const allPokemon = await Promise.all(totalPokeAPI.map(async(o)=>{

            let propPoke = (await axios(o.url)).data
            return  {
                id:propPoke.id,
                name:propPoke.name,
                health:propPoke.stats[0].base_stat,
                strength:propPoke.stats[1].base_stat,
                defense:propPoke.stats[2].base_stat,
                speed:propPoke.stats[5].base_stat,
                height:propPoke.height,
                weight:propPoke.weight,
                types:propPoke.types.map(e => e.type.name),
                image:propPoke.sprites.other.dream_world.front_default,
                
             }
             

        }))

        return allPokemon
     
        
         
}      

async function getDbPokemons() {
    return await Pokemon.findAll({
        include:{
            model: Types,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })
};


async function getAllPokemons() {
    const pokemonApi = await getApiPokemons();
    const pokemonDb = await getDbPokemons();
    const PokemonTotal = await pokemonApi.concat(pokemonDb);
    return PokemonTotal
}


module.exports = {
    getAllPokemons
}