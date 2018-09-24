import {ADD_LOCATION, RESET_LOCATION } from './actionType.js'
export const addLocation = (Location) => {
    return {
        type: ADD_LOCATION,
        locationData: Location
    }
};

export const resetLocation = () => {
    return {
        type: RESET_LOCATION,
        locationData: {}
    }
};
