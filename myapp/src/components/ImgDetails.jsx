import React from "react";
import ImgComponent from "./ImgComponent"
import ImgInfo from "./ImgInfo"
import { useNavigate } from "react-router-dom";


function ImgDetails () {
    const navigate = useNavigate();
    return (
        <>
            <ImgComponent
                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
                alt="img"
            />
            <ImgInfo/>
            <button onClick={(e) => navigate("/")}>Back</button>
        </>
    )
}

export default ImgDetails;