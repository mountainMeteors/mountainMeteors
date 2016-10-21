import React from 'react';
import { findDOMNode, render } from 'react-dom';
import { Overlay, Popover, Glyphicon } from 'react-bootstrap';

class DemoUrl extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ showPopover: !this.state.showPopover })
  }

  render() {
    const sharedProps = {
      show: this.state.showPopover,
      container: this,
      target: () => findDOMNode(this.refs.target)
    };

    return (
      <div>
        <span style={{'marginRight': '6px'}} />
        <Glyphicon glyph="question-sign" ref="target" onClick={this.toggle} style={{'color': 'blue', 'fontSize': '9px'}}/>
        <Overlay {...sharedProps} placement="right">
          <Popover id="popover-positioned-right" style={{'width': '800px'}}>
            <strong>Example URL: </strong><br/>
            {'http://www.apartments.com/105-w-16th-st-new-york-ny/qz8qfny/'}
          </Popover>
        </Overlay>
     </div>
    )
  }

}

export default DemoUrl;
