import React from "react";
import "./LandingPageContent.css";
import { SiTrustpilot } from "react-icons/si";

const LandingPageContent = () => {
  return (
    <div className="Landing-Page__Content__text">
      <h2>
        Beautiful food & <br></br>takeaway, delivered<br></br> to your door.
      </h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        <br></br>
        industry. Lorem Ipsum has been the industry's standard dummy text
        <br></br> ever since the 1500.
      </p>

      <a href="#" class="notification">
        Place an Order
      </a>
      <div className="trustpilot">
        {" "}
        <SiTrustpilot /> TrustPilot
        <p>4.8 out of 5 based on 2000+ reviews</p>
      </div>
    </div>
  );
};

export default LandingPageContent;
