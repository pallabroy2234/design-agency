

const Testimonial = ({testimonialList}) => {
    return (
        <div className="customContainer my-[100px]">
        
        {/*  Heading  */}
            <div>
                <h3 className="font-exo-pro md:text-xl text-lg text-primary font-semibold uppercase">Testimonial List</h3>
                <h2 className="font-exo-pro md:text-3xl text-2xl font-bold my-3 capitalize">Better Agency/SEO Solution At Your Fingertips</h2>
            </div>
            
            <div className="mt-20">
                 <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 lg:gap-16 gap-10">
                  
                       {
                           testimonialList.map((item)=> {
                               return (
                                   <div key={item.id} className="shadow-lg rounded-lg p-8">
                                        <div className="w-[120px] h-[120px]  overflow-hidden mx-auto">
                                            <img src={item.image} alt={item.name} className="w-[120px] h-[120px] rounded-3xl object-cover "/>
                                        </div>
                                       <div className="text-center tracking-wider  mt-8">
                                           <p className="text-base">{item.msg}</p>
                                           <h2 className="font-exo-pro text-4xl font-bold my-4">{item.name}</h2>
                                           <h3 className="font-exo-pro text-2xl ">{item.designation}</h3>
                                       </div>
                                   </div>
                               )
                           })
                       }
               
                 </div>
            </div>
            
        </div>
    )
}
export default Testimonial
