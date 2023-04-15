import React from 'react';
 import Spacer from "../../components/users/common/spacer/spacer";
import Profile from "../../components/users/profile/Profile";
import PageHeader from "../../components/users/common/pageheader/pageHeader";

const ProfilePage = () => {
    return (
        <>
            <PageHeader title="Profile"/>
            <Spacer/>
            <Profile/>
            <Spacer/>
        </>
    );
};

export default ProfilePage;