import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const LaunchCard = (props) => {
  const { flight_number, mission_name, launch_date_local, launch_success } = props.launch;
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4><span className={classNames({
            "text-success": launch_success,
            "text-danger": !launch_success
          })}>{mission_name}</span></h4>
          <p><Moment>{launch_date_local}</Moment></p>
        </div>
        <div className="col-md-3">
          <Link to={`/launches/${flight_number}`} className="btn btn-secondary">Launch Details</Link>
        </div>
      </div>
    </div>
  )
}

export default LaunchCard;
