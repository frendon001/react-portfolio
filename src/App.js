import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Menu from './Menu';
import Banner from './Banner';
import Experience from './Experience';
import ProjectSnapshots from './ProjectSnapshots';
import ProjectPage from './Pages/ProjectPage';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="page-wrapper">
        <Switch>
          <Route exact path="/" render={() => (
            <div>
                <Header/>
                <Menu/>
                <Banner/>
                <Experience/>
                <ProjectSnapshots/>
                <Footer/>
            </div>
            )} />
            
          
          <Route exact path="/project/:id" render={({match}) => 
            (
              <ScrollToTop>
            <ProjectPage match={match} />
            </ScrollToTop>
          )} />
          
          <Route render={() => (
            <div>
                <Header/>
                <Menu/>
                <Banner/>
                <Experience/>
                <ProjectSnapshots/>
                <Footer/>
            </div>
            )} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
