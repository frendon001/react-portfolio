import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id="header" className="alt">
      <h1><Link to="/#">Fausto Rendon</Link></h1>
      <nav>
        <a href="#menu">Menu</a>
      </nav>
    </header>
  );
}

export default Header;