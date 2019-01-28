import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function Menu({match}) {
  const { url } = match;
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <BrowserRouter>
            <Switch>
              <Route path="/project/:id" render={() => {
                return (
                <>
                  <li><Link to="/#home">Home</Link></li>
                  <li><Link to="/#experience">Experience</Link></li>
                  <li><Link to="/#project-snapshots">Projects</Link></li>
                </>
                );
              }}/>
              <Route render={() => {
                return (
                <>
                  <li><Link to="#home">Home</Link></li>
                  <li><Link to="#experience">Experience</Link></li>
                  <li><Link to="#project-snapshots">Projects</Link></li>
                </>
                );
              }}/>
            </Switch>
          </BrowserRouter>
          <li><Link to={`${url}#contact`}>Contact Me</Link></li>
        </ul>
        <a href="#home" className="close">Close</a>
      </div>
    </nav>
  );
}

export default Menu;