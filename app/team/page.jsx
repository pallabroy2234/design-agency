import React from 'react';
import SubHero from "@/components/SubHero";
import Team from "@/components/TeamPageComponents/Team";
import Subscribe from "@/components/Subscribe";


const getTeamList = async ()=> {
    const res = await  fetch("https://agency.teamrabbil.com/api/TeamList")
    const data = await res.json();
    if(res.ok){
        return data
        
    }else {
        return []
    }
}


const TeamPage =async () => {
     const teamList = await getTeamList()
 
    
    
    return (
        <>
            <SubHero  breadCrumbsStart="Home" breadCrumbsEnd="Team" label={"Our Team"}/>
            <Team teamList={teamList} />
            <Subscribe/>
        </>
    );
};

export default TeamPage;
