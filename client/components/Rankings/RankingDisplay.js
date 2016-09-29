import React from 'react';
import { fetchAnswers } from '../../actionCreators/rankingActions'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import { connect } from 'react-redux'



class Display extends React.Component {

componentWillMount() {
  if (this.props.rankings === null){
    this.props.fetchAnswers()
  }
}


renderList() {
  if(this.props.rankings === null) {
    return <div>loading</div>
  }
  return (
    this.props.rankings

  )
}


render() {
return(

  <ul className='list-group col-sm-4'
  onClick={this.props.fetchAnswers}>
  Click here to view Below
   {console.log('in render===*******===>',this.props.rankings)}
  {this.renderList()}
  </ul>
)
}

}



function mapStateToProps({ rankings }) {
  console.log('in mapstate====>',{ rankings })
  return {
    rankings: rankings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAnswers: fetchAnswers }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Display);
