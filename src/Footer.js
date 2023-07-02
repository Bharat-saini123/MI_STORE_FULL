import React from 'react';
import { AiOutlineFacebook ,AiOutlineInstagram,AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
<footer className='footer'>
<div className="main-footer-box">
<div className="box-1-footer">
<h2 style={{marginBottom:"2rem",fontSize:"2.5rem",textTransform:"capitalize"}}>Support</h2>
<p>Online</p>
<p>customer Service</p>
<p>Shipping FAQ</p>
<p>Warranty</p>
<p>Mi Excahnge</p>
<p>Bulk Orders</p>
<p>User Guide</p>
<p>Laptop Driver</p>
<p>Mi Screen Protect</p>
<p>Mi Extended Warranty</p>
<p>Mi Completed Protect</p>
<p>Certification</p>
<p>Service center</p>


</div>
<div className="box-2-footer">
    <h2 style={{marginBottom:"2rem",fontSize:"2.5rem",textTransform:"capitalize"}}>Shop and Learn</h2>
    <p>Xiomi Phones</p>
    <p>Redmi phones</p>
    <p>tv's</p>
    <p>Laptop and Tablet</p>
    <p>Audio</p>
    <p>Lifestyle</p>
    <p>Smart home</p>
</div>
<div className="box-3-footer">
    <h2 style={{marginBottom:"2rem",fontSize:"2.5rem",textTransform:"capitalize"}}>Reatil Store</h2>
    <p>Mi Home</p>
    <p>Mi Authorized Store</p>
    <p>Mi store franchise</p>
</div>
<div className="box-4-footer">
    <h2 style={{marginBottom:"2rem",fontSize:"2.5rem",textTransform:"capitalize"}}>About Us</h2>
    <p>Xiomi</p>
    <p>privacy polocy</p>
    <p>user agreement</p>
   <p>integrity and compliance</p> 
   <p>Coprate in formation</p>
   <p>E-waste management</p>
   <p>in the press</p>
   <p>trust center</p>
   <p>culture</p>
  <p> smartphone Quailty</p>
  <p>tv quality</p>
  <p>Service quality</p>
</div>
<div className="box-5-footer">
<h2 style={{marginBottom:"2rem",fontSize:"2.5rem",textTransform:"capitalize"}}>Follow Mi</h2>   
<div className="icons" style={{color:"white"}}>
    <AiOutlineFacebook style={{fontSize:"4rem"}}/>
    < AiOutlineInstagram style={{fontSize:"4rem"}}/>
    <AiFillTwitterSquare style={{fontSize:"4rem"}}/>


</div>
</div>








<div className="box-6-footer" >
copyright &copy; 2010-{new Date().getFullYear()} Xiomi ,All rights reasearved
</div>
</div>


</footer>
  )
}

export default Footer