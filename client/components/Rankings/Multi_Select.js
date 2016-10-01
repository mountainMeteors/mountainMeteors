import React from 'react';
import { Component, PropTypes } from 'react';
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

        /*FEES */
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
