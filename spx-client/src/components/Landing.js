import React from 'react'
// import { Link } from 'react-router-dom';
// import globe from '../Earth.mp4';
import globe from '../hd0924.mov';
// import globe from '../Starfield_Fly_Through.mov';
// import globe from '../506401051_1.mov';
import '../styles/Landing.css';

const Landing = () => {
  return (
    <header className="Landing">
      <video
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          width: "100%",
          left: 0,
          top: 0,
          // opacity: this.state.loading ? 0 : 1,
          transition: "opacity, 2s ease-in-out"
        }}
      >
        <source src={globe} type="video/mp4" />
      </video>
    </header>
  );
}

export default Landing;