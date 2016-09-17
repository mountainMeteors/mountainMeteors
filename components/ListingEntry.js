import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const ListingEntry = React.createClass({
  render() {
    const { listing, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${listing.code}`}>
            <img src={listing.display_src} alt={listing.caption} className="grid-photo" />
          </Link>

          <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={listing.likes} className="likes-heart">{listing.likes}</span>
          </CSSTransitionGroup>

        </div>

        <figcaption>
          <p>{listing.caption}</p>
          <div className="control-buttons">
            <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {listing.likes}</button>
            <Link className="button" to={`/view/${listing.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[listing.code] ? comments[listing.code].length : 0 }
              </span>
            </Link>
          </div>
        </figcaption>

      </figure>
    )
  }
});

export default ListingEntry;
