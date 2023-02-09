import React from 'react';
import ExperienceHeader from './ExperienceHeader';
import Skills from './Skills';
import myPortfolioData from './data/myPortfolioData.json';

const { experience, about } = myPortfolioData;

const descItemsStyle = {
  listStyle: 'circle',
};

function descriptionItems(items = [], company) {
  return items.map((item, index) => {
    return <li key={`${company}_${index}`}>{item}</li>;
  });
}

function renderExperienceInfo(experience) {
  return experience.map((exp, index) => {
    let isAlt = (index + 2) % 2 !== 0 ? '' : 'alt';
    return (
      <section
        key={exp.id}
        className={`wrapper spotlight style${index + 2} ${isAlt}`}
      >
        <div className="inner">
          <img
            className={`image ${exp.useWhiteBg ? 'white-bg' : ''}`}
            src={exp.image}
            alt={exp.company}
          />
          <div className="content">
            <h2 className="major">{exp.title}</h2>
            <h4>{exp.date}</h4>
            <p>{exp.description}</p>
            <div>
              <ul style={descItemsStyle}>
                {descriptionItems(exp.descriptionItems, exp.id)}
              </ul>
            </div>
            <Skills skills={exp.skills} keyname={exp.id} />
          </div>
        </div>
      </section>
    );
  });
}

function Experience() {
  return (
    <section id="experience">
      <div id="wrapper" className="experience">
        <section className={`wrapper`}>
          <div className="inner">
            <ExperienceHeader about={about} />
          </div>
        </section>
        {renderExperienceInfo(experience)}
      </div>
    </section>
  );
}

export default Experience;
