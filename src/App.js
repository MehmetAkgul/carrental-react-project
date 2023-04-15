import React, {useEffect, useState} from 'react';
import CustomRoutes from "./router/customRoutes";
import {ToastContainer} from "react-toastify";
import {useStore} from "./stores";
import {getUser} from "./api/userService";
import {loginSuccess} from "./stores/user/userActions";
import LoadingPage from "./pages/users/LoadingPage";
import {getVehicle} from "./api/vehicleService";
import {setVehicles} from "./stores/vehicle/vehicleActionsState";


function App() {

    const [loading, setLoading] = useState(true);
    const {dispatchUser, dispatchVehicle} = useStore();

    const loadData = async () => {
        try {
            let resp = await getUser();
            dispatchUser(loginSuccess(resp.data));

            resp = await getVehicle()
            dispatchVehicle(setVehicles(resp.data))


            setLoading(false);
        } catch (e) {
            console.log(e)
            setLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    if (loading)
        return (<LoadingPage/>);
    else
        return (
            <>
                <CustomRoutes/>
                <ToastContainer/>
            </>
        );
}

export default App;
