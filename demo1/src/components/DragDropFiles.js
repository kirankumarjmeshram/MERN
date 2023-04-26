import { useState, useRef } from "react";
import axios from 'axios';
const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const [postImage, setPostImage] = useState( { myFile : ""})

  const url = 'http://localhost:1234/img';
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };
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
  const handleFileUpload = async () => {
    
    const base64 = await convertToBase64(files);
    console.log(base64)
    setPostImage({ ...postImage, myFile : base64 })
   setTimeout(()=>{ createPost(postImage)},1000)
  }
  // send files to the server // learn from my other video
//   const handleUpload = () => {
//     const formData = new FormData();
//     formData.append("Files", files);
//     // console.log(formData.getAll())
//     createPost(files)
//     // fetch(
//     //   "link", {
//     //     method: "POST",
//     //     body: formData
//     //   }  
//     // )
//   };
  const createPost = async (newImage) => {
    try{
      await axios.post(url, newImage)
    }catch(error){
      console.log(error)
    }
  }
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createPost(postImage)
//     console.log("Uploaded")
//   }
  if (files) return (
    <div className="uploads">
        <ul>
            {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
        </ul>
        <div className="actions">
            <button onClick={() => setFiles(null)}>Cancel</button>
            <button onClick={handleFileUpload}>Upload</button>
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

export default DragDropFiles;
