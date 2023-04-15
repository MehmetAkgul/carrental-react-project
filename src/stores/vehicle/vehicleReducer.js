import {vehicleInitialState} from "./vehicleInitialState";
import {types} from "../types";

export const vehicleReducer = (state = vehicleInitialState, action) => {
    if (action.type === types.SET_VEHICLES)
        return {
            ...state,
            vehicles: action.payload
        }
}