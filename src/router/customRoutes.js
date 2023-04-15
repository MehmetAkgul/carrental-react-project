import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/users/HomePage";
import AboutPage from "../pages/users/AboutPage";
import ContactPage from "../pages/users/ContactPage";
import AuthPage from "../pages/users/AuthPage";
import VehiclePage from "../pages/users/VehiclePage";
import VehicleDetailPage from "../pages/users/VehicleDetailPage";
import UserTemplate from "../templates/userTemplate";
import ProfilePage from "../pages/users/ProfilePage";

const CustomRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    {/* admins routes */}
                    {/* user routes */}
                    <Route index element={<UserTemplate><HomePage/></UserTemplate>}/>
                    <Route path="/about" element={<UserTemplate><AboutPage/></UserTemplate>}/>
                    <Route path="/contact" element={<UserTemplate><ContactPage/></UserTemplate>}/>
                    <Route path="/auth" element={<AuthPage/>}/>
                    <Route path="/vehicles">
                        <Route index element={<UserTemplate><VehiclePage/></UserTemplate>}/>
                        <Route path=":vehicleId" element={<UserTemplate><VehicleDetailPage/></UserTemplate>}/>
                    </Route>
                    <Route path="user">
                        <Route index element={<UserTemplate> <ProfilePage/> </UserTemplate>}/>
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
)
}
export default CustomRoutes