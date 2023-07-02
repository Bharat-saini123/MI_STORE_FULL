import React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";

const Home = () => {
 const data={
  img1:"images/shop1.jpg",
  img2:"images/shop2.jpg",
  img3:"images/shop3.jpg",
  img4:"images/shop4.jpg",
  img5:"images/shop5.jpg",
  img6:"//i03.appmifile.com/450_operator_in/15/06/2023/bbb1be46c454041547d893a5f3c8777c.jpg",
  img7:"//i03.appmifile.com/388_operator_in/31/05/2023/a0a13f440b52756055f76ddf93d29874.jpg",
  img8:"//i03.appmifile.com/103_operator_in/17/04/2023/86708c21f1bc3aaa93f065a698ea1210.gif",
  img9:"//i03.appmifile.com/408_operator_in/04/05/2023/80f520d19ee75be374d3a071acf3a185.gif"
 }
  return (
    <div className="main-home">
      <figure style={{ width: "100%", height: "50rem" }}>
        <img
          src="//i03.appmifile.com/531_operator_in/21/06/2023/d058f4f2c128edd618a479eab159c777.jpg"
          alt="redmi A2"
          loading="lazy"
          style={{ width: "100%", height: "100%" }}
        />
      </figure>

        <Header1 data={data}/>

        <Header2 data={data}/>

        {/* <figure className="grid-home-box"  style={{width:"100%",height:"100%"}} ><img src="images/shop4.jpg" alt="" style={{width:"100%",height:"100%"}}/></figure> */}
       
      </div>
  
  );
};

export default Home;
