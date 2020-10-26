import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>
      <Link to={`/home`} className="btn btn-secondary">Enter</Link>
    </div>
  )
}

export default Landing;
