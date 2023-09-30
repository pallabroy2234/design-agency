import React from 'react'

const Services = ({services}) => {
    return (
        <div className="customContainer my-[100px]">
            {/* All services */}
            <div>
                  <h3 className="text-[21px] text-primary font-semibold uppercase">Our All Services</h3>
                  <h2 className="mt-2 sm:text-4xl text-lg  font-exo-pro font-bold capitalize">We Provide BestWeb design services</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 ">
                {
                    services.map((item)=> {
                        return (
                            <div key={item.id} className="shadow-lg rounded-lg p-8">
                                <div>
                                    <h2 className="font-exo-pro  md:text-3xl text-xl  font-bold mb-3 capitalize">{item.title}</h2>
                                    <p className="font-exo-pro text-base">{item.des}</p>
                                </div>
                                  <div className="grid md:grid-cols-2 gap-8 mt-10 overflow-hidden  ">
                                        <img src={item.image1} alt={item.tag} className="w-full rounded-lg object-cover"/>
                                        <img src={item.image3} alt={item.tag} className="w-full rounded-lg object-cover"/>
                                        <img src={item.image2} alt={item.tag} className="w-full rounded-lg object-cover "/>
                                        <img src={item.image4} alt={item.tag} className="w-full rounded-lg object-cover"/>
                                  </div>
                            </div>
                        )
                    })
                }
               
            
            </div>
        </div>
    )
}
export default Services
