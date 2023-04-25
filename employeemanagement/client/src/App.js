import "./App.css";
import React, { useState, useEffect } from "react";
//import showProduct './components/showProduct'
const API_URL = "http://localhost:1234/employees";

const App = () => {
  //POST
  const [employees, setEmployees] = useState([]);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [employeeId,setEmployeeId]=useState(null)
const[visibilityStatus,setVisibilityStatus]=useState("hidden")

  const handleOnSubmit = async (e) => {
    let result = await fetch(API_URL, {
      method: "post",
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        role,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.warn(result);
    if (result) {
      //alert("Data saved succesfully");
      setFirst_name("");
      setLast_name("");
      setEmail("");
      setRole("");
    }
  };

  useEffect(() => {
    employeeData();
  }, []);

  const employeeData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setEmployees(data);
  };
  //DELETE
  function deleteEmployee(id){
    fetch(`${API_URL}/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((response)=>{
        console.log(response)
        employeeData();
      })
    })
  }

  //UPDATE
  function selectEmployee(item)
  {
   
    setVisibilityStatus('visible')
    setFirst_name(item?.first_name)
    setLast_name(item?.last_name)
    setEmail(item?.email)
    setRole(item?.role);
    setEmployeeId(item?._id)
      
  }
  function updateEmployee()
  {
    let item={first_name, last_name,email,role}
    console.warn("item",item)
    fetch(`${API_URL}/${employeeId}`, {
      method: 'PATCH',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        employeeData();
        setVisibilityStatus('hidden')
      })
    })
  }

  return (
    <div className="App">
      {/* POST */}
      <div>
        <h1>Add Employee Data</h1>
        <form action="">
          <input
            type="text"
            placeholder="first name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
          />
          <input
            type="text"
            placeholder="last name"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          {/* <input
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
          /> */}

          <button type="submit" onClick={handleOnSubmit}>
            submit
          </button>
        </form>
      </div>
      {/* UPDATE */}
      <div style={{visibility:visibilityStatus}}>
        <input type="text" value={first_name} onChange={(e)=>{setFirst_name(e.target.value)}} /> <br /><br />
        <input type="text" value={last_name} onChange={(e)=>{setLast_name(e.target.value)}} /> <br /><br />
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br />
        <input type="text" value={role}  onChange={(e)=>{setRole(e.target.value)}} /> <br /><br />
        <button onClick={updateEmployee} >Update User</button>
      </div>
      {/* GET */}
      <div>
        {employees.map((elm, i) => {
          return (
            <div key={i}>
              <h1>{elm?.first_name}</h1>
              <h1>{elm?.last_name}</h1>
              <h2>email {elm?.email}</h2>
              <h2> role {elm?.role}</h2>
              <button onClick={(e)=>{deleteEmployee(elm?._id)}}>Delete Product</button>
              <button onClick={(e) => {selectEmployee(elm)}}>Update</button>
              {/* {console.log(elm)} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
