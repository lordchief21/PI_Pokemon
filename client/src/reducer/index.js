
const initialState = {
    pokemons: [],
    allPokemonsSup:[]
}


export default function rootReducer(state= initialState, action){
    switch (action.type) {
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
                allPokemonsSup: action.payload
            };
        
        case 'GET_TYPE':
            
            return {
                ...state,
                types: action.payload
            };

        case 'FILTER_BY_TYPE':
            const allPokemons = state.allPokemonsSup;
            const typesFiltered = action.payload === "ALL" ? allPokemons : allPokemons.filter(f => f.types === action.payload)

            return {
                ...state,
                typesFiltered: typesFiltered
            }
    
        default:
            return {
                state
            }
    }
}