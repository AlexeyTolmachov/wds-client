import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="left-sub-header">
        <div className="logo">
          <img src="/Logo.svg" alt="Logo" />
        </div>
        <div className="contact">
          <p className="phone-help">Need Help?</p>
          <div className="phone">(514)543-9936</div>
        </div>
      </div>
      <nav className="nav">
        <ul className="main-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="sub-menu-parent">
            <a className="a-service" href="/">
              Services
            </a>
            <ul className="sub-menu">
              <li>
                <a href="/">Sub Menu 1</a>
              </li>
              <li className="sub-sub-menu-parent">
                <a href="/">Sub Menu 2</a>
                <ul className="sub-sub-menu">
                  <li>
                    <a href="/">Turpis consectetur 3</a>
                  </li>
                  <li>
                    <a href="/">Senectus cursus pretium malesuada</a>
                  </li>
                  <li>
                    <a href="/">Luctus neque frin 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">Turpis consectetur 3</a>
              </li>
              <li>
                <a href="/">Luctus neque frin 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Book Now</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
