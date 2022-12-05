import React, {useState,useRef} from "react";
import Button from '../Components/Button';
import Input from "./Input";

const  Form = ({value,handleChange,handleBlur,error})=> {

    

    

      
    // console.log(error)
    return (
        
        <form className='' action="" method=""  >
            <div className='nameIn  flex justify-between '>
                <Input type="text" id="fname" name="fname" label='First Name' onChange={handleChange} value={value.fname} />
                <Input type="text" id="lname" name="lname"  label='Last Name' onChange={handleChange} value={value.lname} />    
            </div>
            {/* <Input type="text" id="name" name="name"  label='Business Name' onChange={handleChange} value={value.name} />  */}
            <Input type="email" id="email" name="email"  label='Email' onChange={handleChange} value={value.email} pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' onBlur={handleBlur}  />
            {error && <p role='alert' className='text-red-600' >input a valid email</p>}
            <Input type="password" id="pwd" name="pwd"  label='Password' onChange={handleChange} value={value.pwd} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" onBlur={handleBlur}  />
            <Button/>
            {/* <div className=''></div> */}
            <p> Already A Member? <a href='#'>Log In</a> </p>
        </form>
        
    )
};


export default Form