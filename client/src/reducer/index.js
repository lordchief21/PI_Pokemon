
const initialState = {
    pokemons: [],
    allPokemonsSup:[],
    types: []
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

        case 'POST_POKEMON':
            return {
                ...state,
            }

        case 'FILTER_BY_TYPE':
            const allPokemons = state.allPokemonsSup;
            const typesFiltered = action.payload === "ALL" ? allPokemons : allPokemons.filter(f => f.types?.includes(action.payload))
            console.log(typesFiltered)

            return {
                ...state,
                pokemons: typesFiltered
            };

        case 'FILTER_BY_ORIGIN':
            const allPokemonsOrigin = state.allPokemonsSup
            
            const filterByOrigin = action.payload ==='Created'? allPokemonsOrigin.filter(o => o.createdInDatabase) : action.payload === 'API'? allPokemonsOrigin.filter(o => !o.createdInDatabase): allPokemonsOrigin
            
            return {
                    ...state,
                    pokemons: filterByOrigin
            };
        
        case 'FILTER_ASC_DESC':
            const allPokemonsSort = state.pokemons;
            const sortedPokemons = action.payload === 'AtoZ' ? allPokemonsSort.sort( (s , d) =>  s.name > d.name ? 1 : s.name < d.name ? -1 : 0) : action.payload === 'ZotA' ? allPokemonsSort.sort ((s, d) => s.name < d.name ? 1 : s.name > d.name ? -1 : 0 ) : allPokemonsSort
            
            return {
                ...state,
                pokemons: sortedPokemons,
            }

        case 'SEARCH_BY_NAME':
            
            return {
                ...state,
                pokemons: action.payload
            }
                
        default:
            return {
                state
            }
    }
}