import { NavLink } from "react-router-dom";
import Login from "./Login";
import logo from "../Images/4lCu2zih0ca.svg"

const Home = ()=>{
    return(
        <>
    <div className="outer">
      <div className="homeleft">
        <img src={logo} alt="facebook logo"></img>
         <p>Facebook helps you connect and share with the people in your life.</p>
         </div>
     <div className="homeright">
        <form action="">
            <div className="container-1">
        <input type="text" placeholder="Email address or phone number"></input>
        <input type="password" placeholder="Password"></input>
        <button className="btn1"><NavLink to={"/login"}>Login</NavLink></button>
        <hr></hr>
        <NavLink to={"/forgottenpassword"}>forgotten password?</NavLink>
        <button className="btn2"><NavLink to={"/createaccount"}>Create new account</NavLink></button>
        </div>
        <div className="container-2">
             <p><NavLink to={"/createpage"}>Create Page</NavLink> for a celebrity, brand or business.</p>
        </div>
        </form>
        
         
     </div>
     </div>
        </>
    )
}

export default Home;