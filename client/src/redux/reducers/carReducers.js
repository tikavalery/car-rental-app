const initialData = {
    cars : []
}

export const carReducer = (state = initialData,action) =>{
    console.log(action)
    switch(action.type){
        case "GET_ALL_CARS" : {
            return {
                ...state,
                car:action.payload
            }
        }
        default:return state
    }
}