import React from "react";
import Button from '../Components/Button'

const  Form = ()=> {
    return (
        <>
            <form className='' action="" method="" autoComplete='on' >
                        <div className='nameIn flex justify-between'>
                            <div className='inputBox'>
                                <label className="font-light leading-5 text-left" htmlFor="fname">First Name</label><br/>
                                <input type="text" id="fname" name="fname" required/><br/>
                            </div>
                            <div className='inputBox'>
                                <label className="font-light leading-5 text-left" htmlFor="lname">Last Name</label><br/>
                                <input type="text" id="lname" name="lname" required/><br/>
                            </div>
                        </div>

                        <div className='inputBox'>
                            <label className="font-light leading-5 text-left" htmlFor="email">Email</label><br/>
                            <input type="email" id="email" name="email" required/><br/>
                        </div>
                        <div className='inputBox'>
                            <label className="font-light leading-5 text-left" htmlFor="pwd">Password</label><br/>
                            <input type="password" id="pwd" name="pwd" required /><br/>
                        </div>

                        <Button/>
                        {/* <div className=''></div> */}
                        <p> Already A Member? <a href='#'>Log In</a> </p>
                    </form>
        </>
    )
};


export default Form