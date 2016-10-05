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
      <div>
      key={userResponses.feeRank}
    <table className="table">
      <thead>
        <tr>
          <th>Criteria</th>
          <th>Ranking</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>Rent Budget</td>
        <td>{userResponses.rentRank}</td>
      </tr>
        <tr>
          <td>Neighborhoods</td>
          <td>{userResponses.neighborhoodRank}</td>
        </tr>
        <tr>
          <td>Fees</td>
          <td>{userResponses.feeRank}</td>
        </tr>
        <tr>
          <td>Commute</td>
          <td>{userResponses.commute}</td>
        </tr>
        <tr>
          <td>Amenities</td>
          <td>{userResponses.amenitiesRank}</td>
        </tr>        
        <tr>
          <td>Pets</td>
          <td>{userResponses.petRank}</td>
        </tr>





       </tbody>
      </table> 
      </div>    
      )

}

  render() {

    const  userResponses = this.props.surveysResponses;
    return(
      <div>
      <ul className='list-group col-sm-4'>
        YOUR SEARCH CRITTERIA RANKINGS:
        {console.log('in render===*******===>',   this.props.surveysResponses)}
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
