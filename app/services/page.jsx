import React from 'react';
import SubHero from "@/components/SubHero";
import Services from "@/components/ServicePageComponents/Services";
import Subscribe from "@/components/Subscribe";



// fetch all services

const getServices = async ()=>{
    const res = await  fetch("https://agency.teamrabbil.com/api/AllService")
    const data  = await res.json();
    if(res.ok){
        return data;
    }else {
        return []
    }
}


const ServicePage =async () => {
    const services = await getServices()

    
    return (
        <>
            <SubHero  breadCrumbsStart="Home" breadCrumbsEnd="Services" label={"Our Services"} />
            <Services  services={services} />
            <Subscribe/>
        </>
    );
};

export default ServicePage;
