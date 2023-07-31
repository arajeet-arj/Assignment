import "./header.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./darkmode.css";

const Header = () => {
  const [theme, setTheme] = useState("light-theme");
  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleMoreFeaturesClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSearch = () => {
    // will be added soon 
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="hdr01Container">
      <div className="-container flex-end">
        <div className="menu-container">
          <div className="menu-item" onClick={handleMoreFeaturesClick}>
            Login
          </div>
        </div>
        <Link to="/">
          <span className="insta-logo">Instagram</span>
        </Link>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
        </div>
        <div
          style={{ cursor: "pointer" }}
          className="btn"
          onClick={() => toggleTheme()}
        >
          {theme === "dark-theme" ? "Light Mode" : "Dark Mode"}
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <h2>Will be added Soon </h2>

          <button className="close-icon" onClick={handleClosePopup}>
            <i className="fas fa-times">X</i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
