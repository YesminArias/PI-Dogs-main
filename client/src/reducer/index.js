

const inicialState = { 
    dogs :[],
    temperament:[],
    detail:[],
    allDogs:[]
}

function rootReducer(state= inicialState, action){
    
    switch(action.type){
        case 'GET_DOGS':
            return{
                ...state,
                allDogs: action.payload,
                dogs:[]
               
            }
        case 'GET_TEMPERAMENTS':
            
            return{
                ...state,
                temperament: action.payload 
            }
        case 'GET_NAME':
            return{
                ...state,
                dogs: action.payload
            }
        case 'GET_DETAIL':
            return{
                ...state,
                detail: action.payload
            }
        case 'SORT_NAME':
            

           
           if( action.payload === 'asc'){
            return{
                ...state,
                allDogs: [...state.allDogs].sort((a, b) => (a < b ? 1 : -1)),
                dogs: [...state.dogs].sort((a, b) => (a < b ? 1 : -1)),
                }
            }
            if( action.payload === 'desc'){
            return {
                ...state,
                allDogs: [...state.allDogs].sort((a, b) => (a > b ? 1 : -1)),
                dogs: [...state.dogs].sort((a, b) => (a > b ? 1 : -1)),
                }
            }
               
        case 'FILTER_TEMPERAMENT':
            const allBreeds = state.allDogs;
            console.log(action.payload)
            const filterTemperament = action.payload === "All" ? allBreeds : allBreeds.filter (e => {
                if(e.temperament){
                    if( e.temperament.includes(action.payload)){
                        return e
                    }
            }
            })
            return{
                ...state,
                dogs: filterTemperament
            }
        
        case 'SORT_WEIGHT':
            return{
                ...state,
            }
        case 'RES_STATE':
            return{
                ...state,
                detail: []
            }
        
            default:
                return state;
    }

}

export default rootReducer;