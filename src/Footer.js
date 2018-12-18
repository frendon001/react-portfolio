import React from 'react';

function getCurrentYear() {
  let year = new Date();
  return year.getFullYear();
}

function Footer() {
  return (
    <section id="contact" >
    <div id="footer">
        <div className="inner">
          <h2 className="major">Get in touch</h2>
          <p>I am currently looking for opportunities in Software Engineering or Full Stack Development. I am also interested in collaborating in open source projects.</p>
          <ul className="contact">
            <li className="fa-envelope"><a href="mailto:contact@faustorendon.com">contact@faustorendon.com</a></li>
            <li className="fa-github"><a href="https://github.com/frendon001">github.com/frendon001</a></li>
            <li className="fa-linkedin"><a href="https://www.linkedin.com/in/faustorendon/">linkedin.com/in/faustorendon/</a></li>
          </ul>
          <ul className="copyright">
            <li>&copy; {getCurrentYear()} All rights reserved.</li><li><small>Design: HTML5 UP</small></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;