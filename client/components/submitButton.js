  import React from 'react';
  import Form, { Input, Fieldset } from 'react-bootstrap-form';


  const submitButton = React.createClass({
    onFormSubmit: function (e) {
      e.preventDefault();

      var location = this.refs.location.value;

      // if (location.length > 0) {
      //   this.refs.location.value = '';
      //   this.props.onSearch(location);
      // }
    },


  render() {
    return (
      <div className="comments">
        // {this.props.listingComments.map(this.renderComment)}
        <Form>
               <Input type="Text" name="username" label="Username"
                    />,
               <Input type="Date" name="dob" label="Move in Date"
                     />
               <Input type="TextArea" name="description" label="Description" />

               <Fieldset label="">
                 <button className="btn btn-primary" type="submit">Post</button>
               </Fieldset>
             </Form>
      </div>
    )
  }
});

export default submitButton;
