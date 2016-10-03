import React from 'react';
import { Component, PropTypes } from 'react';
const ReactDOM = require('react-dom');
import Slider from 'react-rangeslider'
import { postRankings } from '../../actionCreators/rankingActions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Select from 'react-select';
import { Grid, Col, Row } from 'react-bootstrap';
import Multiselect from 'react-bootstrap-multiselect'



const Neighborhoods = [
	{ label: 'West Village', value: 'West Village' },
	{ label: 'East Village', value: 'East Village' },
	{ label: 'Midtown', value: 'Midtown' },
	{ label: 'Flatiron', value: 'Flatiron' },
];



const Amenities = [
	{ label: 'bike', value: 'bike' },
	{ label: 'garage', value: 'garage' },
];

const Pets = [
	{ label: 'YES', value: 'YES' },
	{ label: 'NO', value: 'NO' },
];


const Fees = [
	{ label: 'YES', value: 'YES' },
	{ label: 'NO', value: 'NO' },
];
const RentMin = [
	{ label: '10', value: '10' },
	{ label: '20', value: '20' },
];
const RentMax = [
	{ label: '1000', value: '1000' },
  { label: '2000', value: '2000' },
];
const CommuteMin = [
	{ label: '10', value: '10' },
	{ label: '20', value: '20' },
];
const CommuteMax = [
	{ label: '1000', value: '1000' },
  { label: '2000', value: '2000' },
];


class RankingSlider extends Component {

  constructor ( context) {
    super( context)
    this.state = {
      Neighborhoods: Neighborhoods,
        neighborhood: 0,

      RentMin : RentMin  ,
      RentMax: RentMax,
        rent: 0,

      Pets: Pets,
        pets: 0,

      Fees: Fees,
        Fees: 0,

      Amenities: Amenities,
      amenities: 0,

      commute: 0
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };

// state[criteria] = value
  handleChange = (criteria,value) => {
    console.log('======',criteria, value)
    this.setState({
      [criteria]: value
    })
  }

  onFormSubmit (event) {              //onSubmit fn
    event.preventDefault();           //Stops refresh
    var rankings = {            //Obj holding user details
      neighborhood: this.state.neighborhood,
      Neighborhoods: this.state.Neighborhoods,
      rent: this.state.rent,
      pets: this.state.pets,
      amenities: this.state.amenities,
      fees: this.state.fees,
      commute: this.state.commute
    }
    console.log("this+++++",this.props.user_id)
    console.log(rankings)
    this.props.postRankings(rankings, this.props.user_id)
      // .then (() => {
      //   this.context.router.push('/');
      // })
  }

  render () {
    const { value } = this.state
    return (
      <div>
      <form onSubmit={this.onFormSubmit}>
      /*neighborhood*/
          /*SYRVEY*/
      <h4>Let's pick your fav neighborhoods </h4>
      <Multiselect
        data={this.state.Neighborhoods}
       multiple />

      <div className='horizontal-slider'>
      <h4>How important is neighborhood ?</h4>
      <Slider
      min={0}
      max={5}
      value={this.state.neighborhood}
      onChange={(value) => this.handleChange("neighborhood",value)}
      />
      <div className='value'>
      Ranking: {this.state.neighborhood}
      </div>
      <hr />
      </div>


      /*Rent */

      /*SURVEY*/

      <Multiselect data={this.state.RentMin}/>
      <Multiselect data={this.state.RentMax} />

      <div className='horizontal-slider'>
      <h4>How important is rent budget from 1 to 5?</h4>
      <Slider
      min={0}
      max={5}
      value={this.state.rent}
      onChange={(value) => this.handleChange("rent", value)}
      />
      <div className='value'>Ranking:{this.state.rent}</div>
      <hr />
      </div>


      /*Pets*/
      <div>

      <h4> Furry Little Friends ?? </h4>
      <Multiselect data={this.state.Pets} />

      <div className='horizontal-slider'>
      <h4>How important is having pet accommodation ?</h4>
      <Slider
      min={0}
      max={5}
      value={this.state.pets}
      onChange={(value) => this.handleChange("pets", value)}
      />
      <div className='value'>Ranking:{this.state.pets}</div>
      <hr />
      </div>


    </div>


      /*amenities*/
      <div className='horizontal-slider'>
      <h4>How important are amenities ?</h4>
      <Slider
      min={0}
      max={5}
      value={this.state.amenities}
    onChange={(value) => this.handleChange("amenities", value)}
      />
      <div className='value'>Ranking: {this.state.amenities}</div>
      <hr />
      </div>
      <h4>Rank importance  </h4>
      <Multiselect data={this.state.Amenities}
       multiple />


      /*amenities*/

      <div className='horizontal-slider'>
      <h4>How important is fees ? </h4>
      <Slider
      min={0}
      max={5}
      value={this.state.fees}
    onChange={(value) => this.handleChange("fees", value)}
      />
      <div className='value'>
      Ranking:{this.state.fees}</div>
      <hr />
      </div>

      /*commute*/
      <div className='horizontal-slider'>
      <h4>How important is having commute ?</h4>
      <Slider
      min={0}
      max={5}
      value={this.state.commute}
          onChange={(value) => this.handleChange("commute", value)}
      />
    <div className='value'>Ranking: {this.state.commute}</div>
      <hr />
        </div>

        <button type="submit" className="btn btn-block btn-primary">Submit</button>

        </form>
          </div>


    )
  }
}

function mapStateToProps(state) {
  console.log('in mapstate==*****==>', state.auth.user_id)
  return {
    user_id: state.auth.user_id,
    isAuth: state.isAuth
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postRankings }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(RankingSlider);
