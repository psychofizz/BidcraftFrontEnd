
import './App.css';
import Login from './Pages/Login';
import Form from './Pages/Form';
import LandingPage from './Pages/LandingPage';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Form" element={<Form/>}></Route>
          <Route path="/" element={<LandingPage/>}></Route>
        </Routes>
        </BrowserRouter>
        
 
  );
}

export default App;
