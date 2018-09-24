import {combineReducers} from 'redux'
import  locationReducer from './locationReducer'
import  excursionsDetailReducer, { excursionCategoryReducer,excursionsVisibilityFilterReducer}from './excursionsReducer'
const mainReducer = combineReducers({
    locations: locationReducer,
    excursions: excursionsDetailReducer,
    excursionCategories: excursionCategoryReducer,
    excursionVisibilityFilterByCategory:excursionsVisibilityFilterReducer
});
export default  mainReducer;