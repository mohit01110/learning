import React, { useState } from "react";
import "../styles/header.css";
import Registraion from "./Registration";

function Header() {
  const [name, setName] = useState("Login");
  const [toggle, setToggle] = useState(false);

  const loginAndLogoutToggle = () => {
    setToggle((prev) => !prev);
  };

  let headerStyle = {
    backgroundColor: toggle ? "white" : "black",
  };

  let fontStyle = {
    color: toggle ? "black" : "white",
  };

  function OpenModal() {
    setToggle(true);
  }

  return (
    <>
      <div>
        <div style={headerStyle} className="header">
          {/* Netflix logo and navigation links can be added here */}
          <img
            src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
            alt="Netflix Logo"
          />
          <nav>
            <a href="#" style={fontStyle}>
              Home
            </a>
            <a href="#" style={fontStyle}>
              TV Shows
            </a>
            <a href="#" style={fontStyle}>
              Movies
            </a>
            <a href="#" style={fontStyle}>
              New & Popular
            </a>
            <a href="#" style={fontStyle}>
              My List
            </a>
            <a href="#" style={fontStyle}>
              Login
            </a>
            <a href="#" onClick={loginAndLogoutToggle}>
              {toggle ? (
                <span style={fontStyle}>Login</span>
              ) : (
                <span style={fontStyle}>Logout</span>
              )}
            </a>
          </nav>
        </div>

        {
          toggle && <div
          href="#"
          style={{
            height: "100%",
            width: "100%",
            background: "grey",
            position: "fixed",
            top: "",
            left: "0",
          }}
        >
          <Registraion />
        </div>
        

        }
      </div>
    </>
  );
}

export default Header;
