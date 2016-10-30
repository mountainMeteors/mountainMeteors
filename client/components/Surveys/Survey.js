
import React from 'react';
import { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import Slider from 'react-rangeslider'
import { postSurveyAnswers } from '../../actionCreators/surveysActions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FlipCard from 'react-flipcard';

import Select, { Creatable } from 'react-select';
import { Grid, Col, Row, FormGroup, ControlLabel,  Jumbotron, HelpBlock, FormControl } from 'react-bootstrap';
import css from '../../styles/app.css'

const rankingText = {
  1: 'None',
  2: 'Low',
  3: 'Moderate',
  4: 'High',
  5: 'Required'
}

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
  { label: '4', value: '4' }
];

const Bathrooms = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' }
];

const Amenities = [
  { label: 'Bike', value: 'bike' },
  { label: 'Garage', value: 'garage' },
  { label: 'Doorman', value: 'doorman' },
  { label: 'Elevator', value: 'elevator' },
  { label: 'Parking', value: 'parking' },
  { label: 'Storage', value: 'storage' },
  { label: 'Rooftop', value: 'rooftop' },
  { label: 'Pool', value: 'pool' },
];

const Pets = [
  { label: 'None', value: 'None' },
  { label: 'Cats', value: 'Cats' },
  { label: 'Dogs', value: 'Dogs' },
  { label: 'Both', value: 'Both' },
  { label: 'Pokemon', value: 'Pokemon' },
];

const Fees = [
  { label: 'YES', value: 'YES' },
  { label: 'NO', value: 'NO' },
];

const RentMin = [
  { label: '1000', value: '1000' },
  { label: '1250', value: '1250' },
  { label: '1500', value: '1500' },
  { label: '1750', value: '1750' },
  { label: '2000', value: '2000' },
  { label: '2250', value: '2250' },
  { label: '2500', value: '2500' },
  { label: '2750', value: '2750' },
  { label: '3000', value: '3000' },
];

const RentMax = [
  { label: '1500', value: '1500' },
  { label: '1750', value: '1750' },
  { label: '2000', value: '2000' },
  { label: '2250', value: '2250' },
  { label: '2500', value: '2500' },
  { label: '2750', value: '2750' },
  { label: '3000', value: '3000' },
  { label: '3250', value: '3250' },
  { label: '3500', value: '3500' },
  { label: '3750', value: '3750' },
  { label: '4000', value: '4000' },
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
  { label: '250', value: '250' },
  { label: '500', value: '500' },
  { label: '750', value: '750' },
  { label: '1000', value: '1000' },
  { label: '1250', value: '1250' },
  { label: '1500', value: '1500' },
];

const Sq_ft_Max = [
  { label: '500', value: '500' },
  { label: '750', value: '750' },
  { label: '1000', value: '1000' },
  { label: '1250', value: '1250' },
  { label: '1500', value: '1500' },
  { label: '1750', value: '1750' },
];


class Survey extends Component {
  constructor ( context) {
    super( context)
    this.state = {
      Neighborhoods: Neighborhoods,
      NeighborhoodsSelected: this.props.userPrefs.Neighborhoods || [],
      neighborhoodRank: this.props.userPrefs.neighborhoodRank || 2,

      Bedrooms: Bedrooms,
      BedroomsSelected: this.props.userPrefs.Bedrooms || null,
      bedroomsRank: this.props.userPrefs.bedroomsRank || 2,

      Bathrooms: Bathrooms,
      BathroomsSelected: this.props.userPrefs.Bathrooms || null,
      bathroomsRank: this.props.userPrefs.bathroomsRank || 2,

      targetedLocation: this.props.userPrefs.targetedLocation || '',

      Fees: Fees,
      FeesSelected: this.props.userPrefs.fees || null,
      feeRank: this.props.userPrefs.feeRank || 2,

      Pets: Pets,
      PetSelected: this.props.userPrefs.Pets || null,
      petRank: this.props.userPrefs.petRank || 2,

      RentMin : RentMin,
      RentMinSelected: this.props.userPrefs.RentMin || null,
      RentMax: RentMax,
      RentMaxSelected: this.props.userPrefs.RentMin || null,
      rentRank: 2,

      CommuteMin : CommuteMin,
      CommuteMinSelected: this.props.userPrefs.CommuteMinSelected || null,
      CommuteMax: CommuteMax,
      CommuteMaxSelected: this.props.userPrefs.CommuteMaxSelected || null,
      commuteRank: this.props.userPrefs.commuteRank || 2,

      Sq_ft_Min : Sq_ft_Min,
      Sq_ft_MinSelected: this.props.userPrefs.Sq_ft_Min || null,
      Sq_ft_Max: Sq_ft_Max,
      Sq_ft_MaxSelected: this.props.userPrefs.Sq_ft_Max || null,
      sq_ft_Rank: this.props.userPrefs.sq_ft_Rank || 2,

      Amenities: Amenities,
      amenitiesSelected: this.props.userPrefs.Amenities || [],
      amenitiesRank: this.props.userPrefs.amenitiesRank || 2,
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
      neighborhoodRank: String(this.state.neighborhoodRank) || 'None Selected',
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

                <div className="survey-question">How many bedrooms would you like?</div>

                <Select
                name="form-field-name"
                value={this.state.BedroomsSelected}
                options={Bedrooms}
                multi={true}
                onChange={(value) => this.handleChange("BedroomsSelected", value)}
                placeholder="(Select Multiple)"
                />

                <div className='horizontal-slider'>
                  <h4></h4>
                  <Slider
                  min={1}
                  max={5}
                  value={this.state.bedroomsRank}
                  onChange={(value) => this.handleChange("bedroomsRank",value)}
                  />
                  <div className='value'>
                    <div className='importance-left'>
                      Importance:&nbsp;
                    </div>
                    <div className='importance-right'>
                      {rankingText[this.state.bedroomsRank]}
                    </div>
                  </div>
                  <hr />
                </div>

              </div>
            </div>



            {/* BATHROOMS */}
            <div className='card'>
              <img className="card-img-top" src='assets/survey/bathrooms.jpg' />
              <div className='card-block'>

                <div className="survey-question">How many bathrooms would you like?</div>

                <Select
                name="form-field-name"
                value={this.state.BathroomsSelected}
                options={Bathrooms}
                multi={true}
                onChange={(value) => this.handleChange("BathroomsSelected", value)}
                placeholder="(Select Multiple)"
                />

                <div className='horizontal-slider'>
                  <h4></h4>
                  <Slider
                  min={1}
                  max={5}
                  value={this.state.bathroomsRank}
                  onChange={(value) => this.handleChange("bathroomsRank",value)}
                  />
                  <div className='value'>
                    <div className='importance-left'>
                      Importance:&nbsp;
                    </div>
                    <div className='importance-right'>
                      {rankingText[this.state.bathroomsRank]}
                    </div>
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

                  <div className="survey-question">What is your desired price range?</div>

                  <div className='containerHalfSelect'>

                    <Creatable
                      name="form-field-name"
                      value={this.state.RentMinSelected}
                      options={RentMin}
                      multi={false}
                      clearable={false}
                      onChange={(value) => this.handleChange("RentMinSelected", value)}
                      placeholder="Min"
                      promptTextCreator={(input) => input}
                    />
                  </div>

                  <div className='containerHalfSelect'>
                    <Creatable
                    name="form-field-name"
                    value={this.state.RentMaxSelected}
                    options={RentMax}
                    multi={false}
                    clearable={false}
                    onChange={(value) => this.handleChange("RentMaxSelected", value)}
                    placeholder="Max"
                    promptTextCreator={(input) => input}
                    />
                  </div>
                </div>

                <div className='horizontal-slider'>
                  <h4></h4>
                  <Slider
                  min={1}
                  max={5}
                  value={this.state.rentRank}
                  onChange={(value) => this.handleChange("rentRank", value)}
                  />
                  <div className='value'>
                    <div className='importance-left'>
                      Importance:&nbsp;
                    </div>
                    <div className='importance-right'>
                      {rankingText[this.state.rentRank]}
                    </div>
                  </div>
                  <hr />
                </div>

              </div>
            </div>


            {/* FEES */}
            <div className='card'>
              <img className="card-img-top" src='assets/survey/fees.jpg' />
              <div className='card-block'>

                <div className="survey-question" style={{'marginBottom': '45px'}}>
                  How important is it that there is <br/>
                  no additional broker's fee?
                </div>

                <div className='horizontal-slider'>
                  <Slider
                  min={1}
                  max={5}
                  value={this.state.feeRank}
                  onChange={(value) => this.handleChange("feeRank", value)}
                  />
                  <div className='value'>
                    <div className='importance-left'>
                      Importance:&nbsp;
                    </div>
                    <div className='importance-right'>
                      {rankingText[this.state.feeRank]}
                    </div>
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

                  <div className="survey-question">How large is your ideal apartment (sq. ft)?</div>

                  <div className='containerHalfSelect'>
                    <Creatable
                    name="form-field-name"
                    value={this.state.Sq_ft_MinSelected}
                    options={Sq_ft_Min}
                    multi={false}
                    clearable={false}
                    onChange={(value) => this.handleChange("Sq_ft_MinSelected", value)}
                    placeholder="Min"
                    promptTextCreator={(input) => input}
                    />
                  </div>

                  <div className='containerHalfSelect'>
                    <Creatable
                    name="form-field-name"
                    value={this.state.Sq_ft_MaxSelected}
                    options={Sq_ft_Max}
                    multi={false}
                    clearable={false}
                    onChange={(value) => this.handleChange("Sq_ft_MaxSelected", value)}
                    placeholder="Max"
                    promptTextCreator={(input) => input}
                    />
                  </div>
                </div>

                <div className='horizontal-slider'>
                  <Slider
                  min={1}
                  max={5}
                  value={this.state.sq_ft_Rank}
                  onChange={(value) => this.handleChange("sq_ft_Rank", value)}
                  />
                  <div className='value'>
                    <div className='importance-left'>
                      Importance:&nbsp;
                    </div>
                    <div className='importance-right'>
                      {rankingText[this.state.sq_ft_Rank]}
                    </div>
                  </div>
                  <hr/>
                </div>

              </div>
            </div>



            {/* PETS */}
            <div className='card' >
              <img className="card-img-top" src='assets/survey/pets.jpg' />
              <div className='card-block'>

                <div className="survey-question">What type of pets should be allowed?</div>

                <Select
                name="form-field-name"
                value={this.state.PetSelected}
                options={Pets}
                multi={false}
                clearable={false}
                onChange={(value) => this.handleChange("PetSelected", value)}
                placeholder="(Select One)"
                />

                <div className='horizontal-slider'>
                  <h4></h4>
                  <Slider className='pet-slider'
                  min={1}
                  max={5}
                  value={this.state.petRank}
                  onChange={(value) => this.handleChange("petRank", value)}
                  />
                  <div className='value'>
                    <div className='importance-left'>
                      Importance:&nbsp;
                    </div>
                    <div className='importance-right'>
                      {rankingText[this.state.petRank]}
                    </div>
                  </div>
                  <hr />
                </div>

              </div>
            </div>



            {/* NEIGHBORHOOD */}
            <div className='card' >
              <img className="card-img-top" src='assets/survey/neighborhood.jpg' />
              <div className='card-block'>

                <div className="survey-question">Where would you like to live?</div>

                <Select
                name="form-field-name"
                value={this.state.NeighborhoodsSelected}
                multi={true}
                options={Neighborhoods}
                onChange={(value) => this.handleChange("NeighborhoodsSelected", value)}
                placeholder="(Select Multiple)"
                />

                <div className='horizontal-slider'>
                  <h4></h4>
                  <Slider
                  min={1}
                  max={5}
                  value={this.state.neighborhoodRank}
                  onChange={(value) => this.handleChange("neighborhoodRank",value)}
                  />
                  <div className='value'>
                    <div className='importance-left'>
                      Importance:&nbsp;
                    </div>
                    <div className='importance-right'>
                      {rankingText[this.state.neighborhoodRank]}
                    </div>
                  </div>
                  <hr />
                </div>

              </div>
            </div>



            {/* AMENITIES */}
            <div className='card' >
              <img className="card-img-top" src='assets/survey/amenities.jpg' />
              <div className='card-block'>

                <div className="survey-question">What amenities would you like?</div>
                <Select
                name="form-field-name"
                value={this.state.amenitiesSelected}
                multi={true}
                options={Amenities}
                onChange={(value) => this.handleChange("amenitiesSelected", value)}
                placeholder="(Select Multiple)"
                />

                <div className='horizontal-slider'>
                  <h4></h4>
                  <Slider
                  min={1}
                  max={5}
                  value={this.state.amenitiesRank}
                  onChange={(value) => this.handleChange("amenitiesRank", value)}
                  />
                  <div className='value'>
                    <div className='importance-left'>
                      Importance:&nbsp;
                    </div>
                    <div className='importance-right'>
                      {rankingText[this.state.amenitiesRank]}
                    </div>
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
    authenticated: state.auth,
    userPrefs: state.userPrefs
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
//       min={1}
//       max={5}
//       value={this.state.commuteRank}
//       onChange={(value) => this.handleChange("commuteRank", value)}
//       />
//       <div className='value'>Importance: {rankingText[this.state.commuteRank]}</div>
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
