import './App.css';

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
