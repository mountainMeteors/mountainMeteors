import React from 'react';
import { Button } from 'react-bootstrap';
import AddListingsModal from '../AddListingsModal';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import listingPhotosGallery from './listingPhotosGallery'
import ListingEntry from './ListingEntry';
import AddPhotosModal from './AddPhotosModal';
import { Link } from 'react-router';
import { putListing } from '../../actionCreators/listingActions.js';
import css from '../../styles/style.css';

//Formatting
const rentDisplay = cell => cell[0] === '$' ? cell : '$' + cell;
const intToBool = cell  => cell === 0 ? 'yes' : 'no';



class Listing extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      showArchived: false,
      sortBy: 'location',
      listingsFiltered: []
    }

    this.filterListings = this.filterListings.bind(this);
    this.toggleArchiveView = this.toggleArchiveView.bind(this);
    this.calcScore = this.calcScore.bind(this);
  }

  componentWillMount() {
    // console.log('listing mount props', this.props);
    this.filterListings(this.props.listings)
    // this.setState({
    //   listingsFiltered
      // listingsFiltered : this.props.listings.slice().filter(
      //   listing => Boolean(listing.archived) === this.state.showArchived
      // )
    // })
    // console.log('listing state after', this.state);
  }

  //TODO: util
  calcScore(listing, prefTotal) {
    let prefs = this.props.prefs;
    // console.log('looking at listing', listing);
    // console.log('using prefs', this.props.prefs);
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
      // apt_type: {
      //   percent: prefs.aptType / prefTotal * 100,
      //   met: listing.aptType === prefs.aptType.value.toLowerCase(),
      //   options: 1
      // },
      // sq_ft: {
      //   percent: prefs.rentRank / prefTotal * 100,
      //   met: parseInt(listing.rent) > prefs.sqftMin.value &&
      //        parseInt(listing.rent) < prefs.sqftMax.value,
      //   options: 1
      // },
      no_fee: {
        percent: prefs.feeRank / prefTotal * 100,
        met: listing.no_fee === prefs.fees.value.toLowerCase(),
        options: 1
      },
    }

    //Calculate amenities
    prefs.Amenities.forEach(amenity => {
      // console.log('pref amenity', amenity.value);
      // console.log('listing value', listing[amenity.value]);
      criteria[amenity.value] = {
        percent: (prefs.amenitiesRank / prefTotal) / prefs.Amenities.length,
        met: Boolean(listing[amenity.value])
          //criteria['bike'].met should be true if Boolean(listing['bike']) === 0  //  false if === 1
      }
    });

    // console.log('calculating score with criteria', criteria);
    //Calculate score
    let score = 100;
    for (var crit in criteria) {
      if (!criteria[crit].met) score -= criteria[crit].percent
    }
    score = score.toFixed(2);
    // console.log('returning score', score);
    return score;
  }

  //TODO: util
  //Takes existing props (passed in) and filters them based on this.state.showArchived bool
  filterListings(listings) {
    console.log('filtering', listings);
    // console.log('using prefs', this.props.prefs);
    // let listingsFiltered = listings;
    let listingsFiltered = listings.slice().filter(
      listing => Boolean(listing.archived) === this.state.showArchived
    );
    let prefs = this.props.prefs;
    let prefTotal = prefs.feeRank + prefs.rentRank + prefs.petRank;
    listingsFiltered.map(listing => {
      listing.score = this.calcScore(listing, prefTotal);
      // console.log('listing score now', listing.score);
    })
    // .sort((l1,l2) => {
    //   console.log('comparing', l1.score, l2.score);
    //   return l1.score - l2.score
    // });
    let amenityTypes = ['Gym', 'Laundry', 'Dishwasher', 'Garage', 'Outdoor_Space', 'Roof', 'Pool', 'Elevator', 'Doorman'];
    //TODO: So bad, so quadratic. Refactor so that amenities are entered into DB as stringified json
    listingsFiltered.forEach(listing => {
      listing.amenities = [];
      // console.log('ADDING AMENITIES FOR LISTING', listing);
      amenityTypes.forEach(amenity => {
        if (Boolean(listing[amenity.toLowerCase()])) listing.amenities.push(amenity);
      });
      listing.amenities = listing.amenities.join(' - ');
    })

    console.log('setting state to', listingsFiltered);
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
    console.log('listing received props', props);
    this.filterListings(props.listings);
  }

  //Toggles state.showArchived and then updates listing
  toggleArchiveView() {
    // console.log('toggling arch view. before:', this.state.showArchived);
    this.setState({showArchived: !this.state.showArchived},
      () => {this.filterListings(this.props.listings)}
    );
    // this.setState({showArchived: !this.state.showArchived});
    // console.log('state arch after', this.state.showArchived);
  }

  render() {
    return (
      <div>
        <Button bsStyle="info" bsSize="small" onClick={this.toggleArchiveView}>Archived</Button>
        <AddListingsModal modalType="add" />
        <listingPhotosGallery />
        {this.state.listingsFiltered.map((listing, i) =>
          <ListingEntry key={i} listing={listing} />
        )}
      </div>
    )
  }
};




function mapDispatchToProps(dispatch) {
  return bindActionCreators({putListing}, dispatch);
}

export default connect(null, mapDispatchToProps)(Listing);