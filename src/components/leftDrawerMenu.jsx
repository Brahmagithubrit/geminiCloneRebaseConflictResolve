import React, { useState } from "react";
import "../styles/leftDrawerMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function LeftDrawerMenu() {
  const [isMenuClick, setIsMenuClick] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuClick((prev) => !prev);
  };

  return (
    <div className={`master ${isMenuClick ? "animate" : ""}`}>
      {/* Top Section */}
      <div className="first">
        <button onClick={handleMenuOpen}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        {!isMenuClick && <FontAwesomeIcon icon={faSearch} />}
      </div>

      {/* Middle Section */}
      {!isMenuClick && <div className="second">Recent</div>}

      {/* Bottom Section */}
      <div className="third">
        <FontAwesomeIcon icon={faGear} />
        {!isMenuClick && <span>Settings and Activity</span>}
      </div>
    </div>
  );
}
