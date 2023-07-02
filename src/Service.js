import React from 'react'

const Service = () => {
  return (
   <>
   <div className="services-phone">
        <div
          className="content-phone"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "3rem 0rem",
            padding: "3rem",
          }}
        >
          <h2 style={{ fontSize: "4rem" }}>Redmi Series</h2>
          <p style={{ fontSize: "1.5rem" }}>The performance Racer</p>
          <button
            type="button"
            class="btn btn-dark bounce-top"
            style={{ fontSize: "1.5rem" }}
          >
            All redmi Phones
          </button>
        </div>
      </div>
      <div className="service-phone-grid-box">
        <div
          className=" service-grid-box1 service-grid-box"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <h2 style={{ fontSize: "2rem", textTransform: "capitalize" }}>
              Mi screen Protect
            </h2>
            <p style={{ fontSize: "1.5rem" }}>
              Screen Protection against Accidental, Liquid Damage Avail 2 Claims
              Per year
            </p>
          </div>
          <div>
            <figure>
              <img
                class="site-service__image"
                src="//i03.appmifile.com/170_operator_in/17/11/2022/82fedea7a46e8764e69fc726a8d76752!260x260.png"
                alt="Mi Screen Protect"
                loading="lazy"
                style={{ height: "15rem" }}
              />
            </figure>
          </div>
        </div>
        <div
          className="service-grid-box2 service-grid-box"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <h2 style={{ fontSize: "2rem", textTransform: "capitalize" }}>
              Mi Complete Protect
            </h2>
            <p style={{ fontSize: "1.5rem" }}>
              Safeguard your smartphone Against Accidental & Liquid Damages
            </p>
          </div>
          <div>
            <figure>
              <img
                class="site-service__image"
                src="//i03.appmifile.com/781_operator_in/08/12/2022/22fab0063071b5db457146f5b1324b76!260x260.jpg"
                alt="Mi Complete Protect"
                loading="lazy"
                style={{ height: "15rem" }}
              />
            </figure>
          </div>
        </div>
        <div
          className="service-grid-box3 service-grid-box"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <h2 style={{ fontSize: "2rem", textTransform: "capitalize" }}>
              Avail 2 Claims Per year
            </h2>
            <p style={{ fontSize: "1.5rem" }}>
              We are committed to provide the best quality at an honest price.
            </p>
          </div>
          <div>
            <figure>
              <img
                class="site-service__image"
                src="//i03.appmifile.com/534_operator_in/18/11/2022/7fd852381d5ea477ca830209bc26bef5!260x260.png"
                alt="Smartphone Quality"
                loading="lazy"
                style={{ height: "15rem" }}
              />
            </figure>
          </div>
        </div>
        <div
          className="service-grid-box4 service-grid-box"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <h2 style={{ fontSize: "2rem", textTransform: "capitalize" }}>
              Mi Exchange
            </h2>

            <p style={{ fontSize: "1.5rem" }}>
              Exchange your old Smart Phone in three simple steps
            </p>
          </div>
          <div>
            <figure>
              <img
                class="site-service__image"
                src="//i03.appmifile.com/164_operator_in/18/11/2022/499a4881d1d34e3c93ad0ef14b98d410!260x260.png"
                alt="Mi Exhange"
                loading="lazy"
                style={{ height: "15rem" }}
              />
            </figure>
          </div>
        </div>
      </div>
   </>
  )
}

export default Service