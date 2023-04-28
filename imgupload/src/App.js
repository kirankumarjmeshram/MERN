import "./App.css";
import { useState } from "react";
import axios from "axios";
//import ShowImg from './ShowImg';

const url = "http://localhost:1234/img";

function App() {
  //const inputRef = useRef();
  const [postImage, setPostImage] = useState({ myFile: "" });

  const createPost = async (newImage) => {
    try {
      await axios.post(url, newImage);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files[0];
    //console.log(files)
    const base64 = await convertToBase64(files);
    console.log(base64);
    setPostImage({ ...postImage, myFile: base64 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postImage);
    console.log("Uploaded");
  };

  const handleFileUpload = async (e) => {
    console.log("e-0---", e.target.files);
    // const file = e.target.files[0];
    let file;
    if (e.target.files.length > 1) {
      file = [];
      for (let i = 0; i < e.target.files.length; i++) {
        file.push(e.target.files[i]);
      }
    } else {
      file = e.target.files[0];
    }
    const base64 = await convertToBase64(file);
    console.log(base64);
    setPostImage({ ...postImage, myFile: base64 });
  };

  return (
    <div>
      {console.log("postImage----", postImage)}
      <div className="App" onDragOver={handleDragOver} onDrop={handleDrop}>
        <h1>Image Upload</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="file-upload" className="custom-file-upload">
            {postImage.length > 1 ? (
              postImage?.map((elm) => {
                return (
                  <>
                    <img src={elm?.myFile} alt="" />
                  </>
                );
              })
            ) : (
              <img src={postImage.myFile} alt="" />
            )}
          </label>

          <input
            type="file"
            lable="Image"
            name="myFile"
            id="file-upload"
            accept=".jpeg, .png, .jpg, .pdf, .doc, .gif, .doc, .txt, video/*"
            onChange={(e) => handleFileUpload(e)}
            multiple
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* <ShowImg/> */}
    </div>
  );
}

export default App;

function convertToBase64(file) {
  if (file.length > 1) {
    file.map((elm) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(elm);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
}
