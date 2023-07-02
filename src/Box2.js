import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Box2Api from './Box2Api';

const Box2 = () => {
  const [state,setState]=useState(Box2Api)
console.log(state)
  return (
    <>
    <div className="my-grid-boxes">
       {
    state.map((currentElement)=>{

  return <NavLink
          className="box-1 box-all-phone"
          style={{
            outline: "none",
            color: "black",
            textDecoration: "none",
            backgroundColor: "#fff",
          }}
          to={`tvabout/${currentElement.name}`}
        >
          <span className="off">{currentElement.off} off</span>
          <div
            className="name"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              placeItems: "center",
              padding: "4rem",
            }}
          >
            <div>
              <h2 style={{ fontSize: "3rem" }}>{currentElement.name}</h2>

              <h3>
               
                <span style={{ fontWeight: "700" }}>
                  From<span> &#8377;</span> {currentElement.price}
                </span>
                <span
                  style={{
                    textDecoration: "line-through",
                    fontWeight: "100",
                    color: "gray",
                    fontSize: "1.3rem",
                  }}
                >
                  <span> &#8377;</span>{currentElement.cprice}
                </span>
              </h3>
            </div>
            <div className="btn">
              <button
                type="button"
                class="btn btn-dark bounce-top shake-horizontal"
                style={{ fontSize: "1.5rem", margin: "1rem" }}
              >
                Buy Now
              </button>
              <button
                type="button"
                class="btn btn-outline-dark bounce-top shake-horizontal"
                style={{ fontSize: "1.5rem" }}
              >
                Learn More
              </button>
            </div>

            <div>
              <figure
                className="figure-phone"
                style={{ height: "40rem", width: "30rem" }}
              >
                <img
                  src={currentElement.img}
                  alt=""
                />
              </figure>
            </div>
          </div>
        </NavLink>




       })
       
      }
       
       
      </div>
    </>
  )
}

export default Box2