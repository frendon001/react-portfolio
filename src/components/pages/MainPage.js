import React from 'react';

import Header from '../Header';
import Menu from '../Menu';
import Banner from '../Banner';
import Experience from '../Experience';
import ProjectSnapshots from '../ProjectSnapshots';
import Footer from '../Footer';

const MainPage = (props) => {
  const match = props.match;
  return (
    <div>
      <Header/>
      <Menu match={match}/>
      <Banner/>
      <Experience/>
      <ProjectSnapshots/>
      <Footer/>
  </div>
  );
}

export default MainPage;