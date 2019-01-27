import React from 'react';

import Header from '../Header';
import Menu from '../Menu';
import Banner from '../Banner';
import Experience from '../Experience';
import ProjectSnapshots from '../ProjectSnapshots';
import Footer from '../Footer';

const MainPage = () => {
  return (
    <div>
      <Header/>
      <Menu/>
      <Banner/>
      <Experience/>
      <ProjectSnapshots/>
      <Footer/>
  </div>
  );
}

export default MainPage;