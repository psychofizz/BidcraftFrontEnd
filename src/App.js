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
import EditAuction from './Pages/EditAuction'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WonAuction from './Pages/wonAuctions'
import CreateAuction from './Pages/CreateAuction';
import AdminPage from './Pages/AdminPage';
import PayAuction from './Pages/PayAuction';
import MyAuction from './Pages/MyAuction';
import ProfileView from './Pages/ProfileView';
import Review from './Pages/Review';




function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/myAuction/:id" element={<MyAuction />}></Route>

        <Route path="/payAuction/:id" element={<PayAuction />}></Route>
        <Route path="/wonAuctions" element={<WonAuction />}></Route>
        <Route path="/payAuction/:id" element={<PayAuction />}></Route>

        <Route path="/wonAuctions" element={<WonAuction />}></Route>

        <Route path="/editAuction/:id" element={<EditAuction />}></Route>
        <Route path="/verification" element={<Verification />}></Route>
        <Route path="/AuctionTags" element={<AuctionTags />}></Route>
        <Route path="ImgApi" element={<ImgApi />}></Route>
        <Route path="/Auction/:id" element={<Auction />}></Route>
        <Route path="/category/:category" element={<Categories />} />
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/seller/:userId" element={<ProfileView />} />
        <Route path="/Autc" element={<Autc />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Form />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Home" element={<HomeTest />}></Route>
        <Route path="/create-auction" element={<CreateAuction />}></Route>
        <Route path='/HomeTest' element={<HomeTest />}></Route>
        <Route path='/admin' element={<AdminPage />}></Route>
        <Route path="/review/:auctionId" element={<Review />} />


      </Routes>
    </BrowserRouter>


  );
}

export default App;
