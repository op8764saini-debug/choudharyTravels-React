import { Outlet } from "react-router"
import Footer from "./footer"
import Header from "./header"

function AppLayout(){
    return( 
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
      
    )
}
export default AppLayout