import "./App.css";
import React, { useState, useEffect } from "react";
//import showProduct './components/showProduct'
const API_URL = "http://localhost:1234/product"

const App = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [ram, setRam] = useState("");
  const [battery, setBattery] = useState("");

const handleOnSubmit = async (e) => {
  e.preventDefault();
  let result = await fetch(
    API_URL, {
      method: "post",
      body: JSON.stringify({name,img1:image, price1:price, ram, battery}),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    result = await result.json();
    console.warn(result);
    if(result){
      alert("Data saved succesfully");
      setName("");
      setImage("");
      setPrice("");
      setRam("");
      setBattery("");
    }
}


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
      <div>
          <h1>Add Product Data</h1>
          <form action="">
            <input type="text" placeholder="name" 
            value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="image" 
            value={image} onChange={(e) => setImage(e.target.value)} />
            <input type="number" pattern="[0-9]*" placeholder="price" 
             value={price} onChange={(e) => setPrice(e.target.value)} />
             <input type="number" pattern="[0-9]*" placeholder="ram" 
             value={ram} onChange={(e) => setRam(e.target.value)} />
             <input type="number" pattern="[0-9]*" placeholder="battery" 
             value={battery} onChange={(e) => setBattery(e.target.value)} />

            <button type="submit" onClick={handleOnSubmit}>
              submit
            </button>
          </form>
    </div>
      <div>
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
      </div>
    </div>
  );
};

export default App;
