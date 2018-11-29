import React from 'react';
//import ExperienceHeader from './ExperienceHeader';
import Skills from './Skills';
import { projects } from './myPortfolioData.json';

// function renderProjectDetails(snapshots) {

//   return(
//     snapshots.map(snapshot => {
//       return (
//         <article key={`snapshot_${snapshot.name}`}>
//           <a href="/" className="image"><img src={`assets/images/${snapshot.image}`} alt={snapshot.image} /></a>
//           <h3 className="major">{snapshot.name}</h3>
//           <p>{snapshot.info}</p>
//           <Skills skills={snapshot.skills} keyname={snapshot.name}/>
//           <a href="/" className="special">More details</a>
//         </article>
//       );
//     })
//   )
// }

function ProjectDetails({match}) {
  const { id } = match.params;
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
                <a className="icon fa-globe fa-2x" href={project.site}><span className="label">Globe</span></a>
                <a href={project.site}>{project.site}</a>
              </li>
              <li >
                <a className="icon fa-github fa-2x" href={project.github}><span className="label">Github</span></a>
                <a href={project.github}>{project.github}</a>
              </li>
            </ul>
            <Skills skills={project.skills} keyname={project.name}/>
          </section>
        </div>
      </section>
    </> 
  );
}

export default ProjectDetails;