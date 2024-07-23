import './App.css';
import Login from './Pages/Login';
import Form from './Pages/Form';
import LandingPage from './Pages/LandingPage';
import AdminPage from './Pages/AdminPage';
import HomePage from './Pages/HomePage'
import HomeTest from './Pages/HomeTest';
import Profile from './Pages/Profile';
import Autc from './Pages/Auctpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Tab, initTWE } from "tw-elements";
import CreateAuction from './Pages/CreateAuction';
import Test from "./Pages/Test"
import Electronics from './Pages/PagesCategory/Electronics';
import Clothes from './Pages/PagesCategory/Clothes'
import Furniture from './Pages/PagesCategory/Furniture'
import Home from './Pages/PagesCategory/Home'
import Games from './Pages/PagesCategory/Games'
import Sports from './Pages/PagesCategory/Sports'
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
        <Route path="/create-auction" element={<CreateAuction />}></Route>
        <Route path='/test' element={<Test/>}></Route>
        <Route path='/HomeTest' element={<HomeTest/>}></Route>
        <Route path='/Electronics' element={<Electronics/>}></Route>
        <Route path='/Clothes' element={<Clothes/>}></Route>
        <Route path='/Furniture' element={<Furniture/>}></Route>
        <Route path='/HomeCat' element={<Home/>}></Route>
        <Route path='/Games' element={<Games/>}></Route>
        <Route path='/Sports' element={<Sports/>}></Route>
        <Route path='/AdminPage' element={<AdminPage/>}></Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
