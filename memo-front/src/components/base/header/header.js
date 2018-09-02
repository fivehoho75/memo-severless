import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header mt-3 mb-auto">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Scratch</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navs" aria-controls="navs" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navs">
        <div className="navbar-nav ml-auto">
          <Link className="nav-item nav-link" to="/signup">Signup</Link>
          <Link className="nav-item nav-link" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;