
import './App.css';
import Login from './Pages/Login';
import Form from './Pages/Form';
import LandingPage from './Pages/LandingPage';
import Perfil from './Pages/Perfil';
import HomePage from './Pages/HomePage';
import Auction from './Pages/Auction';
import Autc from './Pages/Auctpage';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
   
      <BrowserRouter>
        <Routes>
        <Route path="/Autc" element={<Autc/>}></Route>
        <Route path="/HomePage" element={<HomePage/>}></Route>
        <Route path="/Perfil" element={<Perfil/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Form" element={<Form/>}></Route>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/Auction" element={<Auction/>}></Route>
        </Routes>
        </BrowserRouter>
        
 
  );
}

export default App;
