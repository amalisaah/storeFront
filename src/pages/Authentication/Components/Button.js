import React from "react";
import { Link } from "react-router-dom";

const  Button = (props)=> {
    return (
        <>
            <button className="font-semibold leading-5 h-12 rounded-lg" > <Link to={props.link} className='leading-5 font-semibold text-inherit' target={props.target}>{props.value}</Link> </button>
        </>
    )
};


export default Button