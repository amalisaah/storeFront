
import React from "react";
import { Link } from "react-router-dom";


const  Button = (props)=> {
    return (
        <>
            {/* <button className="font-semibold leading-5 h-12 rounded-lg" onClick={props.handleSubmit}  > <Link to={props.link} target={props.target}>{props.value}</Link> </button> */}
            <input type='submit' className="font-semibold leading-5 h-12 rounded-lg" onClick={props.handleSubmit} value={props.value} /> 
        </>
    )
};


export default Button



