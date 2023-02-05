import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import "./cursor.css";

const Cursor = ({ point }) => {
  const cursor = useRef(null);
  const [mousePos, setMousePos] = useState({});
  let ye = 0;

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    console.log(cursor.current, mousePos);
    if (Date.now() - ye > 100) {
      cursor.current.style.top = mousePos.y + "px";
      cursor.current.style.left = mousePos.x + "px";
      ye = Date.now();
    }
  }, [mousePos]);
  return (
    <div className="cursorCon">
      <div ref={cursor} className="cursor"></div>
    </div>
  );
};

export default Cursor;
