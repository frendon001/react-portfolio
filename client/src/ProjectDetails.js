import React from 'react';
//import ExperienceHeader from './ExperienceHeader';
//import Skills from './Skills';
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
  const projectBannerStyle = {
    backgroundColor: '#2e3141'
  };
  const projectDetailsStyle = {
    marginTop: "0"
  };

  return (
    <>
      
      <section id="project-details" className="bottom-wrapper" style={projectDetailsStyle}>
        <div className="inner"> 
          
          <h2 className="major">{project.name}</h2>

          <img src={`/assets/images/${project.image}`} alt={project.name} className="image fit-med" />
          <p>{project.info}</p>
          <section >
            {
              //renderProjectDetails()
            }
          </section>
        </div>
      </section>
    </> 
  );
}

export default ProjectDetails;