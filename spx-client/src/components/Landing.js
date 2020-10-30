import React from 'react'
import { Link } from 'react-router-dom';
// import logo from '../spacex-logo-2.png';
import symbol from '../spacex-logo-3.png';
// import logo from '../spacex-logo-4.png';
// import logo from '../spacex-logo-5.png';
import logo from '../spacex-logo-6.png';
// import logo from '../spacex-logo-7.png';
import globe from '../hd0924.mov';
// import globe from '../hd0576.mov';
// import globe from '../Earth.mp4';
// import globe from '../Earth to Moon Flight.mov';
// import globe from '../Starfield_Fly_Through.mov';
import '../styles/Landing.css';

const Landing = () => {
  return (
    <section className="Landing">
      <div className="overlay"></div>
      
      <div className="video-bg">
        <video autoPlay loop muted>
          <source src={globe} type="video/mp4" />
        </video>
      </div>
      
      <div className="content">
        <img src={logo} alt="SpaceX" />
        <h1 className="mission-statment">to advance the future</h1>
        <p>The <em>object-fit</em> CSS property specifies how the contents of a replaced element should be fitted to the box established by its used height and width (from <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/object-fit">MDN</a>).</p>
        <Link to={"/home"} className="btn btn-success link">Launch</Link>
      </div>
    </section>
  );
}

export default Landing;