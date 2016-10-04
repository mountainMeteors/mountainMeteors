// testing with commit

import React from 'react';
import { Component, PropTypes } from 'react';
import Select from 'react-select';
import { Grid, Col, Row } from 'react-bootstrap';
import Multiselect from 'react-bootstrap-multiselect'
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

const RentMin = [
	{ label: '10', value: '10' },
	{ label: '20', value: '20' },
];
const RentMax = [
	{ label: '1000', value: '1000' },
	{ label: '2000', value: '2000' },
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
		// this.handleSelectChange = this.handleSelectChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}


/*
	handleSelectChange = (value) => {
		console.log('You\'ve selected:',value );

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
			// Amenities: this.state.Amenities,
			// Pets: this.state.Pets,
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

				<Multiselect data={this.state.RentMin}/>
				<Multiselect data={this.state.RentMax} />

				<div className="section">
					<h3 className="section-heading">{this.props.label}</h3>
					<Select multi simpleValue disabled={this.state.disabled} name="neighborhood" value={this.state.value} placeholder="Select your favourite(s)" options={this.state.Neighborhoods} onChange={this.handleSelectChange} />

				</div>



				<div className="section">
					<h3 className="section-heading">{this.props.label}</h3>
					<Select multi simpleValue disabled={this.state.disabled} value={this.state.value} placeholder="Select your favourite(s)" options={this.state.Amenities} onChange={this.handleSelectChange} />
				</div>

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


/*

import BS from "react-bootstrap";
import React from 'react';
import { Component, PropTypes } from 'react';
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

		handleSelectChange (value) {
			console.log('You\'ve selected:', value);
			this.setState({ value });
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

						<Multiselect data={this.state.RentMin}/>
						<Multiselect data={this.state.RentMax} />

						<h4>Let's pick your fav neighborhoods </h4>
						<Multiselect data={this.state.Neighborhoods}
							onChange={(value) => this.handleSelectChange()} multiple />

						<h4>What cool amenities would you like?</h4>
						<Multiselect data={this.state.Amenities} multiple />
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
*/
const Amenities = [
	{ label: 'bike', value: 'bike' },
	{ label: 'garage', value: 'garage' },
];

const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'three' }
];
const Pets = [
    { value: 'dogs', label: 'Dogs' },
    { value: 'cats', label: 'Cats' },
    { value: 'pokemon', label: 'Pokemon' }
];
class MultiSelect extends Component {

	constructor ( props) {
    super( props)
	this.state ={
		value: [],
		options: Amenities,
		value2: [],
		Pets: Pets
	}
	this.logChange = this.logChange.bind(this)
	// this.logChange2 = this.logChange2.bind(this)
	this.onFormSubmit = this.onFormSubmit.bind(this);
}


 logChange = (criteria,value)=> {
	 console.log(value)
    console.log("options: " + value);
		this.setState({
			[criteria]: value}
		)
}


//  logChange2 = (val)=> {
// 	 console.log(val)
//     console.log("options2: " + val);
// 		this.setState(
// 			{value2: val}
// 		)
// }


onFormSubmit = (event)=> {
	event.preventDefault();
	var rankings = {
		Amenities: this.state.value,
		Pets: this.state.value2,

	}
	// console.log("this+++++",this.props.user_id)
	console.log(rankings)
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
		<Select
		    name="form-field-name"
		    value={this.state.value}
				multi={true}
		    options={Amenities}
		    onChange={(value) => this.logChange("value", value)}
		/>
		<Select
		    name="form-field-name"
		    value={this.state.value2}
				multi={true}
		    options={Pets}
				onChange={(value) => this.logChange("value2", value)}
		/>

	<button type="submit" className="btn btn-block btn-primary">Submit</button>
	</form>

		</div>
	)
}

}

export default MultiSelect
