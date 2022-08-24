import "./navbar.css";
import React from "react";
import { Link } from 'react-router-dom';

export const pages = ["Game","Football","Basketball"]

function Navbar() {
  return (
    <div className="navbar">
      {
  pages.map(pagePath=>
  <Link to={pagePath}><button>{pagePath}</button></Link>
  )
}
    </div>
  );
};

export default Navbar;
