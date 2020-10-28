import React from 'react'
import { Link } from 'react-router-dom';
// import globe from '../Earth.mp4';
import logo from '../spacex-logo-2.png';
// import logo from '../spacex-logo-4.png';
import globe from '../hd0924.mov';
// import logo from '../spacex-logo-3.png';
// import globe from '../Starfield_Fly_Through.mov';
// import globe from '../506401051_1.mov';
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
        <h1>To Advance the Future</h1>
        <p>The <em>object-fit</em> CSS property specifies how the contents of a replaced element should be fitted to the box established by its used height and width (from <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/object-fit">MDN</a>).</p>
        <Link to={"/home"} className="btn btn-success link">Enter</Link>
      </div>
    </section>
  );
}

export default Landing;