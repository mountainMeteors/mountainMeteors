import React from 'react';
// import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Tabs, Tab} from 'react-bootstrap';
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
        <Tabs defaultActiveKey="false" onSelect={this.handleSelect} id="uncontrolled-tab-example" style={{"display": "inline-block"}}>
          <Tab eventKey="false" title="Active" />
          <Tab eventKey="true" title="Archived" />
        </Tabs>
        <AddListingsModal modalType="add" />
      </div>
    );
  }
};

export default ArchiveDropdown;
