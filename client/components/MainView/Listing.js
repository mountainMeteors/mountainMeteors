import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

//Formatting
const rentDisplay = cell => '$' + cell;
const intToBool = cell  => cell === 0 ? 'yes' : 'no';



class Listing extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log('Listing props', this.props);
  }

  render() {
    return (
      <div>
        <BootstrapTable data={this.props.listings} hover={true} pagination={true}>
          <TableHeaderColumn dataField="location" isKey={true} dataSort={true}>
            Address
          </TableHeaderColumn>
          <TableHeaderColumn dataField="rent" dataSort={true} dataFormat={rentDisplay}>
            Rent
          </TableHeaderColumn>
          <TableHeaderColumn dataField="pets" dataSort={true}>
            Pets
          </TableHeaderColumn>
          <TableHeaderColumn dataField="gym" dataSort={true} dataFormat={intToBool}>
            Gym
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
};

export default Listing;
