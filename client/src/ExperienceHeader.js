import React from 'react';
import Skills from './Skills';

function ExperienceHeader(props) {
  return (
    <div className="content aboutme-grid-wrapper">
    <section className="about-sidebar">
      <h2 className="major">About Me</h2>
      <p>{props.about.aboutme}</p>
    </section>
    <div className="exp-group about-location">
      <h3>Current Location:</h3>
      <p>{props.about.location}</p>
    </div>
    <div className="exp-group about-education">
      <h3>Education:</h3>
      <p>{props.about.education}</p>
    </div>
    <div className="exp-group about-skills">
      <h3>Tehnical Skills:</h3>
      <Skills skills={props.about.skills} keyname="exp_header"/>
    </div>
    </div>
  );
}

export default ExperienceHeader;