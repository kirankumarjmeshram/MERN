import React from "react";
import BackBtn from "./BackBtn";
function ImgComponent({props}) {
  const {back}=props
  //const navigate = useNavigate();
  return (
    <>
      <img src={props.src} alt={props.alt}/>
      {/* <button onClick={(e) => navigate("/")}>Back</button> */}
      {back===false?null:<BackBtn/>}
    </>
  );
}

export default ImgComponent;


// function ImgComponent({back,src,alt}) {
//   //const {back}=props
//   //const navigate = useNavigate();
//   return (
//     <>
//       <img src={src} alt={alt}/>
//       {/* <button onClick={(e) => navigate("/")}>Back</button> */}
//       {back===false?null:<BackBtn/>}
//     </>
//   );
// }
