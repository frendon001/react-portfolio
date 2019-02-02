import React from 'react';
import { Link } from 'react-router-dom';

function MenuList (props) {
  const { url } = props.match;
  return (
  <>
    <li><Link to="/#home">Home</Link></li>
    <li><Link to="/#experience">Experience</Link></li>
    <li><Link to="/#project-snapshots">Projects</Link></li>
    <li><Link to={`${url}#contact`}>Contact Me</Link></li>
  </>
  );
}

export default MenuList;