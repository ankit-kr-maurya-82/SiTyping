import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  const location = useLocation();

  const showNavbar = location.pathname !== "/home";
  const showFooter = location.pathname !== "/home";
  const showSidebar = location.pathname === "/home";

  return (
    <div className="flex  bg-gray-50">
      {/* Sidebar only on masonry-feed */}
      {showSidebar && <Sidebar />}

      <div className="flex-1">
        {/* Navbar only on masonry-feed */}
        {/* { <Navbar />} */}

        <main className="p-4">
          <Outlet />

          {showNavbar && <Navbar/>}
          {showFooter && <Footer/>}
        </main>
      </div>
    </div>
  );
};

export default Layout;
