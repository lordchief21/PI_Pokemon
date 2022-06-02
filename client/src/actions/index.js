import axios from 'axios';

export function getPokemons() {
    return async (dispatch) => {
        const pokeJson = await axios("http://localhost:3001/pokemons");
        return dispatch ({
            type: 'GET_POKEMONS',
            payload: pokeJson.data

        })
    }
}