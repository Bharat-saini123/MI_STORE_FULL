import React, { useEffect } from 'react';
import image from "./img/bg.jpg";
import img from "./img/shopping3.jpg"
import { BiUser } from "react-icons/bi";
import { AiFillLock,AiFillUnlock  } from "react-icons/ai";
import {TfiEmail  } from "react-icons/tfi";
import {LiaPhoneVolumeSolid  } from "react-icons/lia";
import { useState } from 'react';
import {useNavigate} from "react-router-dom"


const Signup = () => {
  const navigate=useNavigate();
  const [input,setInput]=useState({
    username:"",
    lastname:"",
    email:"",
    phone:"",
    password:"",
    confirmpassword:"",
  })
const handleInput=(event)=>{
 
const name=event.target.name;
const value=event.target.value;
setInput({...input,[name]:value})

}

const submitSignForm=async(e)=>{
 e.preventDefault();
 
  const {username,lastname,email,phone,password,confirmpassword}=input;
  console.log(input)
try{
  const response=await fetch("/signup",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      username:username,
      lastname:lastname,
      email:email,
      phone:phone,
      password:password,
      confirmpassword:confirmpassword,
    })
  })
const data=await response.json();
if(response.status===404){
  window.alert("please filled right data")
}
if(response.status===408){
  window.alert("your email already exit")
}
if(response.status===412){
  window.alert("password not match confirmpassword")
}
if(response.status===200){
  window.alert("you register sucessfully")

  setInput({
    username:"",
    lastname:"",
    email:"",
    phone:"",
    password:"",
    confirmpassword:"",
  })
  navigate("/login")
}


}catch(error){
console.log(error)
}

}
useEffect(()=>{
  window.scrollTo(0,0)
},[])

  return (
 
   <form className="kenburns-top" style={{backgroundImage:`url(${image})`,backgroundPosition:"cover",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"105vh",width:"100vw"}} method='POST' >

<div className="mai-form-signup">
  <div>
<div className="sign-up-form grid-box-sign-up tilt-in-fwd-tr" style={{backgroundImage:`url(${img})`,backgroundPosition:"cover",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%",width:"100%",backgroundBlendMode:"soft-light"}}>

<div className="grid-box-sign-1">
<div className="photo-icon">
<img src="https://www.freepnglogos.com/uploads/rocket-png/features-marketing-rocket-sales-and-marketing-6.png" width="60" alt="features marketing rocket sales and marketing" />
</div>


</div>

<div className="grid-box-sign-2">

<div className="username-input" style={{display:"flex",alignItems:"center",marginTop:"1rem"}}>
<label htmlFor="username"><BiUser style={{fontSize:"2.5rem",marginRight:"0.3rem",cursor:"pointer",color:"#fff"}}/></label>
<div style={{width:"30rem",height:"3rem"}}><input type="text" placeholder='First Name' name='username' autoComplete='off'id='username'  style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",padding:"0.3rem 0.9rem",fontSize:"1.5rem",border:"none"}} value={input.username} onChange={handleInput}/></div>
</div>
<div className="username-input" style={{display:"flex",alignItems:"center",marginTop:"1rem"}}>
<label htmlFor="lastname"><BiUser style={{fontSize:"2.5rem",marginRight:"0.3rem",cursor:"pointer",color:"#fff"}}/></label>
<div style={{width:"30rem",height:"3rem"}}><input type="text" placeholder='Last Name' name='lastname' autoComplete='off'id='lastname'  style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",padding:"0.3rem 0.9rem",fontSize:"1.5rem",border:"none"}} value={input.lastname} onChange={handleInput}/></div>
</div>
<div className="email-input" style={{display:"flex",alignItems:"center",marginTop:"1rem"}}>
<label htmlFor="email"><TfiEmail  style={{fontSize:"2.5rem",marginRight:"0.3rem",cursor:"pointer",color:"#fff"}}/></label>
<div style={{width:"30rem",height:"3rem"}}><input type="email" placeholder='Email' name='email' autoComplete='off'id='email'  style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",padding:"0.3rem 0.9rem",fontSize:"1.5rem",border:"none"}} value={input.email} onChange={handleInput}/></div>

</div>
<div className="phone-input" style={{display:"flex",alignItems:"center",marginTop:"1rem"}}>
<label htmlFor="phone">< LiaPhoneVolumeSolid  style={{fontSize:"2.5rem",marginRight:"0.3rem",cursor:"pointer",color:"#fff"}}/></label>
<div style={{width:"30rem",height:"3rem"}}><input type="text" placeholder='Phone Number' name='phone' autoComplete='off'id='phone'  style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",padding:"0.3rem 0.9rem",fontSize:"1.5rem",border:"none"}} value={input.phone} onChange={handleInput}/></div>
</div>

<div className="password-input" style={{display:"flex",alignItems:"center",marginTop:"1rem"}}>
<label htmlFor="password">< AiFillLock  style={{fontSize:"2.5rem",marginRight:"0.3rem",cursor:"pointer",color:"#fff"}}/></label>
<div style={{width:"30rem",height:"3rem"}}><input type="password" placeholder='Password' name='password' autoComplete='off'id='password'  style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",padding:"0.3rem 0.9rem",fontSize:"1.5rem",border:"none"}} value={input.password} onChange={handleInput}/></div>
</div>
<div className="cpassword-input" style={{display:"flex",alignItems:"center",marginTop:"1rem"}}>
<label htmlFor="confirmpassword">< AiFillUnlock   style={{fontSize:"2.5rem",marginRight:"0.3rem",cursor:"pointer",color:"#fff"}}/></label>
<div style={{width:"30rem",height:"3rem"}}><input type="password" placeholder='Confirmpassword' name='confirmpassword' autoComplete='off'id='confirmpassword'  style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",padding:"0.3rem 0.9rem",fontSize:"1.5rem",border:"none"}} value={input.confirmpassword} onChange={handleInput}/></div>
</div>


<div style={{width:"100%",padding:"2rem 2rem 2rem 4rem "}}><button type="button" class="btn btn-primary" style={{fontSize:"2rem",width:"100%"}} onClick={submitSignForm}>Sign Up</button></div>
</div>
</div>




</div>





</div>



   </form>
  )
}

export default Signup