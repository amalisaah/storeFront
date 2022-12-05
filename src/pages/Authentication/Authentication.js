import React, {useEffect, useState} from "react";
import {Routes,Route} from 'react-router-dom'
// import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";


const  Authentication = ()=> {

    const [value,setValue]=useState({});
    function handleChange(e){
        const name=e.target.name;
        setValue(prev=>({...prev,[name]:e.target.value}))
        
        if(error){
            const isValid=!e.target.validity.patternMismatch
            isValid && setError(false)
        }
        
    }

    const [error,setError]=useState(false);
    // const ref = useRef();
    function handleBlur(e){
        if (e.target.validity.patternMismatch){
            // ref.current.focus();
            setError(true);
        } 
        
    }

    function changeBackground(){
        const id=document.getElementById('signP');
        if(id){
            const images=["bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg","bg6.jpg","bg7.jpg"]
            const index = Math.floor((Math.random() * 7));
            const src=process.env.PUBLIC_URL + "/images/";
            const url=`url(${src}${images[index]})`
            id.style.backgroundImage=url;
        }
        
    }
    useEffect(()=>{
        const intervalId=setInterval(() => {
            changeBackground();    
        }, 5000);
        return ()=>{clearInterval(intervalId)}
        
    })

    return (
        <Routes>
            <Route path='/signup' element={<SignUp value={value} handleChange={handleChange} handleBlur={handleBlur} error={error} />} />
            {/* <Route index element={<Login />} /> */}
        </Routes>
    )
};


export default Authentication