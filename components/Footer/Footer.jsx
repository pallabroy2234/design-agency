import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";
import Link from "next/link";


const socialIcon = [
    {
        id:1,
        icon: <BsFacebook size="24"/>
    },
    {
        id:2,
        icon: <BsTwitter size="24"/>
    },
    {
        id:3,
        icon: <AiFillLinkedin size="24"/>
    },
    {
        id:4,
        icon:<BsInstagram size="24"/>
    }
]


const quickLink =[
    {
        id:1,
        title: "Services"
    },
    {
        id:2,
        title: "Portfolio"
    },
    {
        id:2,
        title: "About Us"
    },
    {
        id:2,
        title: "Contact Us"
    }
]


import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gradient-to-l from-gray-700 via-gray-900 to-black pt-[75px] pb-[50px]">
         <div className="customContainer">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 text-white">
                  
                  <div className="flex flex-col gap-3">
                      <h2 className="uppercase text-[28px] font-bold font-exo-pro">WEB LOGO</h2>
                      <p className="text-[17px] ">Some footer text about the Agency. <br/> Just a little description to help people understand you better</p>
                      <div>
                          <ul className="flex flex-row gap-8 mt-3 flex-wrap">
                              {
                                  socialIcon.map((item)=> {
                                      return (
                                          <li key={item.id}>
                                              <Link href="#" className="w-[50px] h-[50px] flex items-center  justify-center bg-primary rounded-lg transition-all duration-300 hover:-translate-y-1.5">{item.icon}</Link>
                                          </li>
                                      )
                                  })
                              }
                          </ul>
                      </div>
                  </div>
                  
                  <div className="lg:flex lg:flex-col lg:items-center">
                      <h2 className="text-[17px]  font-exo-pro font-semibold">Quick Links</h2>
                      <ul className="flex flex-col  gap-5 font-exo-pro text-base mt-4">
                          {
                              quickLink.map((item)=> {
                                  return (
                                      <li key={item.id}>
                                          <Link href="#" className="hover:text-primary  block hover:translate-x-1.5 transition-all duration-300">{item.title}</Link>
                                      </li>
                                  )
                              })
                          }
                      </ul>
                  </div>
                  
                  <div className="lg:pl-[75px]">
                      <h2 className="font-exo-pro font-bold text-[20px]">Address</h2>
                      <p className="mt-3 font-exo-pro ">Design Agency Head Office. <br/> Airport Road <br/> United Arab Emirate</p>
                  </div>
              </div>
             <div className="mt-10">
                 <p className="text-white font-exo-pro text-[17px]">Copyright Design Agency 2023</p>
             </div>
         </div>
         
        </div>
    )
}
export default Footer
