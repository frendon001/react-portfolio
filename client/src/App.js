import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import Banner from './Banner';
import Experience from './Experience';
import ProjectSnapshots from './ProjectSnapshots';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header/>
        <Menu/>
        <Banner/>
        <Experience/>
        <ProjectSnapshots />
        <Footer/>
      </div>
    );
  }
}

export default App;
