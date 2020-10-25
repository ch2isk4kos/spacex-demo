import React from 'react';
import { useQuery, gql } from '@apollo/client';
import LaunchCard from './LaunchCard';

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
  console.log("data: ", data);
  return (
    <>
      <h1 classNName="display-4 my-3">Launches</h1>
      {
        data.launches.map(launch => {
           return <LaunchCard key={launch.flight_number} launch={launch} />
        })
      }
    </>
  )
}

// class Launches extends Component {
//   render() {
//     const { loading, error, data } = useQuery(LAUNCHES_QUERY);
//     if (loading) return <h3>Loading...</h3>;                              // @TODO: add an animated loader
//     if (error) return <h3>Something Went Wrong: {error.message}</h3>;     // @TODO: add error message for user
//     console.log("data: ", data);

//     return (data && data.launches ? (
//       <div>
//         <h1 classNName="display-4 my-3">Launches</h1>
//          {
//            data.launches.map(launch => {
//               return <Launch key={launch.flight_number} launch={launch} />
//            })
//          }
//       </div>
//     ) : (
//       <div>
//         <h3>Loading</h3>
//       </div>
//     ));
//   }
// }

// class Launches extends Component {
//   render() {
//     const { loading, error, data } = useQuery(LAUNCHES_QUERY);
//     if (loading) return <h3>Loading...</h3>;                              // @TODO: add an animated loader
//     if (error) return <h3>Something Went Wrong: {error.message}</h3>;     // @TODO: add error message for user
//     console.log("data: ", data);

//     return (
//       <>
//         <h1 classNName="display-4 my-3">Launches</h1>
//         {
//           data.launches.map(launch => {
//              <Launch key={launch.flight_number} launch={launch} />
//           })
//         }
//       </>
//     )
//   }
// }

// class Launches extends Component {
//   render() {
//     const { loading, error, data } = useQuery(LAUNCHES_QUERY);
//     if (loading) return <h3>Loading...</h3>;                              // @TODO: add an animated loader
//     if (error) return <h3>Something Went Wrong: {error.message}</h3>;     // @TODO: add error message for user
//     console.log("data: ", data);
//     return (
//       <div>
//         <h1 classNName="display-4 my-3">Launches</h1>
//         {
//           data.launches.map(launch => {
//              <Launch key={launch.flight_number} launch={launch} />
//           })
//         }
//       </div>
//     )
//   }
// }

// class Launches extends Component {
//   render() {
//     return (
//       <div>
//         <h1 classNName="display-4 my-3">Launches</h1>
//         <Query query={LAUNCHES_QUERY}>
//           {
//             ({ loading, error, data }) => {
//               if (loading) return <h4>Loading...</h4>   // @TODO: add an animated loader
//               if (error) console.log(error)             // @TODO: add error message for user
//               console.log("data: ", data)
//               // return <h1>testing</h1>
//               return (
//                 <div>
//                   {
//                     data.launches.map(launch => {
//                       <Launch key={flight_launch_number} launch={launch} />
//                     })
//                   }
//                 </div>
//               )
//             }
//           }
//         </Query>
//       </div>
//     )
//   }
// }

export default Launches;
