import React, {useEffect, useState} from "react";
import {Routes,Route} from 'react-router-dom'
import Cmail from "./Cmail/Cmail";
import Login from "./Login/Login";
import Password from "./Password/Password";
import SignUp from "./SignUp/SignUp";


const  Authentication = ()=> {

    /*PATTERN*/
    // const pattern={ mail:'^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$',
    //                 pwd:"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
    //             }
    const pattern={ mail:"'^[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]{2,3})+$'",
                    // pwd:"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                }

    /*CHANGE FORM BTN PERSONAL AND BUSINESS*/
    const [personal,setPersonal]=useState(true)
    function changeForm(){
        setPersonal(prev=>!prev);
        setValue({})
    }

    /*SET VALID VALUES IN FORM INPUT*/
    const [value,setValue]=useState({});
    function handleChange(e){
        const name=e.target.name;
        setValue(prev=>({...prev,[name]:e.target.value}))
        
        if(error){
            const isValid=!e.target.validity.patternMismatch
            isValid && setError(false)
        }
        
    }

    /*CHECK ERROR ON BLUR*/
    const [error,setError]=useState(false);
    // const ref = useRef();
    function handleBlur(e){
        if (e.target.validity.patternMismatch){
            // ref.current.focus();
            setError(true);
        } 
        
    }


    /*CHANGE TEST AND BACKGROUND*/
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
        }, 15000);
        return ()=>{clearInterval(intervalId)}
        
    },[])

    /*HANDLE FORM SUBMISSION*/
    function handleSubmit(e){
        e.preventDefault();
        if(!error){
            console.log(value)
            setValue({})
        }
        
    }

    /*VERIFY PASSWORD CHANGE*/
    // const[verify,setVerify]=useState({rec:'24568',inp:''})
    // function verification(val){
    //     setVerify(prev=>({...prev,inp:val}));
        
    // }

    return (
        <Routes>
            <Route path='/signup' element={<SignUp value={value} pattern={pattern} handleChange={handleChange} handleBlur={handleBlur} error={error} personal={personal} changeForm={changeForm} handleSubmit={handleSubmit} />} />
            <Route index element={<Login value={value} pattern={pattern} handleChange={handleChange} handleBlur={handleBlur} error={error} handleSubmit={handleSubmit}  />} />
            <Route path="/login" element={<Login value={value} pattern={pattern} handleChange={handleChange} handleBlur={handleBlur} error={error} handleSubmit={handleSubmit} />} />
            <Route path='/cmail' element={<Cmail/> } />
            <Route path='/changepassword' element={<Password value={value} pattern={pattern} handleChange={handleChange} handleBlur={handleBlur} error={error} handleSubmit={handleSubmit}/>} />
        </Routes>
    )
};


export default Authentication