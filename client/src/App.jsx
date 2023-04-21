import "./App.css";
import React, { useState, useEffect } from "react";
//import showProduct './components/showProduct'
const API_URL = "http://localhost:1234/product";

const App = () => {
  //PUT
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [ram, setRam] = useState("");
  const [battery, setBattery] = useState("");
  const [memory, setMemory] = useState("");

  const handleOnSubmit = async (e) => {
    let result = await fetch(API_URL, {
      method: "post",
      body: JSON.stringify({
        name,
        img1: image,
        price1: price,
        ram,
        battery,
        memory,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved succesfully");
      setName("");
      setImage("");
      setPrice("");
      setRam("");
      setBattery("");
      setMemory("");
    }
  };

  useEffect(() => {
    productData();
  }, []);

  const productData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };
  //DELETE
  function deleteProduct(id){
    fetch(`${API_URL}/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((response)=>{
        console.log(response)
        productData();
      })
    })
  }

  return (
    <div className="App">
      {/* PUT */}
      <div>
        <h1>Add Product Data</h1>
        <form action="">
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="number"
            pattern="[0-9]*"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="number"
            pattern="[0-9]*"
            placeholder="ram"
            value={ram}
            onChange={(e) => setRam(e.target.value)}
          />
          <input
            type="number"
            pattern="[0-9]*"
            placeholder="battery"
            value={battery}
            onChange={(e) => setBattery(e.target.value)}
          />
          <input
            type="number"
            pattern="[0-9]*"
            placeholder="memory"
            value={memory}
            onChange={(e) => setMemory(e.target.value)}
          />

          <button type="submit" onClick={handleOnSubmit}>
            submit
          </button>
        </form>
      </div>
      {/* GET */}
      <div>
        {products.map((elm, i) => {
          return (
            <div key={i}>
              <h1>{elm?.name}</h1>
              <img src={elm?.img1} alt="img1" />
              <h2>price {elm?.price1}</h2>
              <h2> ram {elm?.ram}</h2>
              <h2> battery {elm?.battery}</h2>
              <h2> memory {elm?.memory}</h2>
              <button onClick={(e)=>{deleteProduct(elm?._id)}}>Delete Product</button>
              {/* {console.log(elm)} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
