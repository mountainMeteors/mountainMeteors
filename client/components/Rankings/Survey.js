
import React from 'react';
import { Component, PropTypes } from 'react';
import Select from 'react-select';




const FLAVOURS = [
	{ label: 'Chocolate', value: 'chocolate' },
	{ label: 'Vanilla', value: 'vanilla' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Caramel', value: 'caramel' },
	{ label: 'Cookies and Cream', value: 'cookiescream' },
	{ label: 'Peppermint', value: 'peppermint' },
];

const Neighborhoods = [
	{ label: 'West Village', value: 'West Village' },
	{ label: 'East Village', value: 'East Village' },
	{ label: 'Midtown', value: 'Midtown' },
	{ label: 'Flatiron', value: 'Flatiron' },
];


var Survey = React.createClass({
	displayName: 'Survey',
	propTypes: {
		label: React.PropTypes.string,
	},
	getInitialState () {
		return {
			disabled: false,
			crazy: false,
			FLAVOURS: [],
      Neighborhoods:Neighborhoods,
      valNeighborhoods: [],
			value: [],
		};
	},
	handleSelectChange (value) {
		console.log('You\'ve selected:', value);
		this.setState({ value });
	},
	handleSelectChangeA (value) {
		console.log('You\'ve selected:', value);
		this.setState({ value });
	},


  onFormSubmit (event) {              //onSubmit fn
    event.preventDefault();
    console.log(this.state.value)   //Stops refresh
    var surveyResponses = {            //Obj holding user details
      Neighborhoods: this.state.Neighborhoods,
      FLAVOURS: this.state.FLAVOURS,
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
  },




	render () {
		return (
      <div>
	<form onSubmit={this.onFormSubmit}>
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select multi simpleValue disabled={this.state.disabled} value={this.state.value} placeholder="Select your favourite(s)" options={FLAVOURS} onChange={this.handleSelectChange} />
				<div className="checkbox-list">
				</div>
			</div>


      <div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select multi simpleValue disabled={this.state.disabled} value={this.state.value} placeholder="Select your favourite(s)" options={this.state.Neighborhoods} onChange={this.handleSelectChangeA} />
				<div className="checkbox-list">
				</div>
			</div>


      <button type="submit" className="btn btn-block btn-primary">Submit</button>
      </form>

			</div>

		);
	}
});

module.exports = Survey;
