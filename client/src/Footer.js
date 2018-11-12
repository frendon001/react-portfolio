import React from 'react';

function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <p>I am currently looking for opportunities in Software Engineering or Full Stack Development. I am also interested in collaborating in open source projects.</p>
        <ul className="contact">
          <li className="fa-envelope"><a href="#">information@untitled.tld</a></li>
          <li className="fa-github"><a href="#">twitter.com/untitled-tld</a></li>
          <li className="fa-linkedin"><a href="#">facebook.com/untitled-tld</a></li>
        </ul>
        <ul className="copyright">
          <li>&copy; All rights reserved.</li><li><small>Design: <a href="http://html5up.net">HTML5 UP</a></small></li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;