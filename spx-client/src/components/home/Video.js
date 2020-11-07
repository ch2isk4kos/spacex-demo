import React from 'react';
import ReactPlayer from 'react-player';

const RightTop = () => {
  return (
    <>
      <ReactPlayer 
        url="https://www.youtube.com/watch?v=P1uHNRIo68M"
        playing={true}
        height="100%"
        width="100%" 
      />
    </>
  )
}

export default RightTop;
