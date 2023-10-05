import React from "react";
import "./Footer.css"; // Подключаем файл стилей

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <div className="link-block">
            <h3 className="link-block-title">Departments</h3>
            <ul className="link-list">
              <li>
                <a href="http://example.com">Medical</a>
              </li>
              <li>
                <a href="http://example.com">Pharmaceuticals</a>
              </li>
              <li>
                <a href="http://example.com">Medical Equipment</a>
              </li>
            </ul>
          </div>
          <div className="link-block">
            <h3 className="link-block-title">Quick Links</h3>
            <ul className="link-list">
              <li>
                <a href="http://example.com">What do we do?</a>
              </li>
              <li>
                <a href="http://example.com">Our expertise</a>
              </li>
              <li>
                <a href="http://example.com">Request an Appointment</a>
              </li>
              <li>
                <a href="http://example.com">Book with a Specialist</a>
              </li>
            </ul>
          </div>
          <div className="link-block">
            <h3 className="link-block-title">Head Office</h3>
            <ul className="link-list">
              <li>
                <a href="http://example.com">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </a>
              </li>
              <li>
                <a href="http://example.com">darrell@mail.com</a>
              </li>
              <li>
                <a href="http://example.com">(671) 555-0110</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-column-logo">
          <img className="logo-img" src="/Frame 1.svg" alt="Логотип" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            blandit tincidunt ut sed. Velit euismod integer convallis ornare eu.
          </p>
        </div>
      </div>

      <p className="footer-bottom">© 2023 Ваша Компания</p>
    </footer>
  );
};

export default Footer;
