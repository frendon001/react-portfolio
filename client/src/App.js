import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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
          <Route exact path="/project/:id" render={ProjectDetails} />
          <Route path="/" component={Footer} />
          {/* <Header/>
          <Menu/>
          <Banner/>
          <Experience/>
          <ProjectSnapshots />
          <Footer/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
