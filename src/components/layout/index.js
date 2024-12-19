import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Layout = ({ children }) => (
  <div>
    {/* Header Component */}
    <Header />

    {/* Main Content */}
    <main>{children}</main>

    {/* Footer Component */}
    <Footer />
  </div>
);

export default Layout;
