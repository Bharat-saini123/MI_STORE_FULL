import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyApis from './MyApis'; 

const PhoneAbout = () => {
    const [data,setData]=useState(MyApis)

    const {name}=useParams();
   
  const   myFunction=(name)=>{
const oneData=MyApis.filter((currentElement)=>{
    console.log(name)
return currentElement.name===name 
})
setData(oneData)
  }
useEffect(()=>{

window.scrollTo(0,0)

    myFunction(name)
},[])
  return (<>
   
<div className='main-about-phone-photo-section' style={{paddingTop:"8rem",backgroundColor:"black"}}>
   
   {
  data.map((currentElement)=>{

return (
    <div className='photo-about-mains'>
 <div className="first-photo-about-mains">
  <figure style={{width:"100%",height:"100vh"}}><img src={currentElement.front.img1} alt="" style={{width:"100%",height:"100%",}}/></figure>
 </div>
 <div>
       <div className="photos-about-mains-total">
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"2rem"}}>
<figure style={{width:"20rem",height:"20rem"}}><img src={currentElement.abtMainImg[0].img1} alt=""  style={{width:"100%",height:"100%"}}/></figure>
<figure style={{width:"20rem",height:"20rem"}}><img src={currentElement.abtMainImg[0].img2} alt="" style={{width:"100%",height:"100%"}}/></figure>
<figure style={{width:"20rem",height:"20rem"}}><img src={currentElement.abtMainImg[0].img3} alt="" style={{width:"100%",height:"100%"}}/></figure>
</div>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"2rem"}}>
<figure style={{width:"20rem",height:"20rem"}}> <img src={currentElement.abtMainImg[0].img4} alt="" style={{width:"100%",height:"100%"}}/></figure>
<figure style={{width:"20rem",height:"20rem"}}><img src={currentElement.abtMainImg[0].img5} alt="" style={{width:"100%",height:"100%"}}/></figure>
<figure style={{width:"20rem",height:"20rem"}}><img src={currentElement.abtMainImg[0].img6} alt="" style={{width:"100%",height:"100%"}}/></figure>
</div>
</div>
       </div>
    </div>
)
    })
   }
   </div> </>
  )
}

export default PhoneAbout