import React from "react";
import './Login.css';

const  Login = ()=> {
    return (
        <>
            <main className="sign login">

                <div className='signUp'>
                    <h1>Login</h1>
                    <form className='' action="" method="" automcomplete='on' >
                        {/* <div className='nameIn'>
                            <div className='inputBox'>
                                <label for="fname">First Name</label><br/>
                                <input type="text" id="fname" name="fname" required/><br/>
                            </div>
                            <div className='inputBox'>
                                <label for="lname">Last Name</label><br/>
                                <input type="text" id="lname" name="lname" required/><br/>
                            </div>
                        </div> */}

                        <div className='inputBox'>
                            <label for="email">Email</label><br/>
                            <input type="email" id="email" name="email" required/><br/>
                        </div>
                        <div className='inputBox'>
                            <label for="pwd">Password</label><br/>
                            <input type="password" id="pwd" name="pwd" required /><br/>
                        </div>

                        <div className='loginSubmit'>
                            <button> <a href='' >Forgot Password</a> </button>
                            <input type="submit" value="Create Account" required />
                        </div>
                        
                        <p> Not a member? <a href='#'>Sign up</a> </p>
                    </form>
                </div>

                <div className='signPic'>
                    {/* <img src={img1} alt="" />  */}
                    <div className='signLogo'>Storefront</div>
                    <div className='text'>Well created UI Design</div>
                </div>
            </main>
        </>
    )
};


export default Login