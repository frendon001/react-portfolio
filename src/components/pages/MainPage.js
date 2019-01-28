import React, { Component } from 'react';

import Header from '../Header';
import Menu from '../Menu';
import Banner from '../Banner';
import Experience from '../Experience';
import ProjectSnapshots from '../ProjectSnapshots';
import Footer from '../Footer';

class MainPage extends Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "/assets/js/projectDetails.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <>
        <Header/>
        <Menu/>
        <Banner/>
        <Experience/>
        <ProjectSnapshots/>
        <Footer/>
      </>
    );
    }
}

export default MainPage;