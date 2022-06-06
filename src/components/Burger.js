import React, { useState } from "react";
import "../styles/burger.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Burger() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation container-fluid">
      <button
        className="hamburger px-2"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="text-center px-2 ">
        <h3 className="hamburger_helper ">
          <strong>Navigate</strong>
        </h3>
      </div>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">
              <strong>Home</strong>
            </a>
          </li>
          <li>
            <a href="/Menu">
              <strong>Menu</strong>
            </a>
          </li>
          <li>
            <a href="/HowToOrder">
              <strong>Order</strong>
            </a>
          </li>
          <li>
            <a href="/Contact">
              <strong>Contact</strong>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Burger;
