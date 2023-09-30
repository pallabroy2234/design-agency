import React from 'react';
import Button from "@/components/Button";


// bg-gradient-to-r from-yellow-200 via-green-200 to-green-300

// bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-200 via-green-100 to-gray-100


// bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-green-200 via-green-100 to-gray-100

const Hero = ({heroItem, brandList}) => {
    return (
        <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-200 via-green-100 to-gray-100  pt-[5em] pb-[2em]">
            {/* hero section  */}
            <div className="customContainer">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6  relative">
                    <div className="mb-10 lg:mb flex flex-col justify-center">
                        <h2 className="font-bold font-exo-pro  text-[32px] lg:text-[50px] mb-2 ">Increase Your <br/> Customers Loyalty <br/> and Satisfaction
                        </h2>
                        <p>We help businesses like yours earn more customers, standout from competitors, make more money</p>
                        <div className="mt-10">
                            <Button label="Get Started" className="py-4 px-10"/>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row justify-between gap-5">
                                <div className="w-[600px] h-auto">
                                    <img src={heroItem.image1} alt={heroItem.title} className="w-full h-full object-cover rounded-md"/>
                                </div>
                                <div>
                                    <img src={heroItem.image2} alt={heroItem.title} className="w-full h-full object-cover rounded-md"/>
                                </div>
                            
                            </div>
                            <div className="flex flex-row justify-between gap-5">
                                <div>
                                    <img src={heroItem.image3} alt={heroItem.title} className="w-full h-full object-cover rounded-md"/>
                                </div>
                                <div className="w-[300px]">
                                    <img src={heroItem.image4} alt={heroItem.title} className="w-full h-full object-cover rounded-md"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* brand list section */}
            <div className="bg-white py-8 mt-12">
                
                <div className="customContainer">
                    <div className="flex flex-row gap-8 items-center bg-white justify-between overflow-x-auto">
                        {
                            brandList.map((list) => {
                                return (
                                    <div key={list.id}>
                                        <img src={list.image} alt={list.name}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default Hero;
