import React, {  useContext, useState } from "react";
import image from "./img/bg.jpg";
import img from "./img/shopping3.jpg";
import { BiUser } from "react-icons/bi";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./UseContext";


const Login = () => {
  const {state,dispatch}=useContext(AppContext);
  const navigate=useNavigate();
  const [input,setInput]=useState({
   
    email:"",
    password:"",
  })

  const  handleInput=(e)=>{
    e.preventDefault();
    const name=e.target.name;
    const value=e.target.value;
    setInput({...input,[name]:value});
  }
  const submitLogin=async()=>{
    const {email,password}=input;
    

    try{
      const response=await fetch("/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email:email,
          password:password
        })
      })
    
const data=await response.json();
console.log(data)
if(response.status===404){
window.alert("Please filled all the data")
}
if(response.status===410){
  window.alert("invalid user")
}
if(response.status===414){
  window.alert("invalid login")
}
if(response.status===200){
  window.alert("Successful Login")
  setInput({
    email:"",
    password:"",
  })
 
  navigate("/")
  dispatch({type:"USER",payload:true})
 
}
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div
      className="kenburns-top"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "cover",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "105vh",
        width: "100vw",
      }}
    >
      <div className="mai-form-signup">
        <div>
          
          <div
            className="sign-up-form grid-box-sign-up grid-box-sign-up-login tilt-in-fwd-tr"
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "cover",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "100%",
              width: "100%",
              backgroundBlendMode: "soft-light",
            }}
          >
             <div className="grid-box-sign-2">
              
             
              <div
                className="email-input"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <label htmlFor="email">
                  <TfiEmail
                    style={{
                      fontSize: "2.5rem",
                      marginRight: "0.3rem",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                  />
                </label>
                <div style={{ width: "30rem", height: "3rem" }}>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    id="email"
                    style={{
                      width: "100%",
                      height: "100%",
                      outline: "none",
                      cursor: "pointer",
                      padding: "0.3rem 0.9rem",
                      fontSize: "1.5rem",
                      border: "none",
                    }}
                    value={input.email}
                    onChange={handleInput}
                  />
                </div>
              </div>
              
              <div
                className="password-input"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <label htmlFor="password">
                  <AiFillLock
                    style={{
                      fontSize: "2.5rem",
                      marginRight: "0.3rem",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                  />
                </label>
                <div style={{ width: "30rem", height: "3rem" }}>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    id="password"
                    style={{
                      width: "100%",
                      height: "100%",
                      outline: "none",
                      cursor: "pointer",
                      padding: "0.3rem 0.9rem",
                      fontSize: "1.5rem",
                      border: "none",
                    }}
                    value={input.password}
                    onChange={handleInput}
                  />
                </div>
              </div>
             

              <div style={{ width: "100%", padding: "2rem 2rem 2rem 4rem " }}>
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ fontSize: "2rem", width: "100%" }}
                  onClick={submitLogin}
                >
                  Login 
                </button>
              </div>
            </div>
            <div className="grid-box-sign-1">
              <div className="photo-icon">
                <img
                  src="https://www.freepnglogos.com/uploads/rocket-png/features-marketing-rocket-sales-and-marketing-6.png"
                  width="60"
                  alt="features marketing rocket sales and marketing"
                />
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
