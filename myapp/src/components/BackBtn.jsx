import React from "react";
import { useNavigate } from "react-router-dom";
function BackBtn () {
    const navigate = useNavigate();
    return (
        <button onClick={(e) => navigate("/")}>Back</button>
    )
}

export default BackBtn;