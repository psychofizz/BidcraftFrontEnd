
import './App.css';
import Login from './Pages/Login';
import Form from './Pages/Form';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Form" element={<Form/>}></Route>
        </Routes>
        </BrowserRouter>
        
 
  );
}

export default App;
