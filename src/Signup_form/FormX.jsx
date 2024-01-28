import "./Formx.css"
import logo from "./Netflix_logo.png"
import { Link } from "react-router-dom";

function FormX() {
    return (
        <div id="BG">
            <div id="wrap">
                <div id="logo"><img src={logo} /></div>
                <div id="form">
                    <h3>Sign In</h3>
                    <div id="input">
                        <input type="text" placeholder="Email or phone number"></input>
                        <input type="password" placeholder="password"></input>
                    </div>
                    <div id="btnx">
                       <Link to={'/'}> <button>Sign In</button></Link>
                        <div id="btnx-botton">
                            <div>
                                <input type="checkbox" id="remember" ></input>
                                <label htmlFor="remember">Remember me</label>
                            </div>

                            <h5>Need help?</h5>
                        </div>

                    </div>
                 
                    <div id="form-bottom">
                        <h4><span>New to Netflix?</span> <Link to="/">Sign up now.</Link></h4>
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span>Learn more.</span> </p>
                    </div>

                </div>
                <div id="footerx">
                    <div id="footer-wrap">
                        <div><p>Questions? Call 000-800-919-1694</p></div>
                        <div id="footer-cont">
                            <li> <p>FAQ</p></li>
                            <li> <p>Help Centre</p></li>
                            <li> <p>Terms of Use</p></li>
                            <li> <p>Privacy</p></li>
                            <li> <p>Cookie Preferences</p></li>
                            <li> <p>Corporate Information</p></li>
                        </div>
                        <div id="select-button">
                            <select>
                                <option>English</option>
                            </select>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default FormX;