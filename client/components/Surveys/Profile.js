import React, { Component, PropTypes} from 'react'
import { fetchAnswers } from '../../actionCreators/surveysActions'
import { bindActionCreators } from 'redux'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'



class Profile extends React.Component {
  static contextTypes= {
    router: PropTypes.object
  }

  componentWillMount() {
    if (!this.props.authenticated) browserHistory.push('/welcome');
    if (!this.props.surveysResponses){
      this.props.fetchAnswers()
    }
  }

  componentDidUpdate() {
    if (!this.props.authenticated) browserHistory.push('/welcome');
  }

  getValues (){
    const  Neighbors = this.props.surveysResponses.Neighbors;
  }



renderList() {
  const  userResponses = this.props.surveysResponses;

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
          <td>{userResponses.rentRank}</td>
        </tr>
         <tr>
          <td>Commute</td>
          <td>{userResponses.commuteRank}</td>
        </tr>
        <tr>
          <td>Fees</td>
          <td>{userResponses.feeRank}</td>
        </tr>
        <tr>
          <td>Apartment Type</td>
          <td>{userResponses.numberOfRoomsRank}</td>
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


      <table className="table">
        <thead>
          <tr>
            <th>Criteria</th>
            <th>Your Selections</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Rent Budget</td>
          <td>${userResponses.RentMin.value || 'None'} to ${userResponses.RentMax.value} </td>
        </tr>
          <tr>
            <td>Neighborhoods</td>
            <td>{userResponses.neighborhoodRank}</td>
          </tr>


           {/* COMMUTE NOT CURRENTLY IN SURVEY
             <tr>
            <td>Commute Range</td>
            <td>{userResponses.CommuteMin.value} to {userResponses.CommuteMax.value} </td>
          </tr>
          */}
          <tr>
            <td>Fees</td>
            <td>{userResponses.fees.value}</td>
          </tr>
          <tr>
            <td>Apartment Type</td>
            <td>{userResponses.numberOfRoomsRank}</td>
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
        {this.renderList()}
      </ul>
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    surveysResponses: state.surveysResponses.all,
    isAuth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAnswers }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
