import axios from 'axios';

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


export default function filterPokeByType(payload) {

    console.log(payload)
    return {
        type: 'FILTER_BY_TYPE',
        payload
    }
}