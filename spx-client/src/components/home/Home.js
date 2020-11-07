import React from 'react';
import Left from './Left';
import Video from './Video';
import RightBottom from './RightBottom';
import '../../styles/Home.css'

const Home = () => {
  return (
    <div className="Home">
      <div className="home-left">
        <Left />
      </div>
      <div className="home-right">
        <div className="right-top">
          <Video />
        </div>
        <div className="right-bottom"> 
          <RightBottom />
        </div>
      </div>
    </div>
  )
}

export default Home;
