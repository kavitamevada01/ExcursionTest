import {ADD_EXCURSION, RESET_EXCURSION, ADD_EXCURSION_CATEGORY, RESET_EXCURSION_CATEGORY,  FILTER_EXCURSION_BY_CATEGORY,SHOW_ALL} from '../action/actionType'
const INITIAL_EXCURSIONS_DATA = []
const INITIAL_EXCURSION_DETAIL_DATA = []
const excursionsReducer = (state = INITIAL_EXCURSIONS_DATA,action) =>{
    switch (action.type) {
        case ADD_EXCURSION:
            return [
                ...state, action.excursionsData
            ];
        case RESET_EXCURSION:
            return INITIAL_EXCURSIONS_DATA;
        default:
            return state
    }
};


export const excursionsVisibilityFilterReducer = (state = SHOW_ALL,action) =>{
    switch (action.type) {
        case FILTER_EXCURSION_BY_CATEGORY:
            return  action.filter;
        default:
            return state
    }
};
export const excursionCategoryReducer = (state = INITIAL_EXCURSION_DETAIL_DATA, action) => {
    switch ( action.type) {
        case ADD_EXCURSION_CATEGORY:
            return [
                ...state, action.excursionCategory
            ];
        case RESET_EXCURSION_CATEGORY:
            return INITIAL_EXCURSIONS_DATA;
        default:
            return state
    }
};

export default  excursionsReducer;