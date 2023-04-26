import './App.css';
import { useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:1234/img';

function App() {
//const inputRef = useRef();
const [postImage, setPostImage] = useState( { myFile : ""})

const createPost = async (newImage) => {
  try{
    await axios.post(url, newImage)
  }catch(error){
    console.log(error)
  }
}
const handleDragOver = (event) => {
  event.preventDefault();
};

const handleDrop = async (event) => {
  event.preventDefault();
  const files = event.dataTransfer.files[0];
  //console.log(files)
  const base64 = await convertToBase64(files);
  console.log(base64)
  setPostImage({ ...postImage, myFile : base64 })
};

const handleSubmit = (e) => {
  e.preventDefault();
  createPost(postImage)
  console.log("Uploaded")
}

const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  const base64 = await convertToBase64(file);
  console.log(base64)
  setPostImage({ ...postImage, myFile : base64 })
}



  return (
    <div className="App"
         onDragOver={handleDragOver}
         onDrop={handleDrop}
    >
      <h1>Image Upload</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="file-upload" className='custom-file-upload'>
          <img src={postImage.myFile} alt="" />
        </label>

        <input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
         />
         <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;


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