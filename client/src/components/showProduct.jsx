export const Product =(props)=>{
    return       <div>
    {props.map((elm, i) => {
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
}