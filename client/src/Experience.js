import React from 'react';
import ExperienceSkills from './ExperienceSkills';
import portfolioData from './myPortfolioData.json';

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
              <ExperienceSkills skills={exp.skills} keyname={exp.id}/>
            </div>
          </div>
        </section>
      );
    })
  )
}

function Experience() {
  return (
    <section id="wrapper" className="experience">
      <section className={`wrapper spotlight style1`}>
        <div className="inner">
          <div className="content">
          <div className="exp-group">
            <h3>Current Location:</h3>
            <p>Los Angeles, CA</p>
          </div>
          <div className="exp-group">
            <h3>Education:</h3>
            <p>B.S. Electrical Engineering, UCLA</p>
          </div>
          <div className="exp-group">
            <h3>Tehnical Skills:</h3>
            <p></p>
          </div>
          </div>
        </div>
      </section>
      {renderExperienceInfo(portfolioData.experience)}
    </section>
  );
}

export default Experience;