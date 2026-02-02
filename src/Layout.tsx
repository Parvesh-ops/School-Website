import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs"



const Layout = () => {
  return (
    <div>
      <Navbar />
      <Breadcrumbs />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
