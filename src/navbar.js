import React, { useState } from "react";
import logo from "./logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "./data";
import pic from "./pic.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      <div className="pic-container">
        <img src={pic} alt="pic" className="pic" />
      </div>
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/'>
          <img src={logo} className="logo" alt="logo"/>
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            {showLinks ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={
            showLinks ? "links-container show-container" : "links-container"
          }
        >
          <ul className="links">
            <Link to= '/news'>
            </Link>
            
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <Link to="/video"></Link>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
