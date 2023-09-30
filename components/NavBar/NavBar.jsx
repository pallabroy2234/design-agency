"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import Button from "@/components/Button";
import {useCallback, useState} from "react";
import {FiMenu} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai";


const navLinks = [
    {
        id: 1,
        title: "Home",
        path: "/"
    }
    , {
        id: 2,
        title: "Team",
        path: "/team"
    }
    , {
        id: 3,
        title: "Services",
        path: "/services"
    },
    {
        id: 4,
        title: "Projects",
        path: "/projects"
    },
    {
        id: 5,
        title: "Testimonials",
        path: "/testimonials"
    }
]


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathName = usePathname();
    
    const handleToggle = useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen])
    
    return (
        
        <div>
            <div className="max-w-full mx-auto xl:px-[4em]  lg:px-[3em]  px-[1.5em]  flex flex-row items-center justify-between py-5  bg-white fixed top-0 left-0 right-0 z-50">
                <div>
                    <Link href="/"><h2 className="text-2xl font-bold">Design<span className="text-warning">Agency</span>
                    </h2></Link>
                </div>
                <div className="lg:block hidden">
                    
                    {/* large screen size => lg and lg's getter then (1024px) */}
                    <ul className="flex flex-row items-center  gap-8">
                        {
                            navLinks.map((link) => {
                                return (
                                    <li key={link.id}>
                                        <Link className={`font-semibold text-[16px] ${pathName === link.path ? "text-primary" : "text-black"}`} href={link.path}>{link.title} </Link>
                                    </li>
                                )
                            })
                        }
                        <li>
                            <Button label="Log In" type="button" outline/>
                        </li>
                        <li>
                            <Button label="Register" type="button"/>
                        </li>
                    </ul>
                </div>
                
                <div className="block  lg:hidden">
                    <div className="w-[40px] h-[40px] border-[2px] border-secondary flex items-center justify-center shadow-2xl shadow-secondary rounded-full" onClick={handleToggle}>
                        <FiMenu size={24}/>
                    </div>
                </div>
                
            </div>
            
            {/* small screen size => less than 1023px    */}
            <div className={`block lg:hidden  ${isOpen ? "bg-neutral-800/75 fixed  inset-0 z-50 transition-all duration-100 opacity-1" : "fixed bg-neutral-800/75 inset-0 opacity-0 z-49"}`}>
                <div className={`bg-white shadow-lg duration-300 z-50 transition-all fixed h-full  -right-0.5 bottom-0  top-0 w-[350px] p-8   ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="grid content-between min-h-[90vh]">
                        <div>
                            <div className="w-[40px] h-[40px] border-[2px] border-secondary  flex items-center justify-center shadow-2xl shadow-secondary rounded-full" onClick={()=> setIsOpen(!isOpen)}>
                                <AiOutlineClose size={24}/>
                            </div>
                            <ul className='flex flex-col gap-10 mt-10 text-[17px]'>
                                {
                                    navLinks.map((link)=> {
                                        return (
                                            <li key={link.id} className="relative">
                                                <Link href={`${link.path}`} className={` ${pathName === link.path ? "text-primary after:content-[''] after:absolute after:w-[50px] duration-300 transition-all   after:right-[75px] after:top-[10px]  after:h-[3px]  after:bg-primary": "text-black"}`}>{link.title}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        
                        <div className="">
                            <Button  label="Login"  className="w-full" outline/>
                            <Button  label="Register"  className="w-full mt-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default NavBar;
