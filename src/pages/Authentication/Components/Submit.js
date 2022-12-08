
import React from "react";
// import { useNavigate } from "react-router";


const  Submit = (props)=> {

    // const navigate=useNavigate()
    return (
        <>
            
            <input type='submit' className="font-semibold leading-5 h-12 rounded-lg" onClick={props.handleSubmit} value={props.value} /> 
        </>
    )
};


export default Submit



