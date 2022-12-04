import React from "react";
import './Password.css';

const  Password = ()=> {
    return (
        <>
        <main className='passwd'>
        <div className="logo">Storefront</div>
            <div className='signUp password'>
                <h1>change password</h1>
                <form className='' action="" method="" automcomplete='on' >
                    <div className='inputBox'>
                        <label for="pwd">New Password</label><br/>
                        <input type="password" id="pwd" name="pwd" required /><br/>
                    </div>
                    <div className='inputBox'>
                        <label for="Confirmpwd">Confirm Password</label><br/>
                        <input type="password" id="Confirmpwd" name="pwd" required /><br/>
                    </div>

                    {/* <div className='loginSubmit'> */}
                        {/* <button> <a href='' >Forgot Password</a> </button> */}
                        <input type="submit" value="Save" required />
                    {/* </div> */}
                    
                </form>
            </div>
        </main>
        </>
    )
};


export default Password