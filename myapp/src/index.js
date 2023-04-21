import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ImgComponent from "./components/ImgComponent";
import ImgInfo from "./components/ImgInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImgDetails from "./components/ImgDetails";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* The rest of your app goes here */}
      <Routes>
        <Route path="/" element={<App />}></Route>

        <Route path="img" element={<ImgComponent
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          alt="img"
        />}></Route>
        <Route path="info" element={<ImgInfo />} />
        <Route path="detail" element={<ImgDetails/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
