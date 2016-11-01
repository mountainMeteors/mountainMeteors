import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';


import AddListingsModal from '../AddListingsModal'
import AddPhotosModal from './AddPhotosModal'
import ListingPhotosGallery from './ListingPhotosGallery'
import { Link } from 'react-router';
import { putListing } from '../../actionCreators/listingActions.js';
import { fetchPhotos } from '../../actionCreators/photoActions.js';
import css from '../../styles/style.css';

//Formatting
const rentDisplay = cell => cell[0] === '$' ? cell : '$' + cell;
const intToBool = cell  => cell === 0 ? 'yes' : 'no';
const formatBedBath = function(listing) {
  let formattedStr = '';
  if (listing.bedrooms) {
    formattedStr += listing.bedrooms.split(' ')[0];
    if (formattedStr.length > 0 && formattedStr.toLowerCase() !== 'studio') {
      formattedStr += ' Bed'
    }
  }
  if (listing.bathrooms) {
    if (formattedStr.length) formattedStr += ' / ';
    formattedStr += listing.bathrooms.split(' ')[0] + ' Bath';
  }

  if (listing.sq_ft) {
    if (formattedStr.length) formattedStr += ' / ';
    formattedStr += listing.sq_ft + ' Sq. Ft.'
  }

  console.log('returning', formattedStr);
  return formattedStr;
}




class ListingEntry extends React.Component{
  constructor(props){
    super(props);
    console.log('LE brought in', props);
    console.log('LE finding photos', props.photosAll, props.listing.id);
    console.log('LE photos will be', props.photosAll[props.listing.id]);

    this.state = {
      favorited: props.listing.favorited,
      photos: props.photosAll[props.listing.id] || {},
      photosLoaded: false
    }

    // console.log('faved value', props.listing.favorited);

    this.toggleFavoriteListing = this.toggleFavoriteListing.bind(this);
  }

  componentWillMount() {
    // this.state.thumbnail = this.props.fetchPhotos(this.props.listing.id);
  }

  componentDidMount() {
    // console.log('rendered LE', this.props);
    this.props.fetchPhotos(this.props.listing.id)
    .then(() => {
      console.log('LE promised photos are', this.props.photosAll);
      this.setState({
        photos: this.props.photosAll[this.props.listing.id],
        photosLoaded: true
      });
    });

    //Might work, but 2-way business
    // .then((photos) => {
      // console.log('LE promised photos are', photos);
    // });
  }

  toggleArchiveListing(listing) {
    console.log('toggling', listing.id);
    let toggledVal = listing.archived === 0 ? 1 : 0;
    this.props.putListing(listing.id, {archived: toggledVal, favorited: 0});
  }

  toggleFavoriteListing(listing) {
    console.log('toggling', listing.id);
    let toggledVal = listing.favorited === 0 ? 1 : 0;
    this.props.putListing(listing.id, {favorited: toggledVal});
  }

  getFavoriteClass(val) {
    if (val === 1 || this.props.viewMode === 'favorited') return <Glyphicon glyph="star" />;
    else return <Glyphicon glyph="star-empty" />;
  }

  render() {
    return (
      <div>
        <div className="listing-container">
          <div className="listing-info">
            <div className="listing-addr-rent">
              <span className="listing-addr"><a href={this.props.listing.url} target="_blank" className="listing-addr">{this.props.listing.location}</a></span>
              <span className="listing-rent">{this.props.listing.rent}</span>
            </div>
            <div className="listing-details">
              <span className="listing-bed-bath">
                {formatBedBath(this.props.listing)}
              </span>
              <span className="listing-pets"><strong>Pets:</strong> {this.props.listing.pets}</span>
            </div>
            <div className="listing-amenities-fee">
              <div className="listing-amenities">
                {/* Gym - Laundry - Dishwasher - Garage - Roof -
                Pool - Elevator - Doorman - Outdoor Space */}
                {this.props.listing.amenities}
              </div>
              <div className="listing-fee">
                {this.props.listing.no_fee ?
                  'NO FEE'
                  : ''
                }
              </div>
            </div>
          </div>
          <div className="listing-icons">
            <span className="clickable" onClick={() => {this.toggleFavoriteListing(this.props.listing)}}>
              {this.getFavoriteClass(this.state.favorited)}
            </span>
            <span className="clickable">
              <AddListingsModal listing={this.props.listing} modalType="edit" />
            </span>
            <span className="clickable">
              <AddPhotosModal listing={this.props.listing} />
            </span>
            <span className="clickable">
              {this.state.photosLoaded ?
                <ListingPhotosGallery listing={this.props.listing} photos={this.state.photos}/>
              :
                '...'
              }
            </span>
            <span className="clickable" onClick={() => {this.toggleArchiveListing(this.props.listing)}}>
              <Glyphicon glyph="trash" />
            </span>
          </div>
          <div className="listing-photo" style={{'backgroundImage': 'url(http://localhost:2500/uploads/apt_placeholder.png)'}}>
          </div>
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    photosAll: state.photoFiles
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({putListing, fetchPhotos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingEntry);
