
import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


  /*
const styles = {
  customWidth: {
    width: 200,
  },
};


export default class DropdownMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange : function (event, index, value) {
    return this.setState({value});
  }


  render() {
    return (
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
        <br />
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="Custom width" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
      </div>
    );
  }
})


export default DropdownMenu
*/


const styles = {
  customWidth: {
    width: 200,
  },
};


const DropdownMenu = React.createClass({
    getInitialState:function(){
        return {selectValue:'far away from MKS'};
    },
    handleChange:function(e){
        this.setState({selectValue:e.target.value});
    },
    render: function() {
        var message='You selected '+this.state.selectValue;
        return (
        <div>
         <select value={this.state.selectValue}
         onChange={this.handleChange}
         style={styles.customWidth}
         >
            <option value="somewhere near MKS">somewhere near MKS</option>
            <option value="MKS">MKS</option>
            <option value="West Village">West Village</option>
            <option value="East Village">East Village</option>
          </select>
          <p>{message}</p>
          </div>
        );
    }
});


export default DropdownMenu
