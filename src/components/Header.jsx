import React from "react";
import logoImg from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header2">
        <nav className="gnb inner">
          <a href="index.html">
            <img className="logo" src={logoImg} alt="logo" />
          </a>
          <ul>
            <li className="on">
              <a href="index.html">종목추천</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
