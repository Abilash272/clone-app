import React from "react";
import "./SignInPage.css"

function SignInPage() {
    return (
        <div className="login">
            <div className="login-content">
                <div>
                    <img src={require('../../Components/images/Logonetflix.png')} className="loginHeaderLogo" alt="Logo" />
                </div>
                <div className="loginShade">
                    <form className="loginPopup">
                        <h2>Sign In</h2>
                        <input required className='loginInputbox' type="text" placeholder='Email or phone number' />
                        <input required className='loginInputbox' type="password" placeholder='Password' />
                        <button type='submit'>Sign In</button>
                        <span className='loginWrongPass'>wrongEntry !</span>
                        <div className="loginSavebox">
                            <input type="checkbox" id='Remember' />
                            <label name='Remember' htmlFor='Remember' >Remember me</label>
                        </div>
                        <p>Login with Facebook</p>
                        <h4>New to Netflix?
                            Sign up now.</h4>
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. </p>
                    </form>
                </div>
            </div>
            <div className="loginFooter">
                <div className="loginContainer">
                    <h4>Questions? Call 000-000-000-0000 </h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>FAQ</td>
                                <td>Help Centre</td>
                                <td>Terms of Use</td>
                                <td>Privacy</td>
                            </tr>
                            <tr>
                                <td>Cookie Preferences</td>
                                <td>Corporate Information</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SignInPage;