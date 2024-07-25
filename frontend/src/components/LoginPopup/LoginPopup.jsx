import React, {useState} from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("Login");
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => {setShowLogin(false)}} src={assets.cross_icon} alt="" />
        </div>

        <div className="login-popup-inputs">
            {currState === "Login"? <></> : <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Your Name"  id="" required/>}
            
            <input type="email" placeholder="Your Email" onChange={onChangeHandler} value={data.email} name="email" id="" required/>
            <input type="password" placeholder="Your Password" onChange={onChangeHandler} value={data.password} name="password" id="" required/>
        </div>

        <button>{currState === "Sign Up" ? "Create account":"Login"}</button>

        <div className="login-popup-condition">
            <input type="checkbox" name="" id="" required/>
            <p>By continuning , i agree to the terms of use & privacy policy .</p>
        </div>
        {currState === "Login"
        ? <p>Create a new account ? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account ? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
        
      </form>
    </div>
  );
};

export default LoginPopup;
