import {createContext, useContext, useReducer} from "react";
import React from 'react';
import {userReducer} from "./user/userReducer";
import {userInitialState} from "./user/userInitialState";

const Store = createContext();

export const useStore = () => useContext(Store);

export const StoreProvider = ({children}) => {
    const [userState, dispatchUser] = useReducer(
        userReducer,
        userInitialState
    );

    const storeObject = {userState, dispatchUser}

    return (
        <Store.Provider value={storeObject}>
            {children}
        </Store.Provider>
    );
};

