import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProjectPage from './pages/ProjectPage';
import MainPage from './pages/MainPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="page-wrapper">
        <Switch>
          <Route path="/project/:id" component={ProjectPage} />
          <Route  path="/" component={MainPage}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
