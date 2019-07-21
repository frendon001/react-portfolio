import React from 'react';
import { Link } from 'react-router-dom';

import { projectSnapshots, experience } from './data/myPortfolioData';

function renderProjectSnapshots(snapshots) {
  return snapshots.map(snapshot => {
    return (
      <article key={`snapshot_${snapshot.name}`}>
        <Link to={`/project/${snapshot.id}`} className="image">
          <img
            src={`assets/images/snapshot_${snapshot.image}`}
            alt={snapshot.image}
          />
        </Link>
        <h3 className="major">{snapshot.name}</h3>
        <p>{snapshot.info}</p>
        <Link to={`/project/${snapshot.id}`} className="special">
          More details
        </Link>
      </article>
    );
  });
}

function ProjectSnapshots() {
  let isAlt = experience.length % 2 !== 0 ? '' : ' alt';
  return (
    <section id="project-snapshots" className={`wrapper${isAlt}`}>
      <div className="inner">
        <h2 className="major">My Projects</h2>
        <p>
          Here are few of my open source projects that are available on GitHub.
        </p>
        <section className="features">
          {renderProjectSnapshots(projectSnapshots)}
        </section>
      </div>
    </section>
  );
}

export default ProjectSnapshots;
