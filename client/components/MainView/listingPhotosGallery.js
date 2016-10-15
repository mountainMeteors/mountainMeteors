import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../../actionCreators/photoActions'
import { Form, FormControl, FormGroup, Col, Button, ControlLabel, Popover, Tooltip, Glyphicon, Modal } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import css from '../../styles/app.css'




class listingPhotosGallery extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      showIndex: false,
      slideOnThumbnailHover: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenBton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      slideInterval: 2000,
      showVideo: {},
      showModal: false,
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);

  }
 
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.slideInterval !== prevState.slideInterval) {
      // refresh setInterval
      this._imageGallery.pause();
      this._imageGallery.play();
    }
  }


    componentDidMount() {
      console.log('herereeeeer', this.props.photoFiles)
      if (!this.props.photoFiles){
      this.props.fetchPhotos(75)
    }
  }

  _onImageClick(event) {
    console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
  }

  _onImageLoad(event) {
    console.debug('loaded image', event.target.src);
  }

  _onSlide(index) {
    this._resetVideo();
    console.debug('slid to index', index);
  }

  _onPause(index) {
    console.debug('paused on index', index);
  }

  _onScreenChange(fullScreenElement) {
    console.debug('isFullScreen?', !!fullScreenElement);
  }

  _onPlay(index) {
    console.debug('playing from index', index);
  }

  _handleInputChange(state, event) {
    this.setState({[state]: event.target.value});
  }

  _handleCheckboxChange(state, event) {
    this.setState({[state]: event.target.checked});
  }

  _resetVideo() {
    this.setState({showVideo: {}});

    if (this.state.showPlayButton) {
      this.setState({showGalleryPlayButton: true});
    }

    if (this.state.showFullscreenButton) {
      this.setState({showGalleryFullscreenButton: true});
    }
  }

  _toggleShowVideo(url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({showGalleryPlayButton: false});
      }

      if (this.state.showFullscreenButton) {
        this.setState({showGalleryFullscreenButton: false});
      }
    }
  }

  _renderVideo(item) {
    return (
      <div>
      <div className='image-gallery-image'>
        {
          this.state.showVideo[item.embedUrl] ?
            <div className='video-wrapper'>
                <a
                  className='close-video'
                  onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                >
                </a>
                <iframe
                  width='400'
                  height='255'
                  src={item.embedUrl}
                  frameBorder='5'
                >
                </iframe>
            </div>
          :
            <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
              <div className='play-button'></div>
              <img src={item.original}/>
              {
                item.description &&
                  <span
                    className='image-gallery-description'
                    style={{right: '0', left: 'initial'}}
                  >
                    {item.description}
                  </span> }
            </a>
        }
      </div>
      </div>
    );
  }

  render() {

    console.log('in renderrereeeeer', this.props.photoFiles)
    if (!this.props.photoFiles) {
      return <div>loading</div>
    }


      let images = [];
   this.props.photoFiles.forEach(function(item){
    images.push({
      thumnail: 'http://cdn-img1.streeteasy.com/nyc/image/21/226320621.jpg',
      original: `http://cdn-img1.streeteasy.com/nyc/image/21/226320621.jpg`
      // renderItem: this._renderVideo.bind(this)
    })

   })

console.log('imagesssssss', images)

    return (
      <div>
        <div onClick={this.open.bind(this)}>
          <Glyphicon glyph="film" />
        </div>
      <div>
      <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title> Add Listing Photos </Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div>
      <section className='app'>
        <ImageGallery
          ref={i => this._imageGallery = i}
          items={images} 
          lazyLoad={false}
          onClick={this._onImageClick.bind(this)}
          onImageLoad={this._onImageLoad}
          onSlide={this._onSlide.bind(this)}
          onPause={this._onPause.bind(this)}
          onScreenChange={this._onScreenChange.bind(this)}
          onPlay={this._onPlay.bind(this)}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
          showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailHover={this.state.slideOnThumbnailHover}
        />
      </section>
            </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={this.close.bind(this)}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
    </div>

    );
  }
}


function mapStateToProps(state){
  console.log('mapppp staeeee******',state.photoFiles)
  return { 
    photoFiles: state.photoFiles.all
   };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPhotos }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps) (listingPhotosGallery);
