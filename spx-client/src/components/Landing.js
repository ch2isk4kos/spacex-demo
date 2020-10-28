import React from 'react'
import { Link } from 'react-router-dom';
// import globe from '../Earth.mp4';
import logo from '../spacex-logo-2.png';
import globe from '../hd0924.mov';
// import logo from '../spacex-logo-2.png';
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
        <h1>VIDEO ON BACKGROUND</h1>
        <img src={logo} alt="SpaceX" />
        <p>The <em>object-fit</em> CSS property specifies how the contents of a replaced element should be fitted to the box established by its used height and width (from <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/object-fit">MDN</a>).</p>
        <Link to={"/home"} className="btn btn-success link">Enter</Link>
      </div>
    </section>
  );
}

// const Landing = () => {
//   return (
//     <section className="Landing">
//       <div className="video-bg-wrap">
//         <video
//           autoPlay
//           muted
//           loop
//           style={{
//             position: "fixed",
//             width: "100%",
//             height: "100%",
//             left: 0,
//             top: 0,
//             transition: "opacity, 2s ease-in-out"
//           }}>
//           <source src={globe} type="video/mp4" />
//           <div className="LandingOverlay"></div>
//           <div className="LandingContent">
//             <img src={logo} alt="SpaceX" />
//             <span className="link"><Link to={"/home"} className="btn btn-success">Enter</Link></span>
//           </div>
//         </video>
//       </div>
//     </section>
//   );
// }

export default Landing;