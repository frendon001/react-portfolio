import React from 'react';
//import ExperienceHeader from './ExperienceHeader';
import Skills from './Skills';
import { projectSnapshots } from './myPortfolioData.json';

function renderProjectSnapshots(snapshots) {
  return(
    snapshots.map(snapshot => {
      return (
        <article key={`snapshot_${snapshot.name}`}>
          <a href="/" className="image"><img src={`assets/images/${snapshot.image}`} alt={snapshot.image} /></a>
          <h3 className="major">{snapshot.name}</h3>
          <p>{snapshot.info}</p>
          <Skills skills={snapshot.skills} keyname={snapshot.name}/>
          <a href="/" className="special">More details</a>
        </article>
      );
    })
  )
}

function ProjectSnapshots() {
  return (
    <section id="project-snapshots" className="wrapper alt">
      <div className="inner">
        <h2 className="major">My Projects</h2>
        <p>Here are few of my open source projects that are available on GitHub.</p>
        <section className="features">
          {renderProjectSnapshots(projectSnapshots)}
        </section>
      </div>
    </section>
  );
}

export default ProjectSnapshots;