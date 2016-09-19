import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { Glyphicon } from 'react-bootstrap'

const ListingEntry = React.createClass({
  render() {
    {console.log('props', this.props)}
    const { listing, i, comments } = this.props;
    return (
      <div>
<<<<<<< HEAD
        <Glyphicon glyph="triangle-right" />
        Rent: {listing.rent}&nbsp;
        <br/>
        <Glyphicon glyph="triangle-right" />
        Pet: {listing.pets}&nbsp;
        <br/>
        <Glyphicon glyph="triangle-right" />
        Gym: {listing.gym}&nbsp;
=======
        {listing.listingId}{' '}
        {listing.rent}{' '}
        {listing.pets}{' '}
        {listing.gym}{' '}
>>>>>>> featBranch
        <br/>
        <br/>
      </div>
    )
  }
});

export default ListingEntry;
