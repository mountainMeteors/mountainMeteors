import React from 'react';
import ListingEntry from './ListingEntry';
import { SplitButton, MenuItem } from 'react-bootstrap';
import {Table, Tr} from 'reactable';

const Listing = React.createClass({
  render() {
    return (
      <div>
        {/* Sorter */}
        {/* <SplitButton title="Sort By..." bsStyle="success" pullRight id="split-button-pull-right">
          <MenuItem eventKey="1">Rent</MenuItem>
          <MenuItem eventKey="2">Pets</MenuItem>
          <MenuItem eventKey="3">Gym</MenuItem>
        </SplitButton>
        */}

        <Table className="table">

        {this.props.listings.map((listing, i) =>
          <Tr {...this.props} className="special-row" key={i} i={i} listing={listing} data={{
            '': i+1,
            Rent: listing.rent,
            Pets: listing.pets,
            Gym: listing.gym
          }}/>
        )}
        </Table>
        {/* this.props.listings.map((listing, i) => <ListingEntry {...this.props} key={i} i={i} listing={listing} />)*/}
      </div>
    )
  }
});

export default Listing;
