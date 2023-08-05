import React from "react";
interface HeaderProps {
  site: string;
}

export default function Header(props: HeaderProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light topnav">
      <div className="navbar-brand">
        <img src="assets/burt.png" className="logo" alt="burt logo" />
        <a href="/">{props.site}</a>
        <a href="#main" className="visually-hidden-focusable">
          Skip nav
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#topNavBar"
        data-toggle="collapse"
        data-target="#topNavBar"
        aria-controls="topNavBar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="topNavBar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/a11y">
              A11y
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/agile">
              Agile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/football">
              Football
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/react">
              React
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
