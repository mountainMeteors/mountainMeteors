import React, {Component, PropTypes} from 'react'
import { fetchAnswers } from '../../actionCreators/rankingActions'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { connect } from 'react-redux'



class Display extends React.Component {

  static contextTypes= {
    router: PropTypes.object
  }

componentWillMount() {
  // if (!this.props.isAuth){
  //   this.context.router.push('/')
  // }
  console.log(this.props.user_id);
    this.props.fetchAnswers(this.props.user_id)
}

componentDidUpdate(){
  console.log('ranking updated !!!!!');
  this.props.fetchAnswers(this.props.user_id)
}

renderList() {
  const  userRankings = this.props.rankings
  if(!this.props.rankings) {
    return <div>loading</div>
  }
  return (
   /*console.log('in HELPER =========***********=>',JSON.stringify(this.props.rankings), '=======',typeof userRankings )*/

    <li
    key={userRankings.amenities}
    className='list-group-item'>
    Rent Budget {userRankings.rent}
        <strong>Amenities{userRankings.amenities}</strong>
    </li>


  )
}


render() {
return(

  <ul className='list-group col-sm-4'>

  YOUR RANKINGS:
 {/*console.log('in render===*******===>',this.props.rankings)*/}

  {this.renderList()}
  </ul>
)
}

}



function mapStateToProps(state) {
  console.log('in mapstate==*****==>',state.auth.user_id)
  return {
    rankings: state.rankings.all,
    user_id: state.auth.user_id,
    isAuth: state.auth.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAnswers }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Display);
