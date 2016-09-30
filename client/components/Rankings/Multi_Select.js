var React = require('react')
var SelectBox = React.createFactory(require('./SelectBox'))

// import SelectBox from './SelectBox'
var div = React.createElement.bind(null,'div')
var option = React.createElement.bind(null,'option')
var h1 = React.createElement.bind(null,'h1')

var MultiSelect = React.createFactory(React.createClass({displayName: 'MultiSelect',
  getInitialState: function () {
    return {
      Neighborhood: null,
      Neighborhoods: []
    }
  },
  handleChange: function (Neighborhood) {
    this.setState({ Neighborhood: Neighborhood })
  },
  handleMultiChange: function (Neighborhoods) {
    this.setState({ Neighborhoods: Neighborhoods })
  },
  render: function () {
    return(
      div({className: "example"},
        h1(null, "Select Box MultiSelect"),
        SelectBox(
          {
            label: "Favorite Neighborhood",
            className: 'my-example-select-box',
            onChange: this.handleChange,
            value: this.state.Neighborhood
          },
          option({key: 'East Village', value: 'East Village'}, 'East Village'),
          option({value: 'West Village'}, 'West Village'),
          option({value: 'Midtown West'}, 'Midtown West'),
          option({value: 'Midtown East'}, 'Midtown East'),
          option({value: 'Upper West Side'}, 'Upper West Side'),
          option({value: 'Upper East Side'}, 'Light Upper East Side with')
        ),
        h1(null, "Multi Select MultiSelect"),
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
        )
      )
    )
  }
}))

export default MultiSelect
