
import './App.css';
import Login from './Pages/Login';
import Form from './Pages/Form';
import LandingPage from './Pages/LandingPage';
import HomeTest from './Pages/HomeTest';
import Auction from './Pages/Auction';
import Profile from './Pages/Profile';
import Autc from './Pages/Auctpage';
import Categories from './Pages/Categories';
import ImgApi from './Pages/apimg'
import AuctionTags from './Pages/searchAuctioTags'
import Verification from './Pages/Verification'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateAuction from './Pages/CreateAuction';
import Payment from './Pages/Payment';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/verification" element={<Verification />}></Route>
        <Route path="/AuctionTags" element={<AuctionTags />}></Route>
        <Route path="ImgApi" element={<ImgApi />}></Route>
        <Route path="/Auction/:id" element={<Auction />}></Route>
        <Route path="/category/:category" element={<Categories />} />
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/Autc" element={<Autc />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Payment" element={<Payment />}></Route>
        <Route path="/Register" element={<Form />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Home" element={<HomeTest />}></Route>
        <Route path="/create-auction" element={<CreateAuction />}></Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
