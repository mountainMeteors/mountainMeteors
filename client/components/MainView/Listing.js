import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { putListing } from '../../actionCreators/listingActions.js';
import AddListingsModal from '../AddListingsModal';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import postPhotos from './PostPhotos'
import AddPhotosModal from './AddPhotosModal'
import { Link } from 'react-router';

//Formatting
const rentDisplay = cell => cell[0] === '$' ? cell : '$' + cell;
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
    this.addrFormat = this.addrFormat.bind(this);
    this.calcScore = this.calcScore.bind(this);
  }

  calcScore(listing, prefTotal) {
    let prefs = this.props.prefs;
    console.log('looking at listing', listing);
    console.log('using prefs', this.props.prefs);
    let criteria = {
      // TODO: location: {},
      rent: {
        percent: prefs.rentRank / prefTotal * 100,
        met: parseInt(listing.rent) > prefs.RentMin.value &&
             parseInt(listing.rent) < prefs.RentMax.value,
        options: 1
      },
      pets: {
        percent: prefs.petRank / prefTotal * 100,
        met: listing.pets.toLowerCase() === prefs.Pets[0].label.toLowerCase() ||
             listing.pets.toLowerCase() === 'none',
        options: 1
      },
      // TODO: amenities: {
      //   percent: prefs.amenitiesRank / prefTotal,
      //   met: TK,
      //   options: prefs.Amenities.length
      // },
      no_fee: {
        percent: prefs.feeRank / prefTotal * 100,
        met: listing.no_fee === prefs.fees.value.toLowerCase(),
        options: 1
      }
    }
    let score = 100;
    for (var crit in criteria) {
      if (!criteria[crit].met) score -= criteria[crit].percent
    }
    score = score.toFixed(2);
    console.log('returning score', score);
    return score;


  }

  //Takes existing props (passed in) and filters them based on this.state.showArchived bool
  filterListings(listings) {
    console.log('filtering', listings);
    let listingsFiltered = listings.slice().filter(
      listing => Boolean(listing.archived) === this.state.showArchived
    );
    let prefs = this.props.prefs;
    let prefTotal = prefs.feeRank + prefs.rentRank + prefs.petRank;
    listingsFiltered.map(listing => {
      listing.score = this.calcScore(listing, prefTotal);
    })
    // .sort((l1,l2) => {
    //   console.log('comparing', l1.score, l2.score);
    //   return l1.score - l2.score
    // });
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
    console.log('listing received props');
    this.filterListings(props.listings);
  }

  //Toggles state.showArchived and then updates listing
  toggleArchiveView() {
    this.setState({showArchived: !this.state.showArchived},
      () => {this.filterListings(this.props.listings)}
    );
  }

  toggleArchiveListing(listing) {
    console.log('toggling', listing.id);
    let toggledVal = listing.archived === 0 ? 1 : 0;
    this.props.putListing(listing.id, {archived: toggledVal});
  }

  addrFormat(cell, listing, enumObject, index) {
    return (
      <div onClick={ () => {
          this.toggleArchiveListing(listing)}
      }>{ cell }
      <br/>

      </div>
    );
  }

  editFormat (cell, listing) {
    return (
      <div><AddListingsModal listing={listing} modalType="edit" /></div>

    )
  }

  photoFormat (cell, listing) {
    console.log('passing listing', listing)
    return (
      <div><AddPhotosModal listing={listing} /></div>
    )
  }



  scoreFormat (cell, listing) {
    return (
      <div>{listing.score}</div>
    )
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
            <TableHeaderColumn dataField="" dataSort={true} dataFormat={this.editFormat}>
              Edit
            </TableHeaderColumn>
            <TableHeaderColumn dataField="" dataSort={true} dataFormat={this.photoFormat}>
              Photos
            </TableHeaderColumn>
            <TableHeaderColumn dataField="score" dataSort={true} >
              Score
            </TableHeaderColumn>
          </BootstrapTable>
        }
      </div>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({putListing}, dispatch);
}

export default connect(null, mapDispatchToProps)(Listing);
