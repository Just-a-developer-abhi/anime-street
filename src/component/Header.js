import React from "react";
import logo from "../assets/TRS-LOGO/png/logo-no-background.png";

const header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <h1>
        The<strong>Recommendation</strong>Street
        {/* <p>Still Feeling Lost? Be Lost in TRS</p> */}
      </h1>
      <div>
        
      </div>
    </header>
  );
};

export default header;
