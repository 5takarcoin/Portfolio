import React, { useEffect } from "react";
import "./image.css";
import me from "./me.jpg";

const Image = () => {
  return (
    <div className="my__flex">
      <img className="image" src={me} alt="" />
    </div>
  );
};

export default Image;
