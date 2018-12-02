import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function Menu() {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <BrowserRouter>
            <Switch>
              <Route exact path="/project/:id" render={() => {
                return (
                <>
                  <li><Link to="/#banner">Home</Link></li>
                  <li><Link to="/#wrapper">Experience</Link></li>
                  <li><Link to="/#project-snapshots">Projects</Link></li>
                </>
                );
              }}/>
              <Route render={() => {
                return (
                <>
                  <li><Link to="#banner">Home</Link></li>
                  <li><Link to="#wrapper">Experience</Link></li>
                  <li><Link to="#project-snapshots">Projects</Link></li>
                </>
                );
              }}/>
            </Switch>
          </BrowserRouter>
          <li><Link to="#footer">Contact Me</Link></li>
        </ul>
        <a href="#banner" className="close">Close</a>
      </div>
    </nav>
  );
}

export default Menu;