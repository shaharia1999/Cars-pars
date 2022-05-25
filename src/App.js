import { Route, Routes } from "react-router-dom";
import Home from "./HomeCompunant/Home";
import Login from "./Login/Login";
import ReastPass from "./ReastPass/ReastPass";
import Navbar from './HomeCompunant/Navber/Navber'
import Footer from './HomeCompunant/Footer';
import Register from "./SingUp/Register";
import Order from "./MyOrder/Order";
import DashBord from "./DashBord/DashBord";
import AddItem from "./AddItem/AddItem";
import ManageItem from "./DashBord/ManageItem";
import Users from "./DashBord/Users";
import RequirteAuth from "./RequreAuth/RequirteAuth"
import UserOrder from "./DashBord/UserOrder";


 
function App() {
  return (
    <div>
  
    <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home></Home>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/reast' element={<ReastPass/>}></Route>
        <Route path='/singIn'element={<Register/>}></Route>
        <Route path='/myOrder/:_id'element={
          <RequirteAuth><Order/></RequirteAuth>
        
        }></Route>
        <Route path='dashBord' element={<DashBord/>}>
          <Route path="addItem" element={<AddItem/>}></Route>
          <Route path="manageItem" element={<ManageItem/>}></Route>
          <Route path="user"element={<Users/>}></Route>
          <Route path="UserOrder"element={<UserOrder/>}></Route>
        </Route>
      </Routes>
      <Footer/>
   

    </div>
  );
}

export default App;
