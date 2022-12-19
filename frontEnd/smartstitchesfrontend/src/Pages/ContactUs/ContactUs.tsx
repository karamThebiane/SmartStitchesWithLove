import React from "react";
import Email from "../../Assets/SocialMediaIcons/email.png";
import "./ContactUs.css";
import float from "../../Assets/PagesImages/float.jpg";

function ContactUs() {
  return (
    <section>
      <div>
        <img src={float} alt="" />
        <h3>
          <a href="mailto: SmartStitchesWithLove@gmail.com">
            <img className="Email-Logo" src={Email} alt="EmailLogo" />
          </a>
        </h3>
      </div>
    </section>
  );
}

export default ContactUs;
