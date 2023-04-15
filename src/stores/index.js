import {createContext, useContext, useReducer} from "react";

import {userReducer} from "./user/userReducer";
import {userInitialState} from "./user/userInitialState";
import {vehicleReducer} from "./vehicle/vehicleReducer";
import {vehicleInitialState} from "./vehicle/vehicleInitialState";

const Store = createContext();

export const useStore = () => useContext(Store);

export const StoreProvider = ({children}) => {
    const [userState, dispatchUser] = useReducer(
        userReducer,
        userInitialState
    );
    
   const [vehicleState, dispatchVehicle] = useReducer(
        vehicleReducer,
        vehicleInitialState
    );



    const storeObject = {userState, dispatchUser,vehicleState, dispatchVehicle }

    return (
        <Store.Provider value={storeObject}>
            {children}
        </Store.Provider>
    );
};

