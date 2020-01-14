import React from "react";
import "./App.css";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  function handleActiveClass(e) {
    const workButton = document.querySelector("a.work");
    const aboutButton = document.querySelector("a.about");

    if (e.target.classList.contains("logo")) {
      workButton.classList.add("active");
      aboutButton.classList.remove("active");
    } else if (!e.target.classList.contains("active")) {
      workButton.classList.toggle("active");
      aboutButton.classList.toggle("active");
    }
  }

  return (
    <nav className="nav">
      <ul className="nav-left">
        <li className="logo-li">
          <Link to="/" className="logo" onClick={handleActiveClass}>
            L
          </Link>
          <div className="logo-shadow" />
        </li>
        <li>
          <Link
            to="/"
            className="button work active"
            onClick={handleActiveClass}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="button about"
            onClick={handleActiveClass}
          >
            About
          </Link>
        </li>
      </ul>
      <ul className="nav-right">
        <li className="icon icon-github">
          <a
            href="https://github.com/ladislasfontaine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={process.env.PUBLIC_URL + "/github-icon.png"}
              alt="GitHub"
            />
          </a>
        </li>
        <li className="icon icon-mail">
          <a
            href="mailto:fontaine.ladislas@gmail.com"
            rel="noopener noreferrer"
          >
            <img src={process.env.PUBLIC_URL + "/mail-icon.svg"} alt="Email" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
