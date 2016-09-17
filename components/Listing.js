import React from 'react';
import ListingEntry from './ListingEntry';

const Listing = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.listings.map((listing, i) => <ListingEntry {...this.props} key={i} i={i} listing={listing} />)}
      </div>
    )
  }
});

export default Listing;
