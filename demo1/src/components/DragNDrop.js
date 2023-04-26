import { useState, useRef } from "react";
//import axios from 'axios';

const DragNDrop = () => {
    const [postImage, setPostImage] = useState( { myFile : ""})
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setPostImage(event.dataTransfer.files)
  };
  
  // send files to the server // learn from my other video
//   const handleUpload = () => {
//     const formData = new FormData();
//     formData.append("Files", files);
//     console.log(formData.getAll())
//     fetch(
//       'http://localhost:1234/img', {
//         method: "POST",
//         body: formData
//       }  
//     )
//   };


  const handleUpload = async (e) => {
       const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setPostImage({ ...postImage, myFile : base64 })
  };


//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     const base64 = await convertToBase64(file);
//     console.log(base64)
//     setPostImage({ ...postImage, myFile : base64 })
//   }
  

  if (files) return (
    <div className="uploads">
        <ul>
            {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
        </ul>
        <div className="actions">
            <button onClick={() => setFiles(null)}>Cancel</button>
            <button onClick={handleUpload}>Upload</button>
        </div>
    </div>
  )

  return (
    <>
        <div 
            className="dropzone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
          <h1>Drag and Drop Files to Upload</h1>
          <h1>Or</h1>
          <input 
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
          <button onClick={() => inputRef.current.click()}>Select Files</button>
        </div>
    </>
  );
};

export default DragNDrop;


function convertToBase64(file){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }
