import React from 'react'
import Header1 from './Header1'
import Header2 from './Header2'


import Service from './Service';
import Content2 from './Content2';
import Box2 from './Box2';

const Tv = () => {
 const  data={
    img1:"//i03.appmifile.com/886_operator_in/23/04/2023/14d8b6b10a281be4c6fdb680e63e7a2b.jpg",
    img2:"//i03.appmifile.com/308_operator_in/23/04/2023/3ac5305ba062f0e13218c89978d07e09.jpg",
    img3:"//i03.appmifile.com/218_operator_in/14/04/2023/6d531b6395a0040b44a2403101bbaabd.jpg",
    img4:"//i03.appmifile.com/932_operator_in/04/05/2023/e8481c6655e3e6074b21015382c0241c.jpg",
    img5:"//i03.appmifile.com/251_operator_in/15/05/2023/a1108a58ac63ce6e20e47cb1ffa8a884.jpg",
    img6:"//i03.appmifile.com/450_operator_in/15/06/2023/bbb1be46c454041547d893a5f3c8777c.jpg",
    img7:"//i03.appmifile.com/388_operator_in/31/05/2023/a0a13f440b52756055f76ddf93d29874.jpg",
    img8:"//i03.appmifile.com/103_operator_in/17/04/2023/86708c21f1bc3aaa93f065a698ea1210.gif",
    img9:"//i03.appmifile.com/408_operator_in/04/05/2023/80f520d19ee75be374d3a071acf3a185.gif"
  }

  return (
 <div className="main-tv">
  <div>
  <Header1 data={data} />
  <div className='content-phone' style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"3rem 0rem"}}>
<h2 style={{fontSize:"4rem"}}>Xiomi Series</h2>
<p style={{fontSize:"1.5rem"}}>Be a Class Apart</p>
<button type="button" class="btn btn-dark bounce-top shake-horizontal" style={{fontSize:"1.5rem"}}>All Xiomi Tv</button>
</div>
<Header2 data={data}/>
<Box2 />
<Content2/>
<Box2 />
<Service/>

</div>

 </div>
  )
}

export default Tv