import React from 'react';

function Menu() {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li><a href="#banner">Home</a></li>
          <li><a href="#wrapper">Generic</a></li>
          <li><a href="#project-snapshots">Elements</a></li>
        </ul>
        <a href="#banner" className="close">Close</a>
      </div>
    </nav>
  );
}

export default Menu;