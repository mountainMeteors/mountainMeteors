
import React from 'react';
import { Component, PropTypes } from 'react';
import Select from 'react-select';
/*
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
	{ label: 'dogs', value: 'dogs' },
	{ label: 'cats', value: 'cats' },
	{ label: 'pokemon', value: 'pokemon' },
	{ label: 'none', value: 'none' },
];

class MultiSelect extends Component {

	// propTypes: {
	// 	label: React.PropTypes.string,
	// },
  //
  constructor (props, context) {
    super(props, context)

    this.state = {
			disabled: false,
			crazy: false,
			Neighborhoods: Neighborhoods,
      Amenities: Amenities,
      Pets: Pets,
			value: [],
		}
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}



	handleSelectChange = (value) => {
		console.log('You\'ve selected:', value);
		var stateObj = {};
		// stateObj[criteria] = value;
		// this.setState(stateObj);
		// this.setState({[criteria]: value });
		this.setState({ value });
	}

	onFormSubmit (event) {              //onSubmit fn
		event.preventDefault();
		console.log(this.state.value)   //Stops refresh
		var surveyResponses = {            //Obj holding user details
			Neighborhoods: this.state.Neighborhoods,
			Amenities: this.state.Amenities,
			Pets: this.state.Pets,
			// amenities: this.state.amenities,
			// commute: this.state.commute,
			// extras: this.state.extras
		}
		// console.log("this+++++",this.props.user_id)
		console.log(surveyResponses)
		// this.props.postRankings(rankings, this.props.user_id)
			// .then (() => {
			//   this.context.router.push('/');
			// })
	}


	render () {
		const { value } = this.state
		return (

      <div>
				<form onSubmit={this.onFormSubmit}>
				<div className="section">
					<h3 className="section-heading">{this.props.label}</h3>
					<Select multi simpleValue disabled={this.state.disabled} name="neighborhood" value={this.state.value} placeholder="Select your favourite(s)" options={this.state.Neighborhoods} onChange={(value) => this.handleSelectChange} />

				</div>
					/*
					<div className="checkbox-list">
						<label className="checkbox">
							<input type="checkbox" className="checkbox-control" checked={this.state.disabled} onChange={this.toggleDisabled} />
							<span className="checkbox-label">Disable the control</span>
						</label>
						<label className="checkbox">
							<input type="checkbox" className="checkbox-control" checked={this.state.crazy} onChange={this.toggleChocolate} />
							<span className="checkbox-label">I don't like Chocolate (disabled the option)</span>
						</label>
					</div>


				<div className="section">
					<h3 className="section-heading">{this.props.label}</h3>
					<Select multi simpleValue disabled={this.state.disabled} value={this.state.value} placeholder="Select your favourite(s)" options={this.state.Amenities} onChange={(value) => this.handleSelectChange(value)} />
				</div>
					/*
					<div className="checkbox-list">
						<label className="checkbox">
							<input type="checkbox" className="checkbox-control" checked={this.state.disabled} onChange={this.toggleDisabled} />
							<span className="checkbox-label">Disable the control</span>
						</label>
						<label className="checkbox">
							<input type="checkbox" className="checkbox-control" checked={this.state.crazy} onChange={this.toggleChocolate} />
							<span className="checkbox-label">I don't like Chocolate (disabled the option)</span>
						</label>
					</div>


					<div className="section">
						<h3 className="section-heading">{this.props.label}</h3>
						<Select multi simpleValue disabled={this.state.disabled} value={this.state.value} placeholder="Select your favourite(s)" options={this.state.Pets} onChange={(value) => this.handleSelectChange(value)} />
					</div>
				<button type="submit" className="btn btn-block btn-primary">Submit</button>
				</form>

      </div>

		);
	}
}

export default MultiSelect;


*/
/*
import BS from "react-bootstrap";
import { Grid, Col, Row } from 'react-bootstrap';
import Multiselect from 'react-bootstrap-multiselect'
// var fileContent = require('./AppContent').content;
import { NumberPicker, DropdownList } from "react-widgets"

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

const Fees = [
	{ label: 'YES', value: 'YES' },
	{ label: 'NO', value: 'NO' },
];

const Pets = [
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

const colors = ['orange', 'red', 'blue', 'purple'];

class MultiSelect extends Component {

	constructor (props, context) {
    super(props, context)

    this.state = {
				Neighborhoods: Neighborhoods,
				Amenities: Amenities,
				Fees: Fees,
				RentMin : RentMin  ,
				RentMax: RentMax,
				Pets: Pets
			};
		}

		handleChange = (e) => {
		  // var options = e.target.options;
			var Amenities = this.state.Amenities
		  var selectArr = [];
		  for (var i = 0, l = Amenities.length; i < l; i++) {
		    if (Amenities[i].selected) {
		      selectArr.push(Amenities[i].value);
		    }
		  }
			console.log(selectArr)
		  // this.props.someCallback(value);
		}

		onFormSubmit   (event) {              //onSubmit fn
	    event.preventDefault();           //Stops refresh
	    var rankings = {            //Obj holding user details
	      neighborhood: this.state.Neighborhoods,
	      // rent: this.state.rent,
	      // pets: this.state.pets,
	      amenities: this.state.Amenities,
	      // commute: this.state.commute,
	      // extras: this.state.extras
	    }
	    // console.log("this+++++",this.props.user_id)
	    console.log(rankings)
	    // this.props.postRankings(rankings, this.props.user_id)
	      // .then (() => {
	      //   this.context.router.push('/');
	      // })
	  }


  render	() {
    return (
			<div>
				<form onSubmit={this.onFormSubmit}>

				<Row>
					<Col  sm={6} md={9}>
						<h4>Your Rent Budget </h4>

						<Multiselect data={this.state.RentMin} />
						<Multiselect data={this.state.RentMax} />

						<h4>Let's pick your fav neighborhoods </h4>
						<Multiselect data={this.state.Amenities}
							onChange={(value) => this.handleChange()} multiple />

						<h4>What cool amenities would you like?</h4>
						<Multiselect data={this.state.Neighborhoods} multiple />
						<h4> FEES ?? </h4>
						<Multiselect data={this.state.Fees} />
						<h4> Furry Little Friends ?? </h4>
						<Multiselect data={this.state.Pets} />


					</Col>
					<Col  sm={6} md={9}>
					</Col>
				</Row>
				<button type="submit" className="btn btn-block btn-primary">Submit</button>

        </form>
			</div>

    );
  }
}



export default MultiSelect


*/




import Slider from 'react-rangeslider'
import RankingSlider from './RankingSlider'
import { postRankings } from '../../actionCreators/rankingActions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

var SelectBox = React.createFactory(require('./SelectBox'))


// var div = React.createElement.bind(null,'div')
// var option = React.createElement.bind(null,'option')
// var h1 = React.createElement.bind(null,'h1')
// var form = React.createElement.bind(null,'form')

var MultiSelect = React.createFactory(React.createClass(
  {displayName: 'MultiSelect',

  getInitialState: function () {
    return {
      Fees: null,
      Pets: 0,
      Neighborhoods: [],
      Amenities: [],
    }
  },



	handleChange: function (Pets) {
    this.setState({ Pets: Pets })
  },
  handleMultiChange: function (Neighborhoods) {
    this.setState({ Neighborhoods: Neighborhoods })
  },

  handleMultiChangeA: function (Amenities) {
    this.setState({ Amenities: Amenities })
		console.log(this.state.Amenities)
  },

	onFormSubmit : function (event) {              //onSubmit fn
		event.preventDefault();           //Stops refresh
		var rankings = {            //Obj holding user details
			neighborhood: this.state.Neighborhoods,
			// rent: this.state.rent,
			// pets: this.state.pets,
			amenities: this.state.Pets,
			// commute: this.state.commute,
			// extras: this.state.extras
		}
		// console.log("this+++++",this.props.user_id)
		console.log(rankings)
		// this.props.postRankings(rankings, this.props.user_id)
			// .then (() => {
			//   this.context.router.push('/');
			// })
	},

  render: function () {
    const { value } = this.state
    return(

			<div>
				<form onSubmit={this.onFormSubmit}>
					<div className="example">
						<h1>"Fees?"</h1>
						<SelectBox >
							className= 'my-example-select-box'
							onChange={this.handleChange}
							value={this.state.Pets}>
							<option value={"YES"}>"YES"</option>
							<option value={"NO"}> "NO" 	</option>
						</SelectBox>
					</div>

					/*
					  h1(null, "Let's pick your fav Neighborhoods"),
					  SelectBox(
					    {
					      label: "Favorite Neighborhoods",
					      onChange: this.handleMultiChange,
					      value: this.state.Neighborhoods,
					      multiple: true
					    },
					    option({value: 'East Village'}, 'East Village'),
					    option({value: 'West Village'}, 'West Village'),
					    option({value: 'Midtown West'}, 'Midtown West'),
					    option({value: 'Midtown East'}, 'Midtown East'),
					    option({value: 'Upper West Side'}, 'Upper West Side'),
					    option({value: 'Upper East Side'}, ' Upper East Side')
					  ),

					  h1(null, "What amenities would you like?"),
					  SelectBox(
					    {
					      label: "Favorite Amenities",
					      onChange: this.handleMultiChangeA,
					      value: this.state.Amenities,
					      multiple: true
					    },
					    option({value: 'storage room'}, 'storage room'),
					    option({value: 'laundry room'}, 'laundry room'),
					    option({value: 'elevator'}, 'elevator'),
					    option({value: 'bike storage'}, 'bike storage '),
					    option({value: 'doorman'}, 'doorman'),
					    option({value: 'parking'}, 'parking')
					  ) */


					<button type="submit" className="btn btn-block btn-primary">Submit</button>

				</form>
			</div>


    )
  }
}))


export default MultiSelect
