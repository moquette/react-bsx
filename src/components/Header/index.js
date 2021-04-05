/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.scss';

const Header = (props) => {
  const { title } = props;
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white text-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {title || 'RBSX'}
          </a>
          <button
            className="navbar-toggler collapsed border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div id="navbar" className="navbar-collapse collapse flex-grow-0">
            <ul className="navbar-nav mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
