import React from 'react';
import SubHero from "@/components/SubHero";
import Testimonial from "@/components/TestimonialPageComponents/Testimonial";
import Subscribe from "@/components/Subscribe";




// fetch testimonialList
const getTestimonialList = async ()=> {
    const res = await  fetch("https://agency.teamrabbil.com/api/TestimonialList")
    const data = res.json();
    if(res.ok){
        return data
    }else {
        return  []
    }
}

const TestimonialsPage =async () => {
    const testimonialList =await getTestimonialList();
    return (
        <>
            <SubHero  breadCrumbsStart="Home" breadCrumbsEnd="Testimonials"/>
            <Testimonial testimonialList={testimonialList}/>
            <Subscribe/>
            
        </>
    );
};

export default TestimonialsPage;
