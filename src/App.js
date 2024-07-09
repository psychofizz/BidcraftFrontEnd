
import './App.css';
import Login from './Pages/Login';
import Form from './Pages/Form';
import LandingPage from './Pages/LandingPage';
import HomePage from './Pages/HomePage'
import HomeTest from './Pages/HomeTest';

import Profile from './Pages/Profile';
import Autc from './Pages/Auctpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Tab, initTWE } from "tw-elements";
initTWE({ Tab });


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/Autc" element={<Autc />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Form" element={<Form />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Home" element={<HomeTest />}></Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
