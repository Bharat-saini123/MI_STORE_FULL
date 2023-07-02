import React from 'react';
import TvApi from './TvAPi';
import { NavLink } from 'react-router-dom';

const Content2 = () => {
  return (
    <>
    <div className="grid-box-all-phone">
        {TvApi.map((currentElement, index) => {
          return (
            <NavLink
            
         to={`tvabout/${currentElement.name}`}
              key={index}
              
              className={"box-all-phone"}
              style={{
                outline: "none",
                color: "black",
                textDecoration: "none",
                backgroundColor: "#fff",
              }}
           >





              <span className="off">{currentElement.off} off</span>
              <div
                className="name"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                 placeContent:"center",
                 placeItems:"center",
                  padding: "2rem",
                  // border:"2px solid red"
                }}
            >
                <div>
                  <h2 style={{ fontSize: "2rem" }}>{currentElement.name}</h2>

                  <h3>
                    {" "}
                    <span style={{ fontWeight: "700" }}>
                      From<span> &#8377;</span> {currentElement.price}{" "}
                    </span>
                    <span
                      style={{
                        textDecoration: "line-through",
                        fontWeight: "100",
                        color: "gray",
                        fontSize: "1.3rem",
                      }}
                    >
                      <span> &#8377;</span>
                      {currentElement.cprice}
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
                    class="btn btn-outline-dark  bounce-top shake-horizontal"
                    style={{ fontSize: "1.5rem" }}
                  >
                    Learn More
                  </button>
                </div>
                <div>
                  <figure className="figure-phone">
                    <img src={currentElement.img} alt="" />
                  </figure>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  )
}

export default Content2