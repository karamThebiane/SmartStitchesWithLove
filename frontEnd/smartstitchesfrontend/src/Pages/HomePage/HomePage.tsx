import React from "react";
import ContactUs from "../ContactUs/ContactUs";
import ImageContainer from "../ImageContainer/ImageContainer";
import Shop from "../Shop/Shop";
import WhySmart from "../WhySmart/WhySmart";

function HomePage() {
  return (
    <div>
      <WhySmart />
      <Shop />
      <ImageContainer />
      <ContactUs />
    </div>
  );
}

export default HomePage;
