import React from 'react';
import classNames from 'classnames';

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
          <p>{launch_date_local}</p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary">Launch Details</button>
        </div>
      </div>
    </div>
  )
}

export default LaunchCard;
