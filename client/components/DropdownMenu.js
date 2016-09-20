import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';


class DropdownMenu extends React.Component {
  render() {
    return (
      <div>
      <Dropdown color="primary" label="Pick a Neighborhood">
        <DropdownItem link="#/link1">Option 1</DropdownItem>
        <DropdownItem> West Village</DropdownItem>
        <DropdownItem>East Village</DropdownItem>
        <DropdownItem>Hudson</DropdownItem>
      </Dropdown>
      </div>
    );
  }
}



export default DropdownMenu
