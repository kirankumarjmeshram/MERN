import React from "react"
//import { useNavigate } from "react-router-dom";
import BackBtn from "./BackBtn";
function ImgInfo ({back}){
    //const navigate = useNavigate();
    return (
        <>
            <h1>This is Very Nice Image</h1>
            {back===false?null:<BackBtn/>}
        </>
        
    ) 
}

export default ImgInfo;