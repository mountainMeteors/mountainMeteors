import React from 'react';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';


import ListingTabs from './ListingTabs';
import ListingEntry from './ListingEntry';
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
      viewMode: 'active',
      sortBy: 'location',
      listingsFiltered: []
    }

    this.filterListings = this.filterListings.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.calcScore = this.calcScore.bind(this);
  }

  componentWillMount() {
    this.filterListings(this.props.listings);
  }

  //TODO: util
  calcScore(listing, prefTotal) {
    let prefs = this.props.prefs;
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
        met: listing.no_fee === prefs.fees[0].value.toLowerCase(),
        options: 1
      },
    }

    //Calculate amenities
    prefs.Amenities.forEach(amenity => {
      criteria[amenity.value] = {
        percent: (prefs.amenitiesRank / prefTotal) / prefs.Amenities.length,
        met: Boolean(listing[amenity.value])
          //criteria['bike'].met should be true if Boolean(listing['bike']) === 0  //  false if === 1
      }
    });

    //Calculate score
    let score = 100;
    for (var crit in criteria) {
      if (!criteria[crit].met) score -= criteria[crit].percent
    }
    score = score.toFixed(2);
    return score;
  }

  //TODO: util
  filterListings(listings) {
    // let listingsFiltered = listings;

    //ONLY SHOW LISTINGS OF TYPE X
    let listingsFiltered = listings.slice();
    if (this.state.viewMode === 'active') {
      listingsFiltered = listingsFiltered.filter(
        listing => !Boolean(listing.archived)
      );
    } else {
      listingsFiltered = listingsFiltered.filter(
        listing => {
          return Boolean(listing[this.state.viewMode])
        }
      );
    }

    //ASSIGN SCORES TO LISTINGS
    let prefs = this.props.prefs;
    let prefTotal = prefs.feeRank + prefs.rentRank + prefs.petRank;
    // listingsFiltered.map(listing => {
    //   listing.score = this.calcScore(listing, prefTotal);
      // console.log('listing score now', listing.score);
    // })
    // .sort((l1,l2) => {
    //   console.log('comparing', l1.score, l2.score);
    //   return l1.score - l2.score
    // });

    //ADD AMENITIES TO EACH LISTING
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

    this.setState({listingsFiltered});
  }

  // componentDidUpdate() {
  //   this.state.listingsFiltered.sort((listingA, listingB) =>
  //     listingA[this.state.sortBy] + listingB[this.state.sortBy]
  //   );
  // }

  //When props are passed in, filters listings.
    //Needed because the props are passed to this component AFTER it renders
  componentWillReceiveProps(props) {
    this.filterListings(props.listings);
  }

  //Toggles state.viewMode and then updates listing
  toggleView(toggleVal) {
    this.setState({viewMode: toggleVal},
      () => {this.filterListings(this.props.listings)}
    );
  }

  render() {
    return (
      <div className="scroll">
        <ListingTabs toggleView={this.toggleView.bind(this)}/>
        {this.state.listingsFiltered.map((listing, i) =>
          <ListingEntry key={i} listing={listing} viewMode={this.state.viewMode} />
        )}
      </div>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({putListing}, dispatch);
}

export default connect(null, mapDispatchToProps)(Listing);
