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
      NeighborhoodsSelected: [],
      neighborhoodRank: 5,

      Fees: Fees,
      FeesSelected: null,
      feeRank: 5,

      Pets: Pets,
      PetSelected: null,
      petRank: 5,

      RentMinSelected: null,
      RentMin : RentMin,
      RentMaxSelected: null,
      RentMax: RentMax,
      rentRank: 5,

      amenitiesRank: 5,
      amenitiesSelected: [],
      Amenities: Amenities,

      commute: 5
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

  onFormSubmit = (event)=> {              //onSubmit fn
    event.preventDefault();           //Stops refresh
    var rankings = {            //Obj holding user details
      neighborhoodRank: this.state.neighborhoodRank,
      Neighborhoods: this.state.NeighborhoodsSelected,

      rentRank: this.state.rentRank,
      RentMin: this.state.RentMinSelected,
      RentMax: this.state.RentMaxSelected,

      petRank: this.state.petRank,
      Pets: this.state.PetSelected,

      Amenities: this.state.amenitiesSelected,
      amenitiesRank: this.state.amenitiesRank,

      feeRank: this.state.feeRank,
      fees: this.state.FeesSelected,

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
          <h4>Let's pick your fav neighborhoods </h4>
          <Select
            name="form-field-name"
            value={this.state.NeighborhoodsSelected}
            multi={true}
            options={Neighborhoods}
            onChange={(value) => this.handleChange("NeighborhoodsSelected", value)}
            />

          <div className='horizontal-slider'>
            <h4>Rank neighborhoods ?</h4>
            <Slider
              min={0}
              max={5}
              value={this.state.neighborhoodRank}
              onChange={(value) => this.handleChange("neighborhoodRank",value)}
              />
            <div className='value'>
              Ranking: {this.state.neighborhoodRank}
            </div>
            <hr />
          </div>

          //FEES
          <Select
            name="form-field-name"
            value={this.state.FeesSelected}
            options={Fees}
            onChange={(value) => this.handleChange("FeesSelected", value)}
            />
          <div className='horizontal-slider'>
            <h4>How important is fees ? </h4>
            <Slider
              min={0}
              max={5}
              value={this.state.feeRank}
              onChange={(value) => this.handleChange("feeRank", value)}
              />
            <div className='value'>
              Ranking:{this.state.feeRank}</div>
            <hr />
          </div>

          /*your rent budget */
          <Select
            name="form-field-name"
            value={this.state.RentMinSelected}
            options={RentMin}
            onChange={(value) => this.handleChange("RentMinSelected", value)}
            />
            <Select
              name="form-field-name"
              value={this.state.RentMaxSelected}
              options={RentMax}
              onChange={(value) => this.handleChange("RentMaxSelected", value)}
              />

          <div className='horizontal-slider'>
            <h4>How important is rent budget from 1 to 5?</h4>
            <Slider
              min={0}
              max={5}
              value={this.state.rentRank}
              onChange={(value) => this.handleChange("rentRank", value)}
              />
            <div className='value'>Ranking:{this.state.rentRank}</div>
            <hr />
          </div>


          /*Pets*/
          <div>

            <h4> Furry Little Friends ?? </h4>
            <Select
                name="form-field-name"
                value={this.state.PetSelected}
                options={Pets}
                onChange={(value) => this.handleChange("PetSelected", value)}
                />

            <div className='horizontal-slider'>
              <h4>Rank pet accommodation ?</h4>
              <Slider
                min={0}
                max={5}
                value={this.state.petRank}
                onChange={(value) => this.handleChange("petRank", value)}
                />
              <div className='value'>Ranking:{this.state.petRank}</div>
              <hr />
            </div>


          </div>


          /*amenities*/
          <Select
            name="form-field-name"
            value={this.state.amenitiesSelected}
            multi={true}
            options={Amenities}
            onChange={(value) => this.handleChange("amenitiesSelected", value)}
            />
          <div className='horizontal-slider'>
            <h4>How important are amenities ?</h4>
            <Slider
              min={0}
              max={5}
              value={this.state.amenitiesRank}
              onChange={(value) => this.handleChange("amenitiesRank", value)}
              />
            <div className='value'>Ranking: {this.state.amenitiesRank}</div>
            <hr />
          </div>


          /*commute*/
          <div className='horizontal-slider'>
            <h4>Your ideal commute time?</h4>
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
