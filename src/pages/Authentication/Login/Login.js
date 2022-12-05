import React from "react";
import './Login.css';

const  Login = ()=> {
    return (
        <>
            <main className="sign login">

                <div className='signUp'>
                    <h1>Login</h1>
                    <form className='' action="" method="" automcomplete='on' >


                        {/* <div className='inputBox'>
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
                        </div> */}
                        {/* <Input type="email" id="email" name="email"  label='Email' onChange={handleChange} value={value.email} pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' onBlur={handleBlur}  />
                        {error && <p role='alert' className='text-red-600' >input a valid email</p>}
                        <Input type="password" id="pwd" name="pwd"  label='Password' onChange={handleChange} value={value.pwd} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" onBlur={handleBlur}  />
                        <Button/> */}
                        
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