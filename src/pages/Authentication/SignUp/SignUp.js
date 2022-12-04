import React from "react";
import './SignUp.css';
// import img1 from '../resources/images/Desktop1.jpg'
import Button from '../Components/Button';
import Form from "../Components/Form";

const  SignUp = ()=> {
    return (
        <>
            <main className="sign flex justify-between h-screen">
                <div className='signPic relative bg-no-repeat bg-cover'>
                    {/* <img src={img1} alt="" />  */}
                    <div className='signLogo text-5xl font-semibold text-white text-left ml-3'>Storefront</div>
                    <div className='text absolute text-right'>Well created UI Design</div>
                </div>

                <div className='signUp m-auto'>
                    <h1 className="mt-0 leading-10">Sign up</h1>
                    <Form />
                </div>
            </main>
        </>
    )
};


export default SignUp