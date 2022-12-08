import React, { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

const  Profile = ()=> {
    const {user} = useContext(LoginContext)
    return (
        <>
            <h1 className='m-auto mt-14'>Welcome {user.name} to the Sanctum Sanctorum</h1>
        </>
    )
};


export default Profile