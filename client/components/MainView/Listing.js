import React from 'react';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

//Formatting
const rentDisplay = cell => '$' + cell;
const intToBool = cell  => cell === 0 ? 'yes' : 'no';



class Listing extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      showArchived: false,
      listingsFiltered: props.listings.slice().filter(
        listing => Boolean(listing.archived) === this.state.showArchived
      )
    }

    this.filterListings = this.filterListings.bind(this)
    this.toggleArchive = this.toggleArchive.bind(this)
  }

  //Takes existing props (passed in) and filters them based on 
  filterListings(props) {
    let listingsFiltered = props.listings.slice().filter(
      listing => Boolean(listing.archived) === this.state.showArchived
    );
    this.setState({listingsFiltered});
  }

  componentWillReceiveProps(props) {
    this.filterListings(props);
  }

  toggleArchive() {
    this.setState({showArchived: !this.state.showArchived},
      () => {this.filterListings(this.props)}
    );
  }

  render() {
    return (
      <div>
        <Button bsStyle="info" bsSize="small" onClick={this.toggleArchive}>Archived</Button>
        <BootstrapTable data={this.state.listingsFiltered} hover={true} pagination={true}>
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
