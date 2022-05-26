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
import ManageAllOrders from "./DashBord/ManageAllOrders";
import UserRevew from "./DashBord/UserRevew";
import Payment from '../src/DashBord/Payment'
import Error from '../src/Error/Error'

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import MyProfile from "./DashBord/MyProfile";
import Blog from "./Blog";
import Portfolio from './Portfolio';
 
 const queryClient = new QueryClient()
 
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div>
  
    <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home></Home>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/reast' element={<ReastPass/>}></Route>
        <Route path='/portfoli'element={<Portfolio/>}></Route>
        <Route path='*'element={<Error/>}></Route>
        <Route path='/singIn'element={<Register/>}></Route>
        <Route path='/Blog'element={<Blog/>}></Route>
        <Route path='/myOrder/:_id'element={
          <RequirteAuth><Order/></RequirteAuth>
        
        }></Route>
        <Route path='dashBord' element={<DashBord/>}>
          <Route path="addItem" element={<AddItem/>}></Route>
          <Route path="manageItem" element={<ManageItem/>}></Route>
          <Route path="user"element={<Users/>}></Route>
          <Route path="UserOrder"element={<UserOrder/>}></Route>
          <Route path="manageOrder"element={<ManageAllOrders/>}></Route>
          <Route path='UserOrder/revew'element={<UserRevew/>}></Route>
          <Route path='UserOrder/payment/:_id' element={<Payment/>}></Route>
          <Route path='mayProfile' element={<MyProfile/>}></Route>
        </Route>
      </Routes>
      <Footer/>
   

    </div>
    </QueryClientProvider>
  );
}

export default App;
