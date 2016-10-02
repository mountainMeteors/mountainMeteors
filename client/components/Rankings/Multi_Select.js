import React from 'react';
import { Component, PropTypes } from 'react';
import Select from 'react-select';

const Neighborhoods = [
	{ label: 'West Village', value: 'west village' },
	{ label: 'East Village', value: 'east village' },
	{ label: 'Midtown', value: 'midtown' },
	{ label: 'Flatiron', value: 'flatiron' },
];



const Amenities = [
	{ label: 'bike', value: 'bike' },
	{ label: 'garage', value: 'garage' },

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
			value: [],
		}
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}


	handleSelectChange = (value) => {
		console.log('You\'ve selected:', value);
		var stateObj = {};
		// stateObj[criteria] = value;
		// this.setState(stateObj);
		// this.setState({[criteria]: value });
		this.setState({ value });
	}

	onFormSubmit (event){
		var responses = {

		}
	}

	render () {
		const { value } = this.state
		return (

      <div>
				<div className="section">
					<h3 className="section-heading">{this.state.value}</h3>
					<Select multi simpleValue disabled={this.state.disabled} name="neighborhood" value={this.state.value} placeholder="Select your favourite(s)" options={this.state.Neighborhoods} onChange={(value) => this.handleSelectChange(value)} />
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
					*/
  			</div>

				<div className="section">
					<h3 className="section-heading">{this.state.value}</h3>
					<Select multi simpleValue disabled={this.state.disabled} value={this.state.value} placeholder="Select your favourite(s)" options={this.state.Amenities} onChange={(value) => this.handleSelectChange(value)} />
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
					*/
  			</div>

      </div>

		);
	}
}

export default MultiSelect;










/*
import BS from "react-bootstrap"
import Grid from "react-bootstrap"
import Multiselect from 'react-bootstrap-multiselect'
var fileContent = require('./AppContent').content;


var MultiSelect = React.createClass({
  getInitialState: function () {
    var large = [];
    for (var i = 0; i < 100; i++) {
      large.push({value: 'Item ' + i});
    }
    return {
      groups: [
        {label:'Group One',children:[{value:'1-One'},{value:'1-Two'},{value:'1-Three'},{value:'1-Four',label:'Four Label'}]},
        {label:'Group Two',children:[{value:'2-One'},{value:'2-Two'},{value:'2-Three'},{value:'2-Four',label:'Four Label'}]},
        {label:'Group Three',children:[{value:'3-One'},{value:'3-Two'},{value:'3-Three'},{value:'3-Four',label:'Four Label'}]}
      ],
      large: large,
      list: [{value:'One',selected:true},{value:'Two'},{value:'Three'},{value:'Four',label:'Four Label'}]
    };
  },
  render: function () {
    return (
      <BS.Grid>
        <Header />
        <BS.Row>
          <BS.Col md={3}>
            <h2>Demo:</h2>
            <h4>no optgroups:</h4>
            <Multiselect data={this.state.list} multiple />
            <h4>with optgroups:</h4>
            <Multiselect data={this.state.groups} multiple />
            <h4>single select:</h4>
            <Multiselect data={this.state.groups} />
            <h4>large list (maxHeight/buttonText):</h4>
            <Multiselect data={this.state.large} multiple
              maxHeight={200}
              buttonText={function(options, select) {
                return 'Long List / Custom Title!';
              }}
            />
            <h4>buttonClass:</h4>
            <Multiselect buttonClass="btn btn-danger" data={this.state.list} multiple />
          </BS.Col>
          <BS.Col md={9}>
            <h2>Demo Source Code:</h2>
            <textarea className="form-control" style={{width:'100%',height:'500px'}} readOnly value={fileContent} />
          </BS.Col>
        </BS.Row>
      </BS.Grid>
    );
  }
});



export default MultiSelect






/*
import Slider from 'react-rangeslider'
import RankingSlider from './RankingSlider'
import { postRankings } from '../../actionCreators/rankingActions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

var SelectBox = React.createFactory(require('./SelectBox'))


var div = React.createElement.bind(null,'div')
var option = React.createElement.bind(null,'option')
var h1 = React.createElement.bind(null,'h1')

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



  handleChange: function (Fees, Pets) {
    // this.setState({ Fees: Fees })
    this.setState({ Fees })
  },


  handleMultiChange: function (criteria, value) {
    this.setState(
      { [criteria]: value  }
    )
  },



  render: function () {
    const { value } = this.state
    return(


      div({className: "example"},
        h1(null, "Fees?"),
        SelectBox(
          {
            label: "Fees?",
            className: 'my-example-select-box',
            onChange: this.handleChange,
            value: this.state.Fees
          },
          option({value: 'yes'}, 'yes'),
          option({value: 'no'}, 'no'),
        ),


        h1(null, "Let's pick your fav Neighborhoods"),
        SelectBox(
          {
            label: "Favorite Neighborhoods",
            onChange: this.handleMultiChange("Neighborhoods", value),
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
            onChange: this.handleMultiChange(("Amenities", value)),
            value: this.state.Amenities,
            multiple: true
          },
          option({value: 'storage room'}, 'storage room'),
          option({value: 'laundry room'}, 'laundry room'),
          option({value: 'elevator'}, 'elevator'),
          option({value: 'bike storage'}, 'bike storage '),
          option({value: 'doorman'}, 'doorman'),
          option({value: 'parking'}, 'parking')
        )
      )
    )
  }
}))

export default MultiSelect

*/
