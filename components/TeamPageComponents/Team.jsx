import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";
import Link from "next/link";

const socialIcon = [
    {
        id:1,
        icon: <BsFacebook size="30"/>
    },
    {
        id:2,
        icon: <BsTwitter size="30"/>
    },
    {
        id:3,
        icon: <AiFillLinkedin size="30"/>
    }
]


const Team = ({teamList}) => {
    return (
        <div className="customContainer my-[100px]">
            <div>
                <h3 className="font-exo-pro text-[27px] font-semibold text-primary ">Our Team Member</h3>
                <h2 className="font-exo-pro text-[38px] font-bold capitalize mt-3">Check our awesome team members</h2>
            </div>
            
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8  bg-white">
                
                {
                    teamList.map((item) => {
                        return (
                            <div key={item.id} className="border-[1px] shadow-lg rounded-xl mt-28">
                                <div className="overflow-hidden group relative">
                                    <img src={item.image} alt={item.name} className="object-cover  w-full    max-h-[400px]"/>
                                     <span className="after:absolute after:bg-black/40 after:w-full after:bottom-0 after:h-0 after:left-0 group-hover:after:h-full after:duration-200 after:transition-all group-hover:after:transition-all group-hover:after:duration-300"></span>
                                    <ul className="text-white border-[1px] border-gray-300  absolute -bottom-16 group-hover:bottom-10 transition-all duration-300  right-1/4  flex flex-row items-center gap-5   odd: rounded-full  p-3">
                                        {
                                         socialIcon.map((item)=> {
                                             return (
                                                 <li className="even:border-x-[1px]   even:px-4 even:border-gray-400 ">
                                                     <Link href="#" className="">{item.icon}</Link>
                                                 </li>
                                             )
                                         })
                                        }
                                    </ul>
                                </div>
                                <div className="p-4">
                                       <h2 className="text-center my-5 font-exo-pro text-2xl font-bold">{item.name}</h2>
                                       <p className="font-exo-pro">{item.bio}</p>
                                </div>
                                
                            </div>
                        )
                    })
                }
                
            </div>
        </div>);
};

export default Team;

//grid md:grid-cols-3 lg:grid-cols-4  sm:grid-cols-2 grid-cols-1