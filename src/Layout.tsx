import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs"
import schoolLogo from './assets/schoolLogo.jpg'

const schoolData = {
  name: "Buddha English Boarding School",
  address: "Gramthan-6, Morang, Nepal",
  phone: "+97700000",
  email: "mail@BuddhaSchool.edu.np",
  establishedYear: 2001,
  logoUrl: schoolLogo,
}

const Layout = () => {
  return (
    <div>
      <Navbar schoolData={schoolData} />
      <Breadcrumbs />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
