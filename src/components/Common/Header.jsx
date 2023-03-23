import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header2">
        <nav className="gnb inner">
          <a href="/">
            <img className="logo" src={logoImg} alt="logo" />
          </a>
          <ul>
            <li className="on">
              <Link to="/stock">종목추천</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
