import React from 'react';

function renderExperienceSkills(props) {
  return(
    props.skills.map(skill => {
      return (
        <li className="experience-skills" key={`${props.keyname}_${skill}`}>
          {skill}
        </li>
      );
    })
  );
}



function ExperienceSkills(props) {
  return (
    <ul className="experience-list">
      {renderExperienceSkills(props)}
    </ul>
  );
}

export default ExperienceSkills;