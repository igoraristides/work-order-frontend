import React from "react";

import backgroundImage from "../assets/phonefixcapa.jpg";

export const HeaderImg = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container" style={{ minHeight: "200px" }} />
      </div>
    </section>
  );
};

export default HeaderImg;
