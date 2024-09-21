import { Outlet } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import ScrollTop from "./components/scrollTop/ScrollTop";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="main-content min-h-screen">
        <ScrollTop />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout