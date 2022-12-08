import React from "react";
import './Password.css';
import Input from "../Components/Input";
import Button from "../Components/Button";
import OuterDiv from "../Components/OuterDiv";

const  Password = (props)=> {
    return (
        <>
        <main className='passwd'>
            <div className="logo">Storefront</div>
            <OuterDiv heading='change password' >
                <form className='' onSubmit={props.handleSubmit} >
                    <Input type="password" id="pwd" name="pwd" label='New Password' onChange={props.handleChange} value={props.value.pwd} onBlur={props.handleBlur} pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$' />
                    <Input type="password" id="Confirmpwd" name="pwd" label='Confirm Password' onChange={props.handleChange} value={props.value.pwd} onBlur={props.handleBlur}  />   
                    <Button value='save' link='../cmail'  />
                    
                </form>
            </OuterDiv>
        </main>
        </>
    )
};


export default Password