import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Layout = ({ children }) => (
  <div>
    <div id="butter"></div>
    {/* Bubbles Background */}
    <div className="bubbles_wrap">
      <div className="bubble x1"></div>
      <div className="bubble x2"></div>
      <div className="bubble x3"></div>
      <div className="bubble x4"></div>
      <div className="bubble x5"></div>
      <div className="bubble x6"></div>
      <div className="bubble x7"></div>
      <div className="bubble x8"></div>
      <div className="bubble x9"></div>
      <div className="bubble x10"></div>
    </div>

    
    {/* Header Component */}
    <Header />

    {/* Main Content */}
    <main>{children}</main>

    {/* Footer Component */}
    <Footer />
  </div>
);

export default Layout;
