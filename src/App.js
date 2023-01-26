import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter,Navigate , Routes, Route } from 'react-router-dom';
import AboutPage from "./components/AboutPage";
import Comments from "./components/Comments";

function App() {
  
  return (

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navigate to="/home"/>} />
     <Route path="/home" element={<HomePage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/comments" element={<Comments/>}/>
    </Routes>
 
    </BrowserRouter>
  );
}

export default App;
