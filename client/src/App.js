import './App.css';
import React, { useState , useEffect} from "react";

//const API_URL = http://localhost:1234/product



const  App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productData();
  }, []);

  const productData = async () =>{
    const response = await fetch('http://localhost:1234/product');
    const data = await response.json();
    console.log(data)
    setProducts(data);
  }

  

  return (
    <div className="App">
      <h1>{products}</h1>
    </div>
  );
}

export default App;
