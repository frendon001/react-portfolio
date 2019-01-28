import React, { Component } from 'react';

import Header from '../Header';
import Menu from '../Menu';
import ProjectDetails from '../ProjectDetails';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';

class ProjectPage extends Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "/assets/js/projectDetails.js";
    script.async = true;
    document.body.appendChild(script);
    window.scrollTo(0, 0);
  }
  render() {
    const match = this.props.match;
    return (
      <ScrollToTop>
        <Header/>
        <Menu/>
        <ProjectDetails match={match}/>
        <Footer/>
      </ScrollToTop>
    );
  }
}

export default ProjectPage;