import React, { Component } from 'react';

import Header from '../Header';
import Menu from '../Menu';
import ProjectDetails from '../ProjectDetails';
import Footer from '../Footer';
//import ScrollToTop from '../ScrollToTop';

class ProjectPage extends Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "/assets/js/projectDetails.js";
    script.async = true;
    document.body.appendChild(script);
}
  render() {
    const match = this.props.match;
    return (
      <div>
      <Header/>
      <Menu/>
      <ProjectDetails match={match}/>
      <Footer/>
      </div>
    );
  }
}

export default ProjectPage;