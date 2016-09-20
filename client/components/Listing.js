import React from 'react';
// import ListingEntry from './ListingEntry';
import { SplitButton, MenuItem } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import styles from '../styles/react-bootstrap-table.min.css';
// import {Table, Thead, Th, Tr} from 'reactable';

function rentDisplay(cell, row){
  return '$' + cell;
}

const Listing = React.createClass({
  render() {
    return (
      <div>

        <BootstrapTable data={this.props.listings} hover={true} pagination={true}>
          <TableHeaderColumn dataField="address" isKey={true} dataSort={true}>
            Address
          </TableHeaderColumn>
          <TableHeaderColumn dataField="rent" dataSort={true} dataFormat={rentDisplay}>
            Rent
          </TableHeaderColumn>
          <TableHeaderColumn dataField="pets" dataSort={true}>
            Pets
          </TableHeaderColumn>
          <TableHeaderColumn dataField="gym" dataSort={true}>
            Gym
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
});

export default Listing;
