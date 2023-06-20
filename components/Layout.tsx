import Navbar from "./Navbar";
import React from "react";
import Footer from "./Footer";


function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <main>{children}</main>
      <Footer />
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
