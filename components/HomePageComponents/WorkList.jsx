import {RiExchangeFundsLine} from "react-icons/ri";
import {PiHeartBreakThin} from "react-icons/pi";
import {LuShoppingBag} from "react-icons/lu";
import {HiArrowLongRight} from "react-icons/hi2";
import {BsEmojiSmile, BsFillPeopleFill} from "react-icons/bs";
import {BiLike} from "react-icons/bi";
import {IoScanCircleOutline} from "react-icons/io5";


// work list icon
const workListIcon = [
    {
        id: 1,
        icon: <RiExchangeFundsLine size={35}/>,
        
    },
    {
        id: 2,
        icon: <PiHeartBreakThin size="35"/>,
    },
    {
        id: 3,
        icon: <LuShoppingBag size="35"/>,
    }
]





const WorkList = ({workList ,statList}) => {
    
    
    const workListSubSection = [
        {
            id: 1,
            count: statList.followers,
            title: "Followers",
            icon: <BsFillPeopleFill size="50"/>
        },
        {
            id: 2,
            count: statList.solved,
            title: "Solved Problems",
            icon: <BiLike size="50"/>
        },
        {
            id: 3,
            count: statList.customers,
            title: "Happy Customers",
            icon: <BsEmojiSmile size="50"/>
        },
        {
            id: 4,
            count: statList.projects,
            title: "Projects",
            icon: <IoScanCircleOutline size="50"/>
        }
    ]
    
    const findIcon = (id) => {
        const iconList = workListIcon.find((item) => item.id === id)
        if (iconList) {
            return iconList
        }
        return {
            id: null,
            icon: <LuShoppingBag size="35"/>,
        }
    }
    
    return (
        <div className="my-[100px]">
            <div className="customContainer">
                {/* work list heading   */}
                <div>
                    <h4 className="font-medium uppercase text-primary text-[20px]">Work List</h4>
                    <h2 className="font-bold  font-exo-pro md:text-4xl  tracking-wider text-[26px] mt-3">We provide the Perfect Solution <br/> to your business growth
                    </h2>
                </div>
                
                {/* work list card section */}
                <div className="my-[6em]">
                    {/* card */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-14 justify-between">
                        {/* heading */}
                        {workList.map((item) => (
                            <div key={item.id}>
                                <div className="bg-secondary h-[75px] w-[75px] flex items-center justify-center rounded-lg ">
                                    {findIcon(item.id).icon}
                                </div>
                                {/* card body */}
                                <div className="mt-8">
                                    <h3 className="font-bold font-exo-pro tracking-wider  text-xl mb-5">{item.title}</h3>
                                    <p className="">{item.des}</p>
                                </div>
                                <div className="mt-7">
                                    <button type="button" className="block  text-[17px] group/item">Learn More <HiArrowLongRight size={24} className="inline-block ml-3 group-hover/item:translate-x-2 text-primary transition-all duration-300 "/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/*  WorkList subSection  */}
                
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10   md:gap-15">
                    
                    {
                        workListSubSection.map((item) => {
                            return (
                                <div key={item.id} className="shadow-lg  py-[50px] flex flex-col items-center justify-center rounded-2xl hover:-translate-y-2 transition-all duration-300 border-[2px] border-secondary  lg:max-w-[300px]  ">
                                    <div className="w-[85px] h-[85px] bg-secondary flex items-center justify-center mb-8 rounded-2xl">
                                        {item.icon}
                                    </div>
                                    <h2 className="text-[30px] font-semibold">{item.count}</h2>
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

export default WorkList;


