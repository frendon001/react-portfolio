import React from 'react';
//import ExperienceHeader from './ExperienceHeader';
//import ExperienceSkills from './ExperienceSkills';
import { projectSnapshots } from './myPortfolioData.json';

function renderProjectSnapshots(snapshots) {
  return(
    snapshots.map(snapshot => {
      return (
        <article key={`snapshot_${snapshot.name}`}>
          <a href="/" class="image"><img src={`assets/images/${snapshot.image}`} alt={snapshot.image} /></a>
          <h3 class="major">{snapshot.name}</h3>
          <p>{snapshot.info}</p>
          <a href="/" class="special">More details</a>
        </article>
      );
    })
  )
}

function ProjectSnapshots() {
  return (
    <section id="project-snapshots" class="wrapper alt">
      <div class="inner">
        <h2 class="major">My Projects</h2>
        <p>Here are few of my open source projects that are available on GitHub.</p>
        <section class="features">
          {renderProjectSnapshots(projectSnapshots)}
        </section>
      </div>
    </section>
  );
}

export default ProjectSnapshots;