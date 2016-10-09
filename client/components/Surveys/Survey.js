
import React from 'react';
import { Component, PropTypes } from 'react';
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

      NumberOfRooms: NumberOfRooms,
      NumberOfRoomsSelected: null,
      numberOfRoomsRank: 1,    
      
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
      neighborhoodRank: this.state.neighborhoodRank,
      Neighborhoods: this.state.NeighborhoodsSelected,

      rentRank: this.state.rentRank,
      RentMin: this.state.RentMinSelected,
      RentMax: this.state.RentMaxSelected,      

      NumberOfRooms: this.state.NumberOfRoomsSelected,
      numberOfRoomsRank: this.state.numberOfRoomsRank,

      targetedLocation: this.state.targetedLocation,

      petRank: this.state.petRank,
      Pets: this.state.PetSelected,

      Amenities: this.state.amenitiesSelected,
      amenitiesRank: this.state.amenitiesRank,

      feeRank: this.state.feeRank,
      fees: this.state.FeesSelected,

      sq_ft_Rank: this.state.sq_ft_Rank,
      Sq_ft_Min: this.state.Sq_ft_MinSelected,
      Sq_ft_Max: this.state.Sq_ft_MaxSelected,

      Sq_ft_Rank: this.state.Sq_ft_Rank,
      Sq_ft_Min: this.state.Sq_ft_MinSelected,
      Sq_ft_Max: this.state.Sq_ft_MaxSelected,
    }
    console.log("this+++++",this.props.user_id)
    console.log(surveyResponses)
    this.props.postSurveyAnswers(surveyResponses, this.props.user_id)
    .then (() => {
      this.context.router.push('/');
    })
  }

  render () {
    const { value } = this.state
    return (
<<<<<<< e67f0991b33a535ef69e2a74074f69260e5189ca
      <div>
      <Jumbotron style={{'backgroundImage': 'url(http://localhost:2500/uploads/banner1.jpg)'}}>
      <div >
      <h4>Lets us get to know a little bit about you!</h4>
      <p></p>
      </div>
      </Jumbotron>


      <form onSubmit={this.onFormSubmit}>
      <div className="main">

      <div className='card_aptType'>
      <div className='container'>

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
      </div>
      </div>



      <div className='card_Fees'>
      <div className='container'>
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
      </div>
      </div>


      <div className='card_Fees'>
      <div className='container'>
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
      </div>
      </div>



      <div className='card_Fees'>
      <div style={{'backgroundImage': 'url(http://localhost:2500/uploads/neighborhood-guide.jpg)'}}>
      <div className='container'>
      <div className='horizontal-slider'>
      <h4> *Square Feet**Your ideal apt size?</h4>
      <Select
=======
    <div>
      <Jumbotron>
          <h1>Lets us get to know a little bit about you!</h1>
          <p></p>

        </Jumbotron>


        <form onSubmit={this.onFormSubmit}>
          <div className="main">

         <div className='card_Neighborhood'>
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
          </div>
      

          <div >
          <div>
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
          </div>




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


          *****************Square Feet*****************


       <div className='horizontal-slider'>
         <h4>Your ideal apt size?</h4>
    <Select
>>>>>>> styling to survey'
      name="form-field-name"
      value={this.state.Sq_ft_MinSelected}
      options={Sq_ft_Min}
      onChange={(value) => this.handleChange("Sq_ft_MinSelected", value)}
      />
      <Select
<<<<<<< e67f0991b33a535ef69e2a74074f69260e5189ca
      name="form-field-name"
      value={this.state.Sq_ft_MaxSelected}
      options={Sq_ft_Max}
      onChange={(value) => this.handleChange("Sq_ft_MaxSelected", value)}
      />     
      <Slider
      min={0}
      max={7}
      value={this.state.sq_ft_Rank}
      onChange={(value) => this.handleChange("Sq_ft_Rank", value)}
      />
      <div className='value'>Ranking: {this.state.sq_ft_Rank}</div>
      <hr/>
      </div>
      </div>
      </div>
      </div>

    
    <div className='Commute_Card'>
    <div className='container'>
      <div className='horizontal-slider'>
      <h4>Your ideal commute time?</h4>
      <div className='rangeWrap'>
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
      </div>    
      <Slider
      min={0}
      max={7}
      value={this.state.commuteRank}
      onChange={(value) => this.handleChange("commuteRank", value)}
      />
      <div className='value'>Ranking: {this.state.commuteRank}</div>
      <hr />
      </div>
      </div>
      </div>


      <div className='Sq_ft'>
      <div className='container'>
      <h4>***PETSSSSS**** Furry Little Friends ?? </h4>
      <Select 
      name="form-field-name"
      value={this.state.PetSelected}
      options={Pets}
      multi={true}
      onChange={(value) => this.handleChange("PetSelected", value)}
      />

      <div className='horizontal-slider'>
      <h4>Rank pet accomo ?</h4>
      <Slider className='pet-slider'
      min={0}
      max={7}
      value={this.state.petRank}
      onChange={(value) => this.handleChange("petRank", value)}
      />
      <div className='value'>Ranking:{this.state.petRank}</div>
      <hr />
      </div>
      </div>
      </div>


      
      <div className='card_Neighborhood'>
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
      </div>
      
      <div className='Amenities_Card'>
      <div className='container'>
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
      </div>
      </div>

    <div className='Targeded_Location_Card'>
    <div className='container'>
      <FormGroup
      controlId="formBasicText"
      >
      <ControlLabel></ControlLabel>
      <FormControl
      type="text"
      value={this.state.targetedLocation}
      placeholder="1216 Broadway New York NY"
      onChange={this.handleChangeLocation}
      />
      <FormControl.Feedback />
      <HelpBlock>Validation is based on valid address.</HelpBlock>
      </FormGroup>
      </div>
      </div>



      </div>
      <button type="submit" className="btn btn-block btn-primary">Submit</button>
      </form>
      </div>
      )
}
=======
        name="form-field-name"
        value={this.state.Sq_ft_MaxSelected}
        options={Sq_ft_Max}
        onChange={(value) => this.handleChange("Sq_ft_MaxSelected", value)}
        />     
         <Slider
           min={0}
           max={7}
           value={this.state.sq_ft_Rank}
           onChange={(value) => this.handleChange("Sq_ft_Rank", value)}
           />
         <div className='value'>Ranking: {this.state.sq_ft_Rank}</div>
         <hr />
       </div>

          *****************PETSSSSS*****************
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
              <Slider className='pet-slider'
                min={0}
                max={7}
                value={this.state.petRank}
                onChange={(value) => this.handleChange("petRank", value)}
                />
              <div className='value'>Ranking:{this.state.petRank}</div>
              <hr />
            </div>


          </div>



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

         
          <FormGroup
                    controlId="formBasicText"
                                  >
                    <ControlLabel></ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.targetedLocation}
                      placeholder="1216 Broadway New York NY"
                      onChange={this.handleChangeLocation}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on valid address.</HelpBlock>
                  </FormGroup>
         


  ***COMMUTE*****
        
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
        </div>
        </div>
    
        </form>
      
      </div>
    )
  }
>>>>>>> styling to survey'
}

function mapStateToProps(state) {
  console.log('in mapstate==*****==>', state.auth.user_id)
  return {
    user_id: state.auth.user_id,
    isAuth: state.isAuth
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postSurveyAnswers }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Survey);