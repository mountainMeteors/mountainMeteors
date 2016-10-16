import React from 'react';
// import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Tabs, Tab} from 'react-bootstrap';
import AddListingsModal from '../AddListingsModal';

class ListingTabs extends React.Component{
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    event.preventDefault();
    let toggleVal = `${eventKey}`;
    console.log('activeKey', this.activeKey);
    console.log('toggleVal is', toggleVal);
    this.props.toggleView(toggleVal)
  }

  render() {
    return (
      <div style={{"display": "inline-block", "width": "100%"}}>
        <Tabs defaultActiveKey="active" onSelect={this.handleSelect} id="uncontrolled-tab-example" style={{"display": "inline-block"}}>
          <Tab eventKey="active" title="Active" />
          <Tab eventKey="archived" title="Archived" />
          <Tab eventKey="favorited" title="Favorites" />
        </Tabs>
        <AddListingsModal modalType="add" />
      </div>
    );
  }
};

export default ListingTabs;
