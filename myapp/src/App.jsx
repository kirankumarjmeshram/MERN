import "./App.css";
import  {useNavigate} from 'react-router-dom'

function App() {
  const navigate=useNavigate()
  return (
    <div className="App">
      <button onClick={(e)=>navigate('/info')}>Info</button>
      <button onClick={(e)=>navigate('/img')}>Img</button>
      <button onClick={(e)=>navigate('/detail')}>ImgInfo</button>
    </div>
  );
}

export default App;
