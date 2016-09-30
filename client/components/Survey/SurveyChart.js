import React from 'react';
import Axios from 'axios';
import {FormGroup, FormControl, ControlLabel, Button, form} from 'react-bootstrap';


class SurveyChart extends React.Component {
  constructor() {
    super()
    this.loadSurveyInfo()
    }

loadSurveyInfo(){
  Axios.get('/api/userSurvey')
  .then((response) => {
    response.data.map((room) => {
      console.log('Get info request')
      console.log(response.status)
      console.log(response.data)
      return (
        <div>
          <td> room.id </td>
          <td> room.price </td>
          <td> room.amenities </td>
        </div>
      )
    })
  })
}

render() {
  return (
      <div>
        <h1> Title </h1>
        <table className = 'table'>
          <thead>
            <tr>
              <th> ID </th>
              <th> Price</th>
              <th> Bedrooms </th>
              <th> Amenities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id='list'> </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }


};

export default SurveyChart;
