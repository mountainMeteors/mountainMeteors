import React from 'react';
import axios from 'axios';

class SurveyListEntry extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', this.props.survey);
  }

  render() {
    return (
      <div>
        {this.props.survey.name} <br/>
        {this.props.survey.address}
      </div>
    )
  }
};

export default SurveyListEntry;
