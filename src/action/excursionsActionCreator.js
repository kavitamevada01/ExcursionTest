import {
    ADD_EXCURSION,
    RESET_EXCURSION,
    ADD_EXCURSION_CATEGORY,
    RESET_EXCURSION_CATEGORY,
    FILTER_EXCURSION_BY_CATEGORY,
    SHOW_ALL
} from './actionType'
export const addExcursion = (Excursion) => {
    return {
        type: ADD_EXCURSION,
        excursionsData: Excursion
    }
};
export const resetExcursion = () => {
    return {
        type: RESET_EXCURSION,
        excursionsData: {}
    }
};
export const addExcursionCategory = (ExcursionCategory) => {
    return {
        type: ADD_EXCURSION_CATEGORY,
        excursionCategory:  ExcursionCategory
    }
}

export const resetExcursionCategory = () => {
    return {
        type: RESET_EXCURSION_CATEGORY,
        excursionCategory: {}
    }
};


export const setExcursionVisibilityFilterByCategory= (filter) => {
    return {
        type: FILTER_EXCURSION_BY_CATEGORY,
        filter
    }
};
export const getVisibleExcursions = (excursions, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return excursions;
        default:
            console.log('Data load For'+filter);
            const filterExcur = excursions.filter(excursion => {
                if(excursion.categoryName === filter)
                {
                    return true;
                }else{
                    return false;
                }

            });
            return filterExcur
    }
};
