import React from 'react';
import axios from 'axios';
import SurveyListEntry from './SurveyListEntry';

const getUserInfo = function(id) {
  axios.get('/user/survey/' + id, {
    params: {
      id: id
    }
  })
  .then(function (response) {
    //Set state
    console.log('axios response', response);
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
}

class SurveyList extends React.Component {
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      surveys: [ //Placeholder
        {
          name: 'johnny',
          address: '123 goober st'
        },
        {
          name: 'sally',
          address: '456 shenanigans ave'
        }
      ]
    }
  }

  componentWillMount() {
    console.log("Assembling user's surveys");
    // this.setState({
    //   surveys: getUserInfo(1) //Static id
    // });
  }

  render() {
    return (
      <div>
        {this.state.surveys.map(survey => <SurveyListEntry survey={survey} />)}
      </div>
    )
  }
};

export default SurveyList;
