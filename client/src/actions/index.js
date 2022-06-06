import axios from 'axios';

// LLamadas a las rutas del servidor

export function getPokemons() {
    return async function(dispatch) {
        const pokeJson = await axios("http://localhost:3001/pokemons",{ });
        return dispatch ({
            type: 'GET_POKEMONS',
            payload: pokeJson.data

        })
    }
};

export function getTypes() {
    return async (dispatch) => {
        const typeJson = await axios('http://localhost:3001/type');
        return dispatch ({
            type: 'GET_TYPE',
            payload: typeJson.data
        })
    }
}

export function postPokemon (payload) {
    return async function(dispatch) {
        const postCall = await axios.post('http://localhost:3001/pokemons', payload);
        console.log(postCall)
        return postCall
    };
}





// Actions para cada filtrado

export function filterPokeByType(payload) {

    console.log(payload)
    return {
        type:'FILTER_BY_TYPE',
        payload: payload
    }
}


export function filteredByOrigin(payload){
    
    return {
        type: 'FILTER_BY_ORIGIN',
        payload: payload
    }
}



export function filteredByAlphabetic(payload){
    console.log(payload)
    return {
        type: 'FILTER_ASC_DESC',
        payload: payload
    }
}


//Action para busqueda por input

    // OJO: La busqueda se puede escalar  para busqueda otras cosas ademas de de los nombres ( MEJORAR EN EL SERVIDOR)
        // En el front se puede cambiar el parametro "name" por otra mas goblal 

export  function getPokemonsByName (name) {
    return async (dispatch) => {

            var namePokeJson = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            return dispatch ({
                type: 'SEARCH_BY_NAME',
                payload: namePokeJson.data
            })

       
    }
}