import React from 'react';
import ExperienceSkills from './ExperienceSkills';

function ExperienceHeader(props) {
  return (
    <div className="content">
      <div className="exp-group">
        <h3>Current Location:</h3>
        <p>{props.about.location}</p>
      </div>
      <div className="exp-group">
        <h3>Education:</h3>
        <p>{props.about.education}</p>
      </div>
      <div className="exp-group">
        <h3>Tehnical Skills:</h3>
        <ExperienceSkills skills={props.about.skills} keyname="exp_header"/>
      </div>
    </div>
  );
}

export default ExperienceHeader;