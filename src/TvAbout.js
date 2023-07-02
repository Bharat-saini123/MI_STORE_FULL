import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TvApi from './TvAPi';

const TvAbout = () => {
    const [data,setData]=useState(TvApi)

    const {name}=useParams();
   
  const   myFunction=(name)=>{
   console.log(name)
 
const oneData=TvApi.filter((currentElement)=>{
    console.log(name)
return currentElement.name===name
   
})
setData(oneData)
// console.log(data)
  }
useEffect(()=>{
  window.scrollTo(0,0)

    myFunction(name)
},[])
  return (<>
   
<div className='main-about-phone-photo-section' style={{marginTop:"8rem 0rem",backgroundColor:"black"}}>
   
   {
  data.map((currentElement)=>{

return (
    <div className='photo-about-mains' style={{marginTop:"8rem"}}>
 <div className="first-photo-about-mains">
  <figure style={{width:"100%",height:"100vh"}}><img src={currentElement.front.img1} alt="" style={{width:"100%",height:"100%",}}/></figure>
 </div>
 <div>

    
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
     <div style={{width:"100vw",height:"100vh"}}> <img src="https://i01.appmifile.com/webfile/globalimg/7/0A81CAE4-0179-F1E9-ADBF-8AA8D50208A1.jpg" class="d-block w-100" alt="..." style={{width:"100%",height:"100%"}}/></div>
    </div>
    <div className="carousel-item">
      <img src="https://i01.appmifile.com/webfile/globalimg/7/EDB00482-F534-419E-1DCA-C30F90631BBF.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i01.appmifile.com/webfile/globalimg/7/59295F81-DDB7-54D9-D900-91BAD83E459C.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       <div className="photos-about-mains-total">

<div><figure style={{width:"80vw",height:"100vh"}}><img src={currentElement.abtMainImg[0].img1} alt=""  style={{width:"100%",height:"100%"}}/></figure></div>
<div><figure style={{width:"80vw",height:"100vh"}}><img src={currentElement.abtMainImg[0].img2} alt="" style={{width:"100%",height:"100%"}}/></figure></div>
<div><figure style={{width:"80vw",height:"100vh"}}><img src={currentElement.abtMainImg[0].img3} alt="" style={{width:"100%",height:"100%"}}/></figure></div>


</div>
       </div>
    </div>
)
    })
   }
   </div> </>
  )
}



export default TvAbout