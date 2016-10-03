import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { putListing } from '../../actionCreators/listingActions.js';

//Formatting
const rentDisplay = cell => '$' + cell;
const intToBool = cell  => cell === 0 ? 'yes' : 'no';



class Listing extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      showArchived: false,
      sortBy: 'location',
      listingsFiltered: props.listings.slice().filter(
        listing => Boolean(listing.archived) === this.state.showArchived
      )
    }

    this.filterListings = this.filterListings.bind(this);
    this.toggleArchiveView = this.toggleArchiveView.bind(this);
  }

  //Takes existing props (passed in) and filters them based on this.state.showArchived bool
  filterListings(props) {
    let listingsFiltered = props.listings.slice().filter(
      listing => Boolean(listing.archived) === this.state.showArchived
    );
    this.setState({listingsFiltered});
  }

  componentDidUpdate() {
    this.state.listingsFiltered.sort((listingA, listingB) =>
      listingA[this.state.sortBy] + listingB[this.state.sortBy]
    );
  }

  //When props are passed in, filters listings.
    //Needed because the props are passed to this component AFTER it renders
  componentWillReceiveProps(props) {
    this.filterListings(props);
  }

  //Toggles state.showArchived and then updates listing
  toggleArchiveView() {
    this.setState({showArchived: !this.state.showArchived},
      () => {this.filterListings(this.props)}
    );
  }

  toggleArchiveListing(id) {
    console.log('toggling', id);
  }

  addrFormat = (cell, row, enumObject, index) => {
    return (
      <div onClick={ () => {this.toggleArchiveListing(row.id)} }>{ cell }</div>
    );
  }

  render() {
    return (
      <div>
        <Button bsStyle="info" bsSize="small" onClick={this.toggleArchiveView}>Archived</Button>
          <BootstrapTable data={this.state.listingsFiltered} hover={true} pagination={true}>
            <TableHeaderColumn dataField="location" isKey={true} dataSort={true} dataFormat={ this.addrFormat }>
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
