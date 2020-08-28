import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Globals from "./GlobalStyles";

const Layout = ({ children }) => {
  return (
    <div>
      <Globals />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
