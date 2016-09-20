import React from 'react';
import submitButton from './submitButton';
import Form, { Input, Fieldset } from 'react-bootstrap-form';
import axios from 'axios'


const Survey = React.createClass({
  getInitialState(){
    return {price: 0}
  },

  onFormSubmit(e) {
    e.preventDefault();
    const price = this.refs.price.value;
    let payload = price
    this.setState({price: price})
    console.log(payload)
    //this.props.talkToServer()
  },

  render() {
    return (
      <div>
        <div className="comments">
          <form>
            <input type="text" ref="Pets?" placeholder="Any furry friends?"/>
          </form>
        </div>
         <form onSubmit={this.onFormSubmit}>
                           <input type="text" ref="price"  placeholder="Enter your price range"/>
                           <button>Get Listings</button>
                         </form>

      </div>
    )
  }

})

module.exports = Survey;
