import React, {Component, PropTypes} from 'react'
import { fetchAnswers } from '../../actionCreators/rankingActions'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import { connect } from 'react-redux'



class Display extends React.Component {

  static contextTypes= {
    router: PropTypes.object
  }

componentWillMount() {
    this.props.fetchAnswers()
}


renderList() {
  const  userRankings = this.props.rankings
  if(!this.props.rankings) {
    return <div>loading</div>
  }
  return (
   /*console.log('in HELPER =========***********=>',JSON.stringify(this.props.rankings), '=======',typeof userRankings )*/

    <li
    key={userRankings.id}
    className='list-group-item'>
    {userRankings.rent}
        <strong>{userRankings.amenities}</strong>
    </li>


  )
}


render() {
return(

  <ul className='list-group col-sm-4'
  onClick={this.props.fetchAnswers}>
  YOUR RANKINGS:
   {console.log('in render===*******===>',this.props.rankings)}

  {this.renderList()}
  </ul>
)
}

}



function mapStateToProps(state) {
  console.log('in mapstate==*****==>', state.rankings.all, state.auth.user_id)
  return {
    rankings: state.rankings.all,
    user_id: state.auth.user_id
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAnswers: fetchAnswers }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Display);
