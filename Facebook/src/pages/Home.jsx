import { NavLink } from "react-router-dom";
import Login from "./Login";
import logo from "../Images/4lCu2zih0ca.svg"

const Home = ()=>{
    return(
        <>
    <div className="outer">
    <div className="homeleft">
        <img src={logo} alt="facebook logo"></img>
         <p>FaceBook helps you connect and share with the people in your life.</p>
    </div>
     <div className="homeright">
        <form action="">
        <input type="text" placeholder="Email address or phone number"></input>
        <input type="password" placeholder="Password"></input>
        <button><NavLink to={"/login"}>Login</NavLink></button>
        <NavLink to={"/forgottenpassword"}>forgotten password?</NavLink>
        <button><NavLink to={"/createaccount"}>Create new account</NavLink></button>
        <hr></hr>
        <p><NavLink to={"/createpage"}>Create Page</NavLink>for a celebrity, brand or business.</p>

        </form>
         
     </div>
     </div>
        </>
    )
}

export default Home;