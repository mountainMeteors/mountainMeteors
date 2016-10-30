
import React from 'react';
import { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import Slider from 'react-rangeslider'
import { postSurveyAnswers } from '../../actionCreators/surveysActions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FlipCard from 'react-flipcard';

import Select from 'react-select';
import { Grid, Col, Row, FormGroup, ControlLabel,  Jumbotron, HelpBlock, FormControl } from 'react-bootstrap';
import css from '../../styles/app.css'





const Neighborhoods = [
  { label: 'West Village', value: 'West Village' },
  { label: 'East Village', value: 'East Village' },
  { label: 'Midtown', value: 'Midtown' },
  { label: 'Flatiron', value: 'Flatiron' },
  { label: 'Upper West Side', value: 'Upper West Side' },
  { label: 'Upper East Side', value: 'Upper East Side' },
  { label: 'Financial District', value: 'Financial District' }
];

const Bedrooms = [
  { label: 'Studio', value: 'Studio' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' }
];

const Bathrooms = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' }
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
  { label: 'Both', value: 'Both' },
  { label: 'Dogs', value: 'Dogs' },
  { label: 'Cats', value: 'Cats' },
  { label: 'Pokemon', value: 'Pokemon' },
  { label: 'None', value: 'None' },
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

const Sq_ft_Min = [
{ label: '10', value: '10' },
{ label: '20', value: '20' },
{ label: '30', value: '30' },
{ label: '40', value: '40' },
];

const Sq_ft_Max = [
{ label: '50', value: '50' },
{ label: '1', value: '1' },
{ label: '2', value: '2' },
];


class Survey extends Component {
  constructor ( context) {
    super( context)
    this.state = {
      Neighborhoods: Neighborhoods,
      NeighborhoodsSelected: [],
      neighborhoodRank: 1,

      Bedrooms: Bedrooms,
      BedroomsSelected: null,
      bedroomsRank: 1,

      Bathrooms: Bathrooms,
      BathroomsSelected: null,
      bathroomsRank: 1,

      targetedLocation: '',

      Fees: Fees,
      FeesSelected: null,
      feeRank: 1,

      Pets: Pets,
      PetSelected: null,
      petRank: 1,

      RentMinSelected: null,
      RentMin : RentMin,
      RentMaxSelected: null,
      RentMax: RentMax,
      rentRank: 1,

      CommuteMinSelected: null,
      CommuteMin : CommuteMin,
      CommuteMaxSelected: null,
      CommuteMax: CommuteMax,
      commuteRank: 1,

      Sq_ft_MinSelected: null,
      Sq_ft_Min : Sq_ft_Min,
      Sq_ft_MaxSelected: null,
      Sq_ft_Max: Sq_ft_Max,
      sq_ft_Rank: 1,

      amenitiesRank: 1,
      amenitiesSelected: [],
      Amenities: Amenities,
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
  }

  componentWillMount() {
    if (!this.props.authenticated) browserHistory.push('/welcome');
  }

  componentDidUpdate() {
    if (!this.props.authenticated) browserHistory.push('/welcome');
  }

  static contextTypes = {
    router: PropTypes.object
  };


  handleChangeLocation(e) {
    this.setState({ targetedLocation: e.target.value });
  }

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
      neighborhoodRank: this.state.neighborhoodRank || 'None Selected',
      Neighborhoods: this.state.NeighborhoodsSelected || 'None Selected',

      rentRank: this.state.rentRank || 'None Selected',
      RentMin: this.state.RentMinSelected || 'None Selected',
      RentMax: this.state.RentMaxSelected || 'None Selected',

      Bedrooms: this.state.BedroomsSelected || 'None Selected',
      bedroomsRank: this.state.bedroomsRank || 'None Selected',

      Bathrooms: this.state.BathroomsSelected || 'None Selected',
      bathroomsRank: this.state.bathroomsRank || 'None Selected',

      targetedLocation: this.state.targetedLocation,

      petRank: this.state.petRank || 'None Selected',
      Pets: this.state.PetSelected || 'None Selected',

      Amenities: this.state.amenitiesSelected || 'None Selected',
      amenitiesRank: this.state.amenitiesRank || 'None Selected',

      feeRank: this.state.feeRank || 'None Selected',
      fees: this.state.FeesSelected || 'None Selected',


      Sq_ft_Min: this.state.Sq_ft_MinSelected || 'None Selected',
      Sq_ft_Max: this.state.Sq_ft_MaxSelected || 'None Selected',
      sq_ft_Rank: this.state.sq_ft_Rank || 'None Selected',

    }

    console.log("this+++++",this.props.user_id)
    console.log(surveyResponses)
    this.props.postSurveyAnswers(surveyResponses, this.props.user_id)
    // browserHistory.push('/');
    .then (() => {
      console.log('survey then hit');
      this.context.router.push('/');
    })
  }

  render () {
    const { value } = this.state
    return (
      <div>

        <Jumbotron style={{'backgroundImage': 'url(assets/survey/banner1.jpg)'}}>
        <div >
          <h2>What's important to you in a home?</h2>
          <h4>
            By telling us a bit more about yourself, we can sort your listings
            according to how much of your criteria each listing meets!
          </h4>
          <p></p>
        </div>
        </Jumbotron>

        <form onSubmit={this.onFormSubmit}>
          <div className="main_card">


            {/* BEDROOMS */}
            <div className='card'>
              <img className="card-img-top" src='assets/survey/bedrooms.jpg' />
              <div className='card-block'>

                <Select
                name="form-field-name"
                value={this.state.BedroomsSelected}
                options={Bedrooms}
                multi={true}
                onChange={(value) => this.handleChange("BedroomsSelected", value)}
                />

                <div className='horizontal-slider'>
                  <h4></h4>
                  <Slider
                  min={0}
                  max={7}
                  value={this.state.bedroomsRank}
                  onChange={(value) => this.handleChange("bedroomsRank",value)}
                  />
                  <div className='value'>
                    Ranking: {this.state.bedroomsRank}
                  </div>
                  <hr />
                </div>

              </div>
            </div>



            {/* BATHROOMS */}
            <div className='card'>
              <img className="card-img-top" src='assets/survey/bathrooms.jpg' />
              <div className='card-block'>

                <Select
                name="form-field-name"
                value={this.state.BathroomsSelected}
                options={Bathrooms}
                multi={true}
                onChange={(value) => this.handleChange("BathroomsSelected", value)}
                />

                <div className='horizontal-slider'>
                  <h4></h4>
                  <Slider
                  min={0}
                  max={7}
                  value={this.state.bathroomsRank}
                  onChange={(value) => this.handleChange("bathroomsRank",value)}
                  />
                  <div className='value'>
                    Ranking: {this.state.bathroomsRank}
                  </div>
                  <hr />
                </div>

              </div>
            </div>


            {/* FEES */}
            <div className='card'>
              <img className="card-img-top" src='assets/survey/fees.jpg' />
              <div className='card-block'>

                <Select
                name="form-field-name"
                value={this.state.FeesSelected}
                options={Fees}
                multi={true}
                onChange={(value) => this.handleChange("FeesSelected", value)}
                />

                <div className='horizontal-slider'>
                  <Slider
                  min={0}
                  max={7}
                  value={this.state.feeRank}
                  onChange={(value) => this.handleChange("feeRank", value)}
                  />
                  <div className='value'>
                    Ranking:{this.state.feeRank}
                  </div>
                  <hr />
                </div>

              </div>
            </div>



            {/* BUDGET */}
            <div className='card'>
              <img className="card-img-top" src='assets/survey/budget.jpg' />
              <div className='card-block'>
                <div className='rangeWrap'>

                  <div className='containerHalfSelect'>
                    <Select
                    name="form-field-name"
                    value={this.state.RentMinSelected}
                    options={RentMin}
                    multi={true}
                    onChange={(value) => this.handleChange("RentMinSelected", value)}
                    />
                  </div>

                  <div className='containerHalfSelect'>
                    <Select
                    name="form-field-name"
                    value={this.state.RentMaxSelected}
                    options={RentMax}
                    multi={true}
                    onChange={(value) => this.handleChange("RentMaxSelected", value)}
                    />
                  </div>
                </div>

                <div className='horizontal-slider'>
                  <h4></h4>
                  <Slider
                  min={0}
                  max={7}
                  value={this.state.rentRank}
                  onChange={(value) => this.handleChange("rentRank", value)}
                  />
                  <div className='value'>
                    Ranking:{this.state.rentRank}
                  </div>
                  <hr />
                </div>

              </div>
            </div>



            {/* SPACE */}
            <div className='card'>
              <img className="card-img-top" src='assets/survey/space.jpg' />
              <div className='card-block'>
                <div className='rangeWrap'>

                  <div className='containerHalfSelect'>
                    <Select
                    name="form-field-name"
                    value={this.state.Sq_ft_MinSelected}
                    options={Sq_ft_Min}
                    multi={true}
                    onChange={(value) => this.handleChange("Sq_ft_MinSelected", value)}
                    />
                  </div>

                  <div className='containerHalfSelect'>
                    <Select
                    name="form-field-name"
                    value={this.state.Sq_ft_MaxSelected}
                    options={Sq_ft_Max}
                    multi={true}
                    onChange={(value) => this.handleChange("Sq_ft_MaxSelected", value)}
                    />
                  </div>
                </div>

                <div className='horizontal-slider'>
                  <Slider
                  min={0}
                  max={7}
                  value={this.state.sq_ft_Rank}
                  onChange={(value) => this.handleChange("sq_ft_Rank", value)}
                  />
                  <div className='value'>
                    Ranking: {this.state.sq_ft_Rank}
                  </div>
                  <hr/>
                </div>

              </div>
            </div>



            {/* PETS */}
            <div className='card' >
              <img className="card-img-top" src='assets/survey/pets.jpg' />
              <div className='card-block'>

                <Select
                name="form-field-name"
                value={this.state.PetSelected}
                options={Pets}
                multi={true}
                onChange={(value) => this.handleChange("PetSelected", value)}
                />

                <div className='horizontal-slider'>
                  <h4></h4>
                  <Slider className='pet-slider'
                  min={0}
                  max={7}
                  value={this.state.petRank}
                  onChange={(value) => this.handleChange("petRank", value)}
                  />
                  <hr />
                </div>

              </div>
            </div>



            {/* NEIGHBORHOOD */}
            <div className='card' >
              <img className="card-img-top" src='assets/survey/neighborhood.jpg' />
              <div className='card-block'>

                <Select
                name="form-field-name"
                value={this.state.NeighborhoodsSelected}
                multi={true}
                options={Neighborhoods}
                onChange={(value) => this.handleChange("NeighborhoodsSelected", value)}
                />

                <div className='horizontal-slider'>
                  <h4></h4>
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

              </div>
            </div>



            {/* AMENITIES */}
            <div className='card' >
              <img className="card-img-top" src='assets/survey/amenities.jpg' />
              <div className='card-block'>
                <Select
                name="form-field-name"
                value={this.state.amenitiesSelected}
                multi={true}
                options={Amenities}
                onChange={(value) => this.handleChange("amenitiesSelected", value)}
                />

                <div className='horizontal-slider'>
                  <h4></h4>
                  <Slider
                  min={0}
                  max={7}
                  value={this.state.amenitiesRank}
                  onChange={(value) => this.handleChange("amenitiesRank", value)}
                  />
                  <div className='title'>
                    Ranking: {this.state.amenitiesRank}
                  </div>
                  <hr />
                </div>
              </div>
            </div>




        </div>
        <button type="submit" className="btn btn-block btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postSurveyAnswers }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Survey);

// {/* COMMUTE */}
// <div className='card'>
//   <img className="card-img-top" src='assets/survey/commute.jpg' />
//   <div className='card-block'>
//
//     <div className='rangeWrap'>
//       <div className='containerHalfSelect'>
//         <Select
//         name="form-field-name"
//         value={this.state.CommuteMinSelected}
//         options={CommuteMin}
//         multi={true}
//
//         onChange={(value) => this.handleChange("CommuteMinSelected", value)}
//         />
//       </div>
//
//       <div className='containerHalfSelect'>
//         <Select
//         name="form-field-name"
//         value={this.state.CommuteMaxSelected}
//         options={CommuteMax}
//         multi={true}
//
//         onChange={(value) => this.handleChange("CommuteMaxSelected", value)}
//         />
//       </div>
//     </div>
//
//     <div className='horizontal-slider'>
//       <Slider
//       min={0}
//       max={7}
//       value={this.state.commuteRank}
//       onChange={(value) => this.handleChange("commuteRank", value)}
//       />
//       <div className='value'>Ranking: {this.state.commuteRank}</div>
//       <hr/>
//     </div>
//   </div>
// </div>

// {/* COMMUTE LOCATION */}
// <div className='container_location'>
//   <FormGroup controlId="formBasicText">
//     <ControlLabel />
//     <HelpBlock>
//       Enter the address of your commute destination
//     </HelpBlock>
//     <FormControl
//     type="text"
//     value={this.state.targetedLocation}
//     placeholder="1216 Broadway New York NY"
//     onChange={this.handleChangeLocation}
//     />
//     <FormControl.Feedback />
//   </FormGroup>
// </div>
