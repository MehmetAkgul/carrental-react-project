import {userInitialState} from "./userInitialState";
import {types} from "../types";

export const userReducer = (state = userInitialState, action) => {

    if (action.type === types.LOGIN_SUCCESS) {
        return {
            ...state,
            user: action.payload,
            isUserLogin: true

        }
    } else if (action.type === types.LOGIN_FAILED) {
        return {
            ...state,
            user: {},
            isUserLogin: false

        }
    } else if (action.type === types.LOGOUT) {
        return {
            ...state,
            user: {},
            isUserLogin: false

        }
    }

}