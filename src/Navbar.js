import React, { useContext, useEffect } from 'react';
import {NavLink} from "react-router-dom";
import { AppContext } from './UseContext';

const Navbar = () => {
const {state,dispatch}=useContext(AppContext);
  const MyData=()=>{
if(state){
  return <>
   <li className="nav-item">
        <NavLink to={"/"} style={{textDecoration:"none",fontSize:"2rem",textTransform:"capitalize",cursor:"pointer",color:"black"}}  className={"nav"}>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={"/about"} style={{textDecoration:"none",fontSize:"2rem",textTransform:"capitalize",cursor:"pointer",color:"black"}}  className={"nav"}>About</NavLink>
        </li>
      
       
       
     

        <li className="nav-item">
<NavLink to={"/logout"} style={{textDecoration:"none",fontSize:"2rem",textTransform:"capitalize",cursor:"pointer",color:"black"}}  className={"nav"}>Logout</NavLink>
        </li>
  </>
}
else{
  return <>
  <li className="nav-item">
        <NavLink to={"/"} style={{textDecoration:"none",fontSize:"2rem",textTransform:"capitalize",cursor:"pointer",color:"black"}}  className={"nav"}>Home</NavLink>
        </li>
      
      
       
     
        <li className="nav-item">
<NavLink to={"/signup"} style={{textDecoration:"none",fontSize:"2rem",textTransform:"capitalize",cursor:"pointer",color:"black"}}  className={"nav"}>Sign Up</NavLink>
        </li>
        <li className="nav-item">
<NavLink to={"/login"} style={{textDecoration:"none",fontSize:"2rem",textTransform:"capitalize",cursor:"pointer",color:"black"}}  className={"nav"}>Login</NavLink>
        </li>
  
  
  </>
 
}


  }

  return (<>
  <nav className="navbar navbar-expand-lg bounce-top bounce-in-top " style={{padding:"2rem",position:"fixed",zIndex:"999",background:"white",width:"100vw",top:"0px"}}>
  <div className="container-fluid" style={{marginLeft:"5rem",marginRight:"2rem"}}>
<img src="https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-logo-logos-marcas-8.png" width="80" alt="xiaomi logo logos marcas" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{gap:"2rem",marginLeft:"3rem"}}>
        <li className="nav-item">
        <NavLink to={"/store"} style={{textDecoration:"none",fontSize:"2rem",textTransform:"capitalize",cursor:"pointer",color:"black"}} className={"nav"}>Store</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={"/phone"} style={{textDecoration:"none",fontSize:"2rem",textTransform:"capitalize",cursor:"pointer",color:"black"}}  className={"nav"}>phone</NavLink>
        </li>
        <li className="nav-item">
<NavLink to={"/tv"} style={{textDecoration:"none",fontSize:"2rem",textTransform:"capitalize",cursor:"pointer",color:"black"}}  className={"nav"}>tv</NavLink>
        </li>
       
       
      
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{marginRight:"5rem",gap:"2rem"}}>
       
       
      <MyData/>
      
      </ul>
     
    </div>
  </div>
</nav>
  </>
   
  )
}

export default Navbar