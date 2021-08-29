import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="Home-container flex justify-center items-center flex-col">
      <div className="Logo-container mt-28">
        <img
          src="../assets/google-logo.png"
          alt="Google Logo"
          className="Google-logo"
        />
      </div>
      <div className="Input-container flex border hover:shadow-lg border-black py-3 justify-between rounded-full mt-3">
        <div className="Search-bar-container px-4">
          <img
            src="./assets/search-bar.svg"
            alt="Search Bar"
            className="Search-bar-tag"
          />
        </div>
        <div className="Input-tag-container rounded-full">
          <input
            type="text"
            placeholder="Search"
            className="Input-tag bg-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
