import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const LAUNCHES_QUERY = gql`
  query LauncesQuery {
    launches: {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

export class Launches extends Component {
  render() {
    return (
      <div>
        <h1 classNName="display-4 my-3">Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {
            ({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>   // @TODO: add an animated loader
              if (error) console.log(error)             // @TODO: add error message for user
              console.log("data: ", data)
              
              return <h1>testing</h1>
            }
          }
        </Query>
      </div>
    )
  }
}

export default Launches;
