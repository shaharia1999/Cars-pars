import { Route, Routes } from "react-router-dom";
import Home from "./HomeCompunant/Home";
import Login from "./Login/Login";
import ReastPass from "./ReastPass/ReastPass";
import Navbar from './HomeCompunant/Navber/Navber'
import Footer from './HomeCompunant/Footer';
import Register from "./SingUp/Register";
import Order from "./MyOrder/Order";


 
function App() {
  return (
    <div>
  
    <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home></Home>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/reast' element={<ReastPass/>}></Route>
        <Route path='/singIn'element={<Register/>}></Route>
        <Route path='/myOrder/:_id'element={<Order/>}></Route>
      </Routes>
      <Footer/>
   

    </div>
  );
}

export default App;
