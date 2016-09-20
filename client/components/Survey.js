import React from 'react';
import submitButton from './submitButton';
import Form, { Input, Fieldset } from 'react-bootstrap-form';



const Survey = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const price = this.refs.price.value;
    let payload = price
    this.refs.commentForm.reset();
  },

  render() {
    return (
      <div>
        <div className="comments">
          <form>
            <input type="text" ref="price" placeholder="Enter your price range"/>
            <input type="text" ref="numberOfRooms" placeholder="Enter Number of room"/>
          </form>
        </div>
         <form onSubmit={this.onFormSubmit}>
                           <input type="text" ref="price"/>
                           <button>Get Listings</button>
                         </form>

      </div>
    )
  }

})

module.exports = Survey;
