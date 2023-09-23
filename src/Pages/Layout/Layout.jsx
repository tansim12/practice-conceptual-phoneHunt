import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

const Layout = () => {
  const loc = useLocation();
  //   console.log(loc);
  // location useEffect
  useEffect(() => {
    if (loc.pathname === "/") {
      document.title = ` Phones ${""} Home`;
    } else if (loc?.state) {
      document.title = `${loc?.state?.phone_name}`;
    } else {
      document.title = ` Phones ${loc.pathname.replace("/", " ")}`;
    }
  }, [loc.pathname]);
  return (
    <section>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </section>
  );
};

export default Layout;
