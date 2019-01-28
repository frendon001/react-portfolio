import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuList from './MenuList';

function Menu() {
  
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <BrowserRouter>
            <Switch>
              <Route path="/project/:id" component={MenuList}/>
              <Route component={MenuList}/>
            </Switch>
          </BrowserRouter>
          
        </ul>
        <a href="#home" className="close">Close</a>
      </div>
    </nav>
  );
}

export default Menu;