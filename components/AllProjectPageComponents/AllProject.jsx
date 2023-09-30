import Link from "next/link";


const AllProject = ({allProject}) => {
    return (
        <div className="customContainer my-[100px]">
        {/*  Heading   */}
            <div>
                <h3 className="font-exo-pro text-primary md:text-xl text-lg uppercase font-semibold">All Project</h3>
                <h2 className="md:text-3xl  text-xl  font-exo-pro font-bold capitalize my-4">Better Agency/SEO Solution At Your Fingertips</h2>
            </div>
            
        {/*  body  */}
            <div className="grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-10 mt-14">
                {
                    allProject.map((item)=> {
                        return (
                            <div key={item.id}>
                                  <div className="overflow-hidden">
                                      <Link href={item.live}><img src={item.image} alt={item.remark}  className="w-full object-cover transition-all hover:scale-110 duration-300"/></Link>
                                  </div>
                                <p className="font-exo-pro mt-5 font-semibold">{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default AllProject
