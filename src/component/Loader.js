import React from "react";
import loadingGif from "../assets/gifs/n1582570.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
};

export default Loader;
