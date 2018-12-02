import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Menu from './Menu';
import Banner from './Banner';
import Experience from './Experience';
import ProjectSnapshots from './ProjectSnapshots';
import ProjectDetails from './ProjectDetails';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="page-wrapper">
          
            <Route path="/" component={Header} />
            <Route path="/" component={Menu} />
            <Route exact path="/" component={Banner} />
            <Route exact path="/" component={Experience} />
            <Route exact path="/" component={ProjectSnapshots} />
            <ScrollToTop >
              <Route exact path="/project/:id" render={ProjectDetails} />
            </ScrollToTop>
            <Route path="/" component={Footer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
