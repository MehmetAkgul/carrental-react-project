import React from 'react'
import Slider from "../../components/users/home/slider/slider";
import Bookbar from "../../components/users/home/bookbar/bookbar";
import Testimonials from "../../components/users/common/testimonials/testimonials";
import Spacer from "../../components/users/common/spacer/spacer";
import WhyUs from "../../components/users/common/whyUs/whyUs";

const HomePage = () => {
    return (
        <>
            <Slider/>
            <Bookbar/>
            <Spacer/>
            <Testimonials/>
            <Spacer/>
            <WhyUs/>
        </>
    )
}

export default HomePage