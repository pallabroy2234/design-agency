import React from 'react'
import Button from "@/components/Button";

const Subscribe = () => {
    return (
        <div className="py-[100px]">
        <div className="customContainer">
            <div className="md:flex md:flex-col items-center justify-center text-center">
                <h3 className="text-[20px] font-semibold text-primary uppercase">SUBSCRIBE</h3>
                <h1 className="text-[25px] font-exo-pro md:text-[35px] font-bold mt-5 capitalize">Subscribe to get the latest <br/> news about us
                </h1>
                <p className="text-base text-gray-400 mt-3">Please drop your email below to get daily update about what we do</p>
                <div className="relative mt-8">
                    <input type="email" placeholder="Enter Your Email Address" className="input border-[1px] py-6 md:py-7 text-base pr-36 md:pr-48 placeholder:md:text-base text-ellipsis overflow-hidden border-black focus:outline-none w-full md:w-[500px]"/>
                    <button type="submit" className="absolute  bg-orange-500 hover:bg-orange-600 py-2 md:py-3 md:px-10  right-1.5 top-1 text-white px-6 rounded-lg">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Subscribe
