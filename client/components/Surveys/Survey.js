
import React from 'react';
import { Component, PropTypes } from 'react';
import Slider from 'react-rangeslider'
import { postSurveyAnswers } from '../../actionCreators/surveysActions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Select from 'react-select';
import { Grid, Col, Row } from 'react-bootstrap';
import { browserHistory } from 'react-router';





const Neighborhoods = [
  { label: 'West Village', value: 'West Village' },
  { label: 'East Village', value: 'East Village' },
  { label: 'Midtown', value: 'Midtown' },
  { label: 'Flatiron', value: 'Flatiron' },
  { label: 'Upper West Side', value: 'Upper West Side' },
  { label: 'Upper East Side', value: 'Upper East Side' },
  { label: 'Financial District', value: 'Financial District' }
];

const NumberOfRooms = [
  { label: 'Studio', value: 'Studio' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: 'Penthouse', value: 'Penthouse' },
  { label: 'igloo', value: 'igloo' },
  { label: 'igloo', value: 'igloo' },
];



const Amenities = [
  { label: 'bike', value: 'bike' },
  { label: 'garage', value: 'garage' },
  { label: 'doorman', value: 'doorman' },
  { label: 'elevator', value: 'elevator' },
  { label: 'parking', value: 'parking' },
  { label: 'storage', value: 'storage' },
  { label: 'rooftop', value: 'rooftop' },
  { label: 'pool', value: 'pool' },
];

const Pets = [
  { label: 'Dogs', value: 'Dogs' },
  { label: 'Cats', value: 'Cats' },
  { label: 'Pokemon', value: 'Pokemon' },
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
  { label: '30', value: '30' },
  { label: '40', value: '40' },
];
const CommuteMax = [
  { label: '50', value: '50' },
  { label: '1 hr', value: '1 hr' },
  { label: '2 hr', value: '2 hr' },
];





class Survey extends Component {

  constructor ( context) {
    super( context)
    this.state = {
      Neighborhoods: Neighborhoods,
      NeighborhoodsSelected: [],
      neighborhoodRank: 5,

      NumberOfRooms: NumberOfRooms,
      NumberOfRoomsSelected: null,
      numberOfRoomsRank: 5,

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

      CommuteMinSelected: null,
      CommuteMin : CommuteMin,
      CommuteMaxSelected: null,
      CommuteMax: CommuteMax,
      commuteRank: 5,

      amenitiesRank: 5,
      amenitiesSelected: [],
      Amenities: Amenities,

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
    var surveyResponses = {            //Obj holding user details
      neighborhoodRank: this.state.neighborhoodRank,
      Neighborhoods: this.state.NeighborhoodsSelected,

      rentRank: this.state.rentRank,
      RentMin: this.state.RentMinSelected,
      RentMax: this.state.RentMaxSelected,

      NumberOfRooms: this.state.NumberOfRoomsSelected,
      numberOfRoomsRank: this.state.numberOfRoomsRank,

      petRank: this.state.petRank,
      Pets: this.state.PetSelected,

      Amenities: this.state.amenitiesSelected,
      amenitiesRank: this.state.amenitiesRank,

      feeRank: this.state.feeRank,
      fees: this.state.FeesSelected,

      commuteRank: this.state.commuteRank,
      CommuteMin: this.state.CommuteMinSelected,
      CommuteMax: this.state.CommuteMaxSelected,
    }
    console.log("this+++++",this.props.user_id)
    console.log(surveyResponses)
    this.props.postSurveyAnswers(surveyResponses, this.props.user_id)
    // .then (() => {
    //   this.context.router.push('/');
    // })
  }

  componentWillMount() {
    if (!this.props.authenticated) browserHistory.push('/welcome');
  }

  componentDidUpdate() {
    if (!this.props.authenticated) browserHistory.push('/welcome');
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
              max={7}
              value={this.state.neighborhoodRank}
              onChange={(value) => this.handleChange("neighborhoodRank",value)}
              />
            <div className='value'>
              Ranking: {this.state.neighborhoodRank}
            </div>
            <hr />
          </div>


          ************************************************
          <h4>Let's pick apartment type </h4>
          <Select
            name="form-field-name"
            value={this.state.NumberOfRoomsSelected}
            options={NumberOfRooms}
            onChange={(value) => this.handleChange("NumberOfRoomsSelected", value)}
            />

          <div className='horizontal-slider'>
            <h4>Rank Apartment Type ?</h4>
            <Slider
              min={0}
              max={7}
              value={this.state.numberOfRoomsRank}
              onChange={(value) => this.handleChange("numberOfRoomsRank",value)}
              />
            <div className='value'>
              Ranking: {this.state.numberOfRoomsRank}
            </div>
            <hr />
          </div>


          ************************************************
          FEES: YES OR NO
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
              max={7}
              value={this.state.feeRank}
              onChange={(value) => this.handleChange("feeRank", value)}
              />
            <div className='value'>
              Ranking:{this.state.feeRank}</div>
            <hr />
          </div>


          ************************************************
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
            <h4>How important is rent budget from 1 to 7?</h4>
            <Slider
              min={0}
              max={7}
              value={this.state.rentRank}
              onChange={(value) => this.handleChange("rentRank", value)}
              />
            <div className='value'>Ranking:{this.state.rentRank}</div>
            <hr />
          </div>


          ************************************************
          <div>

            <h4> Furry Little Friends ?? </h4>
            <Select
                name="form-field-name"
                value={this.state.PetSelected}
                options={Pets}
                multi={true}
                onChange={(value) => this.handleChange("PetSelected", value)}
                />

            <div className='horizontal-slider'>
              <h4>Rank pet accomo ?</h4>
              <Slider
                min={0}
                max={7}
                value={this.state.petRank}
                onChange={(value) => this.handleChange("petRank", value)}
                />
              <div className='value'>Ranking:{this.state.petRank}</div>
              <hr />
            </div>


          </div>

        **********************************
          AMENITIES
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
              max={7}
              value={this.state.amenitiesRank}
              onChange={(value) => this.handleChange("amenitiesRank", value)}
              />
            <div className='value'>Ranking: {this.state.amenitiesRank}</div>
            <hr />
          </div>

          **********************************
        COMMUTE
          <div className='horizontal-slider'>
            <h4>Your ideal commute time?</h4>
       <Select
         name="form-field-name"
         value={this.state.CommuteMinSelected}
         options={CommuteMin}
         onChange={(value) => this.handleChange("CommuteMinSelected", value)}
         />
         <Select
           name="form-field-name"
           value={this.state.CommuteMaxSelected}
           options={CommuteMax}
           onChange={(value) => this.handleChange("CommuteMaxSelected", value)}
           />
            <Slider
              min={0}
              max={7}
              value={this.state.commuteRank}
              onChange={(value) => this.handleChange("commuteRank", value)}
              />
            <div className='value'>Ranking: {this.state.commuteRank}</div>
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
    authenticated: state.auth
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postSurveyAnswers }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Survey);
