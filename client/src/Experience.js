import React from 'react';
import portfolioData from './myPortfolioData.json';

function renderExperienceInfo(experience) {
  return(
    experience.map((exp,index) => {
      let isAlt= ((index+1) % 2 === 0) ? '':'alt';
      return (
        <section key={exp.id} className={`wrapper spotlight style${index+1} ${isAlt}`}>
          <div className="inner">
            <img className="image" src="../assets/images/pic01.jpg" alt={exp.company} />
            <div className="content">
              <h2 className="major">{exp.title}</h2>
              <div className="major">{exp.date}</div>
              <p>{exp.description}</p>
            </div>
          </div>
        </section>
      );
    })
  )
}

function Experience() {
  return (
    <section id="wrapper">
      {renderExperienceInfo(portfolioData.experience)}
    </section>
  );
}

export default Experience;