import React, {Component, PropTypes} from 'react'
import { fetchAnswers } from '../../actionCreators/surveysActions'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { connect } from 'react-redux'



class Display extends React.Component {
  static contextTypes= {
    router: PropTypes.object
  }

  componentWillMount() {
    console.log('hererr')
    if (!this.props.surveysResponses){
    this.props.fetchAnswers()
  }
}


renderList() {
  const  userResponses = this.props.surveysResponses;
  console.log('herererere', userResponses)
  if (!this.props.surveysResponses) {
    return <div>loading</div>
  }

    return (
      <li
      key={userResponses.feeRank}
      className="list-group-item">
      Commute: {userResponses.commute} 
      Fees: {userResponses.feeRank}
      </li>
      )

}

  render() {
    return(
      <div>
      <ul className='list-group col-sm-4'>
        YOUR RANKINGS:
        {console.log('in render===*******===>',  typeof this.props.surveysResponses)}
        {this.renderList()}
      </ul>
      </div>
    )
  }

}


function mapStateToProps(state) {
  console.log('in mapstate==*****==>', typeof state.surveysResponses.all)
  return {
    surveysResponses: state.surveysResponses.all,
    isAuth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAnswers }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Display);
