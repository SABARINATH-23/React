import { NavLink } from "react-router-dom";
import logo from"../Images/4lCu2zih0ca1.svg"
import ForgottenAccount from "./ForgettenAccount";

const Login = ()=>{
    return(
        <>
            <div className="login">
                <div className="Logintop">
                    <img src={logo} alt="facebook logo"></img>    
                </div>   
                <div className="Loginbootom">
                        <p>Log in to Facebook</p>
                        <input type="text" placeholder="Email address or phone number"></input>
                        <input type="password" placeholder="Password"></input>
                        <button>Log in</button>
                        <p><NavLink to={<ForgottenAccount/>}>Forgotten account</NavLink> <NavLink to={''}>Sign up for Facebook</NavLink></p>

                </div> 
            </div>       
        </>
    )
}
export default Login;
