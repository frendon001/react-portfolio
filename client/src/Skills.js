import React from 'react';

function renderSkills(props) {
  return(
    props.skills.map(skill => {
      return (
        <li className="skill-item" key={`${props.keyname}_${skill}`}>
          {skill}
        </li>
      );
    })
  );
}



function Skills(props) {
  return (
    <ul className="skills-list">
      {renderSkills(props)}
    </ul>
  );
}

export default Skills;