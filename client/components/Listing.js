import React from 'react';
import ListingEntry from './ListingEntry';
import { SplitButton, MenuItem } from 'react-bootstrap';
import {Table, Thead, Th, Tr} from 'reactable';

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
          <Thead>
            <Th className="table-head" column=''></Th>
            <Th className="table-head" column="Rent">Rent</Th>
            <Th className="table-head" column="Pets">Pets</Th>
            <Th className="table-head" column="Gym">Gym</Th>
          </Thead>

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
