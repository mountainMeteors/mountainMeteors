import React from 'react';
import { Button } from 'react-bootstrap';
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

    this.toggleArchiveView = this.toggleArchiveView.bind(this);
  }

  toggleArchiveListing(listing) {
    console.log('toggling', listing.id);
    let toggledVal = listing.archived === 0 ? 1 : 0;
    this.props.putListing(listing.id, {archived: toggledVal});
  }

  render() {
    return (
      <div>
        <Button bsStyle="info" bsSize="small" onClick={this.toggleArchiveView}>Archived</Button>
            <div className="listing-container">
              <div className="listing-info">
                <div className="listing-addr-rent">
                  <span className="listing-addr">743 Evergreen Terrace</span>
                  <span className="listing-rent">$1,750</span>
                </div>
                <div className="listing-details">
                  <span className="listing-bed-bath">2 Bed / 2 Bath / 700 sq. ft</span>
                  <span className="listing-pets"><strong>Pets:</strong> None</span>
                </div>
                <div className="listing-amenities-fee">
                  <div className="listing-amenities">
                    Gym - Laundry - Dishwasher - Garage - Roof -
                    Pool - Elevator - Doorman - Outdoor Space
                  </div>
                  <div className="listing-fee">
                    NO FEE
                  </div>
                </div>
              </div>
              <div className="listing-icons">
                <span>S</span>
                <span>E</span>
                <span>C</span>
                <span>A</span>
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
