import React from 'react';
import TopBar from "../components/users/common/header/topBar";
import MainNavbar from "../components/users/common/header/mainNavbar";
import Footer from "../components/users/common/footer/footer";

const UserTemplate = ({children}) => {
    return (
        <>
            <TopBar/>
            <MainNavbar/>
            {children}
            <Footer/>
        </>

    );
};

export default UserTemplate;