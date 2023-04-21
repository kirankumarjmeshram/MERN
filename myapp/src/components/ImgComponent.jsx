import React from "react";
import { useNavigate } from "react-router-dom";
function ImgComponent(props) {
  const navigate = useNavigate();
  return (
    <>
      <img src={props.src} alt={props.alt}/>
      <button onClick={(e) => navigate("/")}>Back</button>
    </>
  );
}

export default ImgComponent;
