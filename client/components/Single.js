import React from 'react';
import ListingEntry from './ListingEntry';
// import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { listingId } = this.props.params;

    const i = this.props.listings.findIndex((listing) => listing.code === listingId);
    const listing = this.props.listings[i];

    const listingComments = this.props.comments[listingId] || [];

    return (
      <div className="single-photo">
        <ListingEntry i={i} listing={listing} {...this.props} />
        <Comments listingComments={listingComments} {...this.props} />
      </div>
    )
  }
});

export default Single;
