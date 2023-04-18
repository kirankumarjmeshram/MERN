import "./App.css";
import React, { useState, useEffect } from "react";

const API_URL = "http://localhost:1234/product"

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productData();
  }, []);

  const productData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };

  return (
    <div className="App">
      <>
        {products.map((elm, i) => {
          return (
            <div key={i} >
              <h1>{elm?.name}</h1>
              <img src={elm?.img1} alt="img1" />
              <h2>price {elm?.price1}</h2>
              <h2> ram {elm?.ram}</h2>
              <h2> battery {elm?.battery}</h2>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default App;
