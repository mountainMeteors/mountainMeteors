import React from 'react';
import ListingEntry from './ListingEntry';

const Listing = React.createClass({
  render() {
    return (
      <div>
        {this.props.listings.map((listing, i) => <ListingEntry {...this.props} key={i} i={i} listing={listing} />)}
      </div>
    )
  }
});

export default Listing;
