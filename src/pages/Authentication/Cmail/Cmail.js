import React from "react";
import EmailDiv from "../Components/EmailDiv";
import Logo from "../Components/Logo";
import Input from "../Components/Input";
import Submit from "../Components/Submit";
import { useNavigate } from "react-router-dom";

const  Cmail = (props)=> {

    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        props.handleSubmit('');
        navigate('../changepassword')
    }

    return (
        <>
            <main className='cmail'>
                <Logo />
                <EmailDiv heading='Change password' text='You should receive an email shortly' />
                <form className='my-8 m-auto w-[35%]' onSubmit={handleSubmit}>
                    <Input type="email" id="email" name="email"  label='Email' onChange={props.handleChange} value={props.value.email} onBlur={props.handleBlur} pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'  />
                    <Submit value='send'/>
                </form>
            </main>
        </>
    )
};


export default Cmail