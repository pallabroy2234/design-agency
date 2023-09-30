import React from 'react';

const Button = ({type, label, outline ,className}) => {
    return (
        <>
            <button type={type} className={`rounded-md border-[1px] border-primary font-normal text-[16px] transition-all duration-300   px-6 py-2 ${className} ${outline ? "bg-transparent text-black hover:bg-primary hover:text-white" : "bg-primary text-white hover:bg-transparent hover:text-black"}`}>{label}</button>
        </>
    );
};

export default Button;
