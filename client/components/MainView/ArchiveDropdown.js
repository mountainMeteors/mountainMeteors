import React from 'react';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import AddListingsModal from '../AddListingsModal';

class ArchiveDropdown extends React.Component{
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    event.preventDefault();
    let toggleVal = `${eventKey}` === 'true';
    console.log('activeKey', this.activeKey);
    console.log('toggleVal is', toggleVal);
    this.props.toggleArchiveView(toggleVal)
  }

  render() {
    return (
      <div style={{"display": "inline-block", "width": "100%"}}>
        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect} style={{"display": "inline-block"}} activeKey="false">
          <NavItem eventKey="false" title="active">Active</NavItem>
          <NavItem eventKey="true" title="archived">Archived</NavItem>
        </Nav>
        <AddListingsModal modalType="add" />
      </div>
    );
  }
};

export default ArchiveDropdown;
