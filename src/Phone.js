import React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Box from "./Box";
import Content from "./Content";
import Service from "./Service";

const Phone = () => {
  const data = {
    img1: "https://i03.appmifile.com/226_operator_in/20/06/2023/6c301b921cd3beb5c2a8fc42be8f1c8f.jpg?f=webp",
    img2: "https://i03.appmifile.com/488_operator_in/22/06/2023/83b420652b452895c8e5d098c61bff1a.jpg?f=webp",
    img3: "https://i03.appmifile.com/981_operator_in/20/06/2023/5ae3127853610ac7b60dafe6d316cc52.jpg?f=webp",
    img4: "https://i03.appmifile.com/867_operator_in/15/06/2023/e01dcca4a4351b5acc067a3939db7601.jpg?f=webp",
    img5: "https://i03.appmifile.com/406_operator_in/07/06/2023/6e7c82c84f3b0022819049285bb3bc9f.jpg?f=webp",
    img6: "//i03.appmifile.com/141_operator_in/20/06/2023/6d8638e4ecf615ba80ea8c7b2bed021d.jpg",
    img7: "//i03.appmifile.com/746_operator_in/16/06/2023/6a75423c8edf965ed7a17cf483a09937.jpg",
    img8: "//i03.appmifile.com/859_operator_in/23/06/2023/8c2a809d304edfead26da108c77ef9ee.jpg",
    img9: "//i03.appmifile.com/161_operator_in/23/06/2023/1d845a0a2238c048b93845727513eac9.jpg",
  };

  return (
    <div className="main-phone">
      <div className="header-phone">
        <Header1 data={data} />

        <div
          className="content-phone"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "3rem 0rem",
          }}
        >
          <h2 style={{ fontSize: "4rem" }}>Xiomi Series</h2>
          <p style={{ fontSize: "1.5rem" }}>Be a Class Apart</p>
          <button
            type="button"
            class="btn btn-dark bounce-top shake-horizontal"
            style={{ fontSize: "1.5rem" }}
          >
            All Xiomi Phone
          </button>
        </div>
        <Header2 data={data} />
      </div>
     <Box />

      <Content/>
      <Box />
      <Service/>
    </div>
  );
};

export default Phone;
