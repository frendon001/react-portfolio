import React from 'react';
import ExperienceHeader from './ExperienceHeader';
import Skills from './Skills';
import {experience, about} from './data/myPortfolioData';

function renderExperienceInfo(experience) {
  return(
    experience.map((exp,index) => {
      let isAlt= ((index+2) % 2 !== 0) ? '':'alt';
      return (
        <section key={exp.id} className={`wrapper spotlight style${index+2} ${isAlt}`}>
          <div className="inner">
            <img className="image" src={exp.image} alt={exp.company} />
            <div className="content">
              <h2 className="major">{exp.title}</h2>
              <h4>{exp.date}</h4>
              <p>{exp.description}</p>
              <Skills skills={exp.skills} keyname={exp.id}/>
            </div>
          </div>
        </section>
      );
    })
  )
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