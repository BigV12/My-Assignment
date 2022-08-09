import React from "react";
import land from "./land.png";

import "./LandingPage.css";
import LandingPageContent from "./LandingPageContent";

const LandingPage = () => {
  return (
    <div>
      <img src={land} alt="food" className="landing-page__image"></img>
      <LandingPageContent />
    </div>
  );
};

export default LandingPage;
