import React from 'react';
import SubHero from "@/components/SubHero";
import AllProject from "@/components/AllProjectPageComponents/AllProject";
import Subscribe from "@/components/Subscribe";

// fetch all project

const getAllProject =async ()=> {
    const res  = await  fetch("https://agency.teamrabbil.com/api/AllProject")
    const data = await res.json();
    if(res.ok){
        return data;
    }else {
        return  []
    }
}



const ProjectPage =async () => {
    const allProject = await getAllProject()
    
    return (
        <>
            <SubHero  breadCrumbsStart="Home" breadCrumbsEnd="Projects"/>
            <AllProject allProject={allProject}/>
            <Subscribe/>
        </>
    );
};

export default ProjectPage;
