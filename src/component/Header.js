import React from "react";
import logo from "../assets/TRS-LOGO/png/logo-no-background.png";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <h1>
        The<strong>Recommendation</strong>Street
        {/* <p>Still Feeling Lost? Be Lost in TRS</p> */}
      </h1>
      <div className="Navbar">
        <ul className="Navbar-list">
          <li>
            <Link to="Movies">
              <h3>Movies</h3>
            </Link>
          </li>
          <li>
            <Link to="Shows">
              <h3>Shows</h3>
            </Link>
          </li>
          <li>
            <Link to="Genres">
              <h3>Genres</h3>
            </Link>
          </li>
          <li>
            <Link to="Creators">
              <h3>Creators</h3>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default header;
