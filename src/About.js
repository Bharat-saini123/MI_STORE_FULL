import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillFolderFill } from "react-icons/bs";
import { AiFillSetting ,AiOutlineLogout,AiOutlineUser } from "react-icons/ai";
import { useRef } from "react";
import { AppContext } from "./UseContext";


const About = () => {
  const {state,dispatch}=useContext(AppContext);
  const inputRef=useRef(null);
const [myImage,setMyImage]=useState("")

  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "",
    image:"",
  
  });

  const aboutFunction = async () => {
    try {
      const response = await fetch("/about", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log(data)
      setInput({
        ...input,
        username: data.username,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        image:data.image,
      });
      if (response.status === 408) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setInput({ ...input, [name]: value });
  };
  useEffect(() => {
    aboutFunction();
  }, []);


  const updateAboutFunction=async()=>{
const username=input.username;
const lastname=input.lastname;
const email=input.email;
const gender=input.gender;
const phone=input.phone



try{
const resoponse=await fetch("/about",{
  method:"put",
  headers:{
   
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
   username:username,
   lastname:lastname,
   email:email,
   phone:phone,
   gender:gender,
image:myImage,

  })
})
const data=await resoponse.json();
if(resoponse.status===200){
  window.alert("you save data")
  
}

}catch(error){
  console.log(error)
}

  }

const inputChanged=(e)=>{
  
const reader=new FileReader();
reader.readAsDataURL(e.target.files[0]);
reader.onload=()=>{


  setMyImage(...myImage,reader.result)
 
}

}
 
const clickEventByRef=()=>{
inputRef.current.click()
}

const deleteAboutFunction=async()=>{
try{
const response=await fetch("/about",{
  method:"delete",
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json",

  },credentials:"include"
})

const data=await response.json();
if(response.status===200){
  window.alert("you sucessful deleted Account")
  navigate("/signup",{replace:true})
  dispatch({type:"USER",payload:false})
}
}catch(error){
  console.log(error)
}

}


  return (
    <div className="main-about">
      <div className="main-box-about">
        <div className="main-grid-box-about">
          <div className="box-1 grid-box-about">
            <div className="grid-box-about-mains">
              <div className="box-1-abouts box-1-abouts" style={{padding:"1rem"}}>
        <div className="image" onClick={clickEventByRef}>
{
  myImage==""||myImage==null?<div className="user-icon"> <AiOutlineUser style={{fontSize:"10rem",cursor:"pointer"}} className="my-icon"/>   <div  className="image-about"> <img src={input.image} alt=""  style={{width:"12rem",height:"12rem",borderRadius:"50%",cursor:"pointer"}} className="image-my"/></div></div>:  <img src={myImage} alt="" style={{width:"10rem",height:"10rem",borderRadius:"50%",cursor:"pointer"}} className="my-image"/>
} 

          <input type="file" onChange={inputChanged} ref={inputRef} style={{display:"none"}}/>

  
  
    
        </div>
                    <p style={{textAlign:"center",fontSize:"1.5rem"}}>Hii</p>
                     <h2 style={{textAlign:"center"}}>{input.username}</h2>
              </div>
              <div className="box-2-abouts">
              <h4 style={{fontSize:"2rem",color:"gray",textTransform:"uppercase",margin:"1rem",padding:"1rem"}}> <span><BsFillFolderFill style={{marginRight:"3rem",color:"blue"}}/></span>my orders</h4>
<hr />
<h4 style={{fontSize:"2rem",color:"gray",textTransform:"uppercase",margin:"1rem",padding:"1rem"}}> <span><AiFillSetting style={{marginRight:"3rem",color:"blue"}}/></span>Account Setting</h4>
<p style={{fontSize:"1.5rem",margin:"2rem",fontWeight:"400",fontFamily:"sans-serif",textTransform:"capitalize",marginLeft:"7rem"}}>Profile Information</p>
<p style={{fontSize:"1.5rem",margin:"2rem",fontWeight:"400",fontFamily:"sans-serif",textTransform:"capitalize",marginLeft:"7rem"}}>Manage Address</p>
<p style={{fontSize:"1.5rem",margin:"2rem",fontWeight:"400",fontFamily:"sans-serif",textTransform:"capitalize",marginLeft:"7rem"}}>PAN card Information</p>
<hr />
<h4 style={{fontSize:"2rem",color:"gray",textTransform:"uppercase",margin:"1rem",padding:"1rem"}}> <span><AiFillSetting style={{marginRight:"3rem",color:"blue"}}/></span>PAYMENTS</h4>
<p style={{fontSize:"1.5rem",margin:"2rem",fontWeight:"400",fontFamily:"sans-serif",textTransform:"capitalize",marginLeft:"7rem"}}>Gift Cards</p>
<p style={{fontSize:"1.5rem",margin:"2rem",fontWeight:"400",fontFamily:"sans-serif",textTransform:"capitalize",marginLeft:"7rem"}}>Saved Upi</p>
<p style={{fontSize:"1.5rem",margin:"2rem",fontWeight:"400",fontFamily:"sans-serif",textTransform:"capitalize",marginLeft:"7rem"}}>Saved Cards</p>
<hr />
<h4 style={{fontSize:"2rem",color:"gray",textTransform:"uppercase",margin:"1rem",padding:"1rem"}}> <span><AiFillSetting style={{marginRight:"3rem",color:"blue"}}/></span>MY STUFF</h4>
<p style={{fontSize:"1.5rem",margin:"2rem",fontWeight:"400",fontFamily:"sans-serif",textTransform:"capitalize",marginLeft:"7rem"}}>My coupons</p>
<p style={{fontSize:"1.5rem",margin:"2rem",fontWeight:"400",fontFamily:"sans-serif",textTransform:"capitalize",marginLeft:"7rem"}}>My Reviews & rating</p>
<p style={{fontSize:"1.5rem",margin:"2rem",fontWeight:"400",fontFamily:"sans-serif",textTransform:"capitalize",marginLeft:"7rem"}}>All notification</p>
<p style={{fontSize:"1.5rem",margin:"2rem",fontWeight:"400",fontFamily:"sans-serif",textTransform:"capitalize",marginLeft:"7rem"}}>My Wishlist</p>
<hr />
<h4 style={{fontSize:"2rem",color:"gray",textTransform:"uppercase",margin:"1rem",padding:"1rem"}}> <span><AiOutlineLogout style={{marginRight:"3rem",color:"blue",cursor:"pointer"}}/></span>Logout</h4>
<button
            type="button"
            class="btn btn-primary bounce-top shake-horizontal"
            style={{ fontSize: "2rem", padding:'0.3rem 1rem',margin:"1.5rem"}}
            onClick={deleteAboutFunction}
          >
           Delete Account
          </button>
              </div>

              
            </div>
          </div>
          <div className="box-2 grid-box-about">
            <div className="about-grid-box-content">
              <div
                className="box-1-grid-about about-grid-input"
                style={{ padding: "2rem" }}
              >
                <div
                  className="heading-about-input"
                  style={{
                    fontSize: "2.5rem",
                    textTransform: "capitalize",
                    margin: "1rem",
                  }}
                >
                  Personal information
                </div>
                <div>
                  <input
                    type="text"
                    value={input.username}
                    onChange={handleInput}
                    placeholder="Firstname"
                    name="username"
                    id="username"
                    style={{
                      width: "30rem",
                      height: "5rem",
                      cursor: "pointer",
                      padding: "2rem",
                      fontSize: "1.5rem",
                      outline: "none",
                      border: "none",
                      backgroundColor: "#ededed",
                    }}
                  />

                  <input
                    type="text"
                    value={input.lastname}
                    onChange={handleInput}
                    placeholder="lastname"
                   
                    name="lastname"
                    id="lastname"
                    style={{
                      width: "30rem",
                      height: "5rem",
                      cursor: "pointer",
                      padding: "2rem",
                      fontSize: "1.5rem",
                      outline: "none",
                      border: "none",
                      marginLeft: "2rem",
                      backgroundColor: "#ededed",
                      
                    }}
                  />
                 
                </div>
              </div>

              <div
                className="box-2-grid-about about-grid-input"
                style={{ padding: "2rem" }}
              >
                <div
                  className="heading-about-input"
                  style={{
                    fontSize: "1.5rem",
                    textTransform: "capitalize",
                    margin: "1rem",
                    color: "gray",
                  }}
                >
                  your gender
                </div>
                <div
                  className="radio-button"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <input
                    type="radio"
                    value="Male"
                    onChange={handleInput}
                    name="gender"
                    id="male"
                    style={{ margin: "1rem", cursor: "pointer" }}
                  />
                  <label
                    htmlFor="male"
                    style={{ fontSize: "1.5rem", cursor: "pointer" }}
                  >
                    Male
                  </label>

                  <input
                    type="radio"
                    value="Female"
                    onChange={handleInput}
                    name="gender"
                    id="female"
                    style={{
                      marginLeft: "2rem",
                      margin: "1rem",
                      cursor: "pointer",
                    }}
                  />
                  <label
                    htmlFor="female"
                    style={{ fontSize: "1.5rem", cursor: "pointer" }}
                  >
                    Female
                  </label>
                </div>
              </div>
              <div
                className="box-3-grid-about about-grid-input"
                style={{ padding: "2rem" }}
              >
                <div
                  className="heading-about-input"
                  style={{
                    fontSize: "2.5rem",
                    textTransform: "capitalize",
                    margin: "1rem",
                  }}
                >
                  Email Address
                </div>
                <div>
                  <input
                    type="email"
                    value={input.email}
                    onChange={handleInput}
                    placeholder="Email"
                    name="email"
                    id="email"
                    style={{
                      width: "30rem",
                      height: "5rem",
                      cursor: "pointer",
                      padding: "2rem",
                      fontSize: "1.5rem",
                      outline: "none",
                      border: "none",
                      backgroundColor: "#ededed",
                    }}
                  />
                </div>
              </div>
              <div
                className="box-4-grid-about about-grid-input"
                style={{ padding: "2rem" }}
              >
                <div
                  className="heading-about-input"
                  style={{
                    fontSize: "2.5rem",
                    textTransform: "capitalize",
                    margin: "1rem",
                  }}
                >
                  Phone Number
                </div>
                <div>
                  <input
                    type="text"
                    value={input.phone}
                    onChange={handleInput}
                    placeholder="Phone Number"
                    name="phone"
                    id="phone"
                    style={{
                      width: "30rem",
                      height: "5rem",
                      cursor: "pointer",
                      padding: "2rem",
                      fontSize: "1.5rem",
                      outline: "none",
                      border: "none",
                      backgroundColor: "#ededed",
                    }}
                  />
                </div>
              </div>
              <div
                className="box-5-grid-about about-grid-input"
                style={{ padding: "2rem" }}
              >
                <h3>FAQs</h3>
                <p style={{ fontWeight: "700", fontSize: "1.3rem" }}>
                  What happens when I update my email address (or mobile
                  number)?
                </p>
                <p style={{ fontSize: "1.3rem" }}>
                  Your login email id (or mobile number) changes, likewise.
                  You'll receive all your account related communication on your
                  updated email address (or mobile number).
                </p>
                <p style={{ fontWeight: "700", fontSize: "1.3rem" }}>
                  When will my Flipkart account be updated with the new email
                  address (or mobile number)?
                </p>
                <p style={{ fontSize: "1.3rem" }}>
                  It happens as soon as you confirm the verification code sent
                  to your email (or mobile) and save the changes.
                </p>
                <p style={{ fontWeight: "700", fontSize: "1.3rem" }}>
                  What happens to my existing Mi account when I update my
                  email address (or mobile number)?
                </p>
                <p style={{ fontSize: "1.3rem" }}>
                  Updating your email address (or mobile number) doesn't
                  invalidate your account. Your account remains fully
                  functional. You'll continue seeing your Order history, saved
                  information and personal details.
                </p>
                <p style={{ fontWeight: "700", fontSize: "1.3rem" }}>
                  Does my Seller account get affected when I update my email
                  address?
                </p>
                <p style={{ fontSize: "1.3rem" }}>
                  Mi Store has a 'single sign-on' policy. Any changes will
                  reflect in your Seller account also.
                </p>
                <button
            type="button"
            class="btn btn-primary bounce-top shake-horizontal"
            style={{ fontSize: "2rem", padding:'0.3rem 1rem',margin:"1.5rem"}}
            onClick={updateAboutFunction}
          >
           Save
          </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
