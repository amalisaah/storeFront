
import React from "react";


const  Button = (props)=> {
    return (
        <>
            <button className="font-semibold leading-5 h-12 rounded-lg"> <a href={props.link} >Create Account</a> </button>
        </>
    )
};


export default Button



