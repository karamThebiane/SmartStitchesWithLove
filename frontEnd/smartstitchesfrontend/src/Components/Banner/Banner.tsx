import React from "react";
import "./Banner.css";
import smartstitcheslogo from "../../Assets/BannerIcons/stitchinglogo.jpg";

function Banner() {
  return (
    <div>
      <div>
        <img
          className="smart-stitches-logo "
          src={smartstitcheslogo}
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default Banner;
