import { Route, Routes } from "react-router"
import Index from "./components"
import About from "./components/about"
import AppLayout from "./layout/appLayout"
import Service from "./components/service"
import Contact from "./components/contact"
import NotFound from "./components/4o4"
import SubCategory from "./components/subCategory"
import Login from "./components/login"
import Register from "./components/register"
import Profile from "./components/profile"
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/logout"

function App() {
  return (
    <>
<Routes>
  <Route path="/" element={<AppLayout/>}>

  <Route path="" element={<Index/>}/>
  <Route path="about" element={<About/>}/>
  <Route path="service/:id" element={<Service/>}/>
  <Route path="contact" element={<Contact/>}/>
  <Route path="category/:id" element={<SubCategory/>}/>
     <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}/>

  </Route>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    {/* <Route path="/profile" element={<Profile/>}/> */}

   <Route path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>}/>
    <Route path="/*" element={<NotFound/>}/>

</Routes>
    </>
  )
}

export default App
