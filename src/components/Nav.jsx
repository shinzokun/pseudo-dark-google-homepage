import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar-App flex justify-end px-10 py-4 items-center text-sm">
      <div className="Ul-links-containe">
        <ul className="Ul-links flex">
          <li className="li-links pr-5">
            <a href="#" className="a-tags hover:opacity-50">
              Gmail
            </a>
          </li>
          <li className="li-links pr-5">
            <a href="#" className="a-tags hover:opacity-50">
              Images
            </a>
          </li>
        </ul>
      </div>
      <div className="Home-svg-container pr-5">
        <img
          src="../assets/home.svg"
          alt="Image Tag"
          className="Image-tag hover:opacity-50"
        />
      </div>
      <div className="Profile-svg-container">
        <img
          src="../assets/profile.svg"
          alt="Profile"
          className="Profile-tag hover:opacity-70"
        />
      </div>
    </div>
  );
};

export default Navbar;
