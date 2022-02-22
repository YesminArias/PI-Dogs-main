

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
                dogs: action.payload
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
            let sortNames = action.payload === 'asc' 
            ?   state.dogs.sort(function (a, b){
                if(a.name >b.name) return 1;
                if(a.name <b.name) return -1;
                return 0;
            })
            : state.dogs.sort(function (a, b){
                if(a.name >b.name) return -1;
                if(a.name <b.name) return 1;
                return 0;
            }) 
           
            return{
                ...state,
                allDogs:sortNames,
                dogs: sortNames
            }
        case 'FILTER_TEMPERAMENT':
            const allBreeds = state.dogs;
            const filterTemperament = action.payload === "all" ? allBreeds : allBreeds.filter (e => {
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