
import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
  import Form, { Input, Fieldset } from 'react-bootstrap-form';


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
        var selection = this.state.selectValue
        {console.log(message, selection)}
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
              <button className="btn btn-primary" type="submit">Submit</button>


          </div>
        );
    }
});


export default DropdownMenu
