var React = require('react')
var SelectBox = React.createFactory(require('./SelectBox'))

// import SelectBox from './SelectBox'
var div = React.createElement.bind(null,'div')
var option = React.createElement.bind(null,'option')
var h1 = React.createElement.bind(null,'h1')

var MultiSelect = React.createFactory(React.createClass(
  {displayName: 'MultiSelect',


  getInitialState: function () {
    return {
      Neighborhood: null,
      Neighborhoods: [],
      Amenities: []
    }
  },


  handleChange: function (Neighborhood) {
    this.setState({ Neighborhood: Neighborhood })
  },


  handleMultiChange: function (Neighborhoods) {
    this.setState({ Neighborhoods })
    this.setState({ Amenities })
  },



  render: function () {
    return(
      div({className: "example"},
        h1(null, "Do you have little furry friends?"),
        SelectBox(
          {
            label: "Favorite Neighborhood",
            className: 'my-example-select-box',
            onChange: this.handleChange,
            value: this.state.Neighborhood
          },
          option({key: 'cats', value: 'cats'}, 'cats'),
          option({value: 'dogs'}, 'dogs'),
          option({value: 'hamster'}, 'hamster'),
        ),


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
            onChange: this.handleMultiChange,
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
