import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const ListingEntry = React.createClass({
  render() {
    const { listing, i, comments } = this.props;
    return (
      <div>
        {listing.listingId}&nbsp;
        {listing.rent}&nbsp;
        {listing.pets}&nbsp;
        {listing.gym}&nbsp;
        <br/>
        <br/>
      </div>
    )
  }
});

export default ListingEntry;
