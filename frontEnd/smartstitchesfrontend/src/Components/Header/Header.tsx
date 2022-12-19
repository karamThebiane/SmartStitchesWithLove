import React from "react";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header-container">
        <ul className="second-header-menu ">
          <li className="header-menu-item">
            <HashLink
              className="header-menu-item-link"
              to=" /#why-smart-stitches"
            >
              WHY SMART STITCHES
            </HashLink>
          </li>
          <li className="header-menu-item">
            <HashLink className="header-menu-item-link" to="/#Shop">
              SHOP
            </HashLink>
          </li>
          <li className="header-menu-item">
            <HashLink className="header-menu-item-link" to="/#contact-us">
              CONTACT US
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
