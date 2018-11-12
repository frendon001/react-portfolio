import React from 'react';

function Menu() {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Generic</a></li>
          <li><a href="">Elements</a></li>
        </ul>
        <a href="#banner" className="close">Close</a>
      </div>
    </nav>
  );
}

export default Menu;