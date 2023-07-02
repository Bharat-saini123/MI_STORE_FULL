import React from 'react'

const Header2 = ({data}) => {
  return (
    <>
<div id="carouselExampleRide" class="carousel slide" data-bs-ride="true" style={{margin:"3rem 0rem"}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={data.img6} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={data.img7} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={data.img8} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={data.img9} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Header2