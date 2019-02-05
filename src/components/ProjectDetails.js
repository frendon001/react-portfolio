import React from 'react';
import { Redirect } from 'react-router-dom';

import Skills from './Skills';
import { projects } from './data/myPortfolioData';

function ProjectDetails({match}) {
  const { id } = match.params;
  if(projects[id]){
    const project = projects[id];
    const projectDetailsStyle = {
      marginTop: "0"
    };

    return (
      <>
        <section id="project-details" className="bottom-wrapper" style={projectDetailsStyle}>
          <div className="inner"> 
            <h2 id="heading" className="major">{project.name}</h2>
            <img src={`/assets/images/${project.image}`} alt={project.name} className="image fit-med" />
            <section className="details">
              <p>{project.info}</p>
              <ul className="icons">
                <li >
                  <a className="icon fa-globe fa-2x" href={project.site} target="_blank" rel="noopener noreferrer"><span className="label">Globe</span></a>
                  <a href={project.site} target="_blank" rel="noopener noreferrer">{project.site}</a>
                </li>
                <li >
                  <a className="icon fa-github fa-2x" href={project.github} target="_blank" rel="noopener noreferrer"><span className="label">Github</span></a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a>
                </li>
              </ul>
              <Skills skills={project.skills} keyname={project.name}/>

                <p className="icon fa-arrow-left navigate-back" onClick={()=> window.history.back()}>
                  <span className="label">Arrow Left</span>
                  <span className="navigate-back-text" > Back To Projects</span>
                </p>

            </section>
          </div>
        </section>
      </> 
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default ProjectDetails;