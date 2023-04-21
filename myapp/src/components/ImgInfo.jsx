import React from "react"
import { useNavigate } from "react-router-dom";
function ImgInfo (){
    const navigate = useNavigate();
    return (
        <>
            <h1>Hello World2</h1>
            <button onClick={(e) => navigate("/")}>Back</button>
        </>
        
    ) 
}

export default ImgInfo;