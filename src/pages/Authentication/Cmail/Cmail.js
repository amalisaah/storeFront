import React from "react";
// import './Cmail.css';
import Logo from "../Components/Logo";

const  Cmail = ()=> {
    return (
        <>
            <main className='cmail'>
                <Logo />
                <div className='check m-auto'>
                    <h1 className='text-bgBlue mb-[3.2%] mt-[12%] '>Change password</h1>
                    <p className="text-2xl "> You should receive an email shortly</p>
                </div>
            </main>
        </>
    )
};


export default Cmail