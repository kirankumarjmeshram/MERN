import React from "react";
import { useNavigate } from "react-router-dom";
function ImgComponent() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={(e) => navigate("/")}>Back</button>
    </>
  );
}

export default ImgComponent;
