import { ADD_LOCATION, RESET_LOCATION } from '../action/actionType'
const INITIAL_DATA = []
const locationReducer = (state = INITIAL_DATA,action) =>{
    switch (action.type) {
        case ADD_LOCATION:
            return [
                ...state, action.locationData
            ];
        case RESET_LOCATION:
            return [];
        default:
            return state
    }
}
export  default  locationReducer;