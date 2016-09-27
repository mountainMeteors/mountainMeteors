import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import { SplitButton, MenuItem } from 'react-bootstrap';
// import css from '../../styles/react-bootstrap-table.min.css';

const rentDisplay = cell => '$' + cell;

class Listing extends React.Component{
  constructor(){
    super();
  }

  componentDidMount() {
    console.log('Listing props', this.props);
  }

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
};

export default Listing;
