import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="Footer-app bg-gray-200 py-4 px-10 text-sm flex justify-between">
      <div className="Ul-links-container-1">
        <ul className="Ul-link flex">
          <li className="Link-tag pr-4 hover:opacity-50">
            <a href="#" className="a-tag">
              India
            </a>
          </li>
          <li className="Link-tag pr-4 hover:opacity-50">
            <a href="#" className="a-tag">
              About
            </a>
          </li>
          <li className="Link-tag pr-4 hover:opacity-50">
            <a href="#" className="a-tag">
              Advertsing
            </a>
          </li>
          <li className="Link-tag hover:opacity-50">
            <a href="#" className="a-tag">
              Business
            </a>
          </li>
        </ul>
      </div>
      <div className="Ul-links-container-2">
        <ul className="Ul-link flex">
          <li className="Link-tag pr-4 hover:opacity-50">
            <a href="#" className="a-tag">
              Privacy
            </a>
          </li>
          <li className="Link-tag pr-4 hover:opacity-50">
            <a href="#" className="a-tag">
              Terms
            </a>
          </li>
          <li className="Link-tag pr-4 hover:opacity-50">
            <a href="#" className="a-tag">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
