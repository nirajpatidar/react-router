import React from 'react';
import {Link} from 'react-router-dom';
function Header() {
  return (
    <nav className="navbar navbar-expand-lg top-navigation">
      <a className="navbar-brand" href="javascript:void(0)">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/nav">Navigation</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
