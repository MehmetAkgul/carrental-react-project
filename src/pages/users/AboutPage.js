import React from 'react'
import PageHeader from "../../components/users/common/pageheader/pageHeader";
import Team from "../../components/users/about/team/team";
import Spacer from "../../components/users/common/spacer/spacer";
import WhyUs from "../../components/users/common/whyUs/whyUs";
 import Testimonials from "../../components/users/common/testimonials/testimonials";

const AboutPage = () => {
    return (
        <>
            <PageHeader title="About Us"/>
            <Spacer/>
            <WhyUs/>
            <Spacer/>
            <Testimonials/>
            <Spacer/>
            <Team/>
            <Spacer/>
        </>

    )
}

export default AboutPage