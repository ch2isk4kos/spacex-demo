import React from 'react';
import { useQuery, gql } from '@apollo/client';
import LaunchCard from './LaunchCard';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h3>Loading...</h3>;                              // @TODO: add an animated loader
  if (error) return <h3>Something Went Wrong: {error.message}</h3>;     // @TODO: add error message for user
  console.log("launches: ", data);
  return (
    <div>
      <MissionKey />
      <h1 className="display-4 my-3">Launches</h1>
      {
        data.launches.map(launch => {
           return <LaunchCard key={launch.flight_number} launch={launch} />
        })
      }
    </div>
  )
}

export default Launches;
