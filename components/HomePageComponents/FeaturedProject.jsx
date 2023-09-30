import React from 'react';
import Link from "next/link";


// bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-200 via-green-100 to-gray-100

// bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-yellow-200 via-green-200 to-green-300

const FeaturedProject = ({featuredProject}) => {
   
    return (
        <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-200 via-green-100 to-gray-100 py-[100px]">
            <div className="customContainer">
            {/*   Featured Project Heading  */}
                <div>
                    <h2 className="uppercase font-semibold text-[20px] text-primary">Featured Project</h2>
                    <h1 className="text-black font-bold text-[30px] mt-4 leading-normal">We provide the Perfect Solution <br/>  to your business growth</h1>
                </div>
                
            {/* Feature Project body   */}
            
            <div className="grid  lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-12 mt-[50px]">
                {
                   featuredProject.map((item)=> {
                       return(
                           <div key={item.id}>
                              <Link href={item.live}>
                                  <div className="overflow-hidden rounded-md mb-6">
                                      <img src={item.image} alt={item.title} className="hover:scale-110 w-full object-cover transition-all duration-300 " />
                                  </div>
                              </Link>
                               <p>{item.title}</p>
                           </div>
                       )
                   })
                }
            </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
