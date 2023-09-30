import Image from 'next/image'
import Hero from "@/components/HomePageComponents/Hero";
import WorkList from "@/components/HomePageComponents/WorkList";
import FeaturedProject from "@/components/HomePageComponents/FeaturedProject";
import Subscribe from "@/components/Subscribe";



// fetch getHeroItem
const getHeroItem = async () => {
    const res = await fetch("https://agency.teamrabbil.com/api/HeroList", {
        method: "GET",
    })
    const data = await res.json()
    
    if (res.ok) {
        return data
    } else {
        return {}
    }
    
}


// fetch brandList

const getBrandList = async () => {
    const res = await fetch("https://agency.teamrabbil.com/api/BrandList")
    const data = await res.json()
    if (res.ok) {
        return data
    } else {
        return []
    }
}


// fetch worList item
const getWorkList = async () => {
    const res = await fetch("https://agency.teamrabbil.com/api/WorkList");
    const data = await res.json();
    if (res.ok) {
        return data
    } else {
        return []
    }
}

// fetch featured project
const getFeaturedProject = async () => {
    const res = await fetch("https://agency.teamrabbil.com/api/FeaturedProject");
    const data = res.json();
    if (res.ok) {
        return data;
    } else {
        return []
    }
}


const getStatList = async ()=> {
    const res =await fetch("https://agency.teamrabbil.com/api/StatList")
    const data = await res.json();
    if(res.ok){
        return data
    }else{
        return []
    }
}

const HomePage = async () => {
    const heroItem = await getHeroItem()
    const branList = await getBrandList()
    const workList = await getWorkList()
    const featuredProject = await getFeaturedProject()
    const statList = await getStatList()
  
    
    return (<div>
        <Hero heroItem={heroItem} brandList={branList}/>
        <WorkList workList={workList} statList={statList}/>
        <FeaturedProject featuredProject={featuredProject}/>
        <Subscribe/>
    </div>);
};

export default HomePage;
