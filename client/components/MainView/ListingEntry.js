import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import AddListingsModal from '../AddListingsModal';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';


import AddPhotosModal from './AddPhotosModal'
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
    }
  }

  componentDidMount() {
    console.log('rendered LE', this.props);
  }

  toggleArchiveListing(listing) {
    console.log('toggling', listing.id);
    let toggledVal = listing.archived === 0 ? 1 : 0;
    this.props.putListing(listing.id, {archived: toggledVal});
  }

  render() {
    return (
      <div>
        <div className="listing-container">
          <div className="listing-info">
            <div className="listing-addr-rent">
              <span className="listing-addr">{this.props.listing.location}</span>
              <span className="listing-rent">{this.props.listing.rent}</span>
            </div>
            <div className="listing-details">
              <span className="listing-bed-bath">2 Bed / 2 Bath {this.props.listing.sq_ft ? ' / ' + this.props.listing.sq_ft + ' sq. ft' : '' }</span>
              <span className="listing-pets"><strong>Pets:</strong> {this.props.listing.pets}</span>
            </div>
            <div className="listing-amenities-fee">
              <div className="listing-amenities">
                {/* Gym - Laundry - Dishwasher - Garage - Roof -
                Pool - Elevator - Doorman - Outdoor Space */}
                {this.props.listing.amenities}
              </div>
              <div className="listing-fee">
                NO FEE
              </div>
            </div>
          </div>
          <div className="listing-icons">
            <span><Glyphicon glyph="star-empty" /></span>
            <span><Glyphicon glyph="pencil" /></span>
            <span><Glyphicon glyph="camera" /></span>
            <span><Glyphicon glyph="trash" /></span>
          </div>
          <div className="listing-photo">
          </div>
        </div>
      </div>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({putListing}, dispatch);
}

export default connect(null, mapDispatchToProps)(Listing);
