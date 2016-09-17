import React from 'react';
import surveyForm from './SurveyForm';
import Form, { Input, Fieldset } from 'react-bootstrap-form';



const Survey = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  render() {
    return (
      <div className="bubble">
        <Form>
               <Input type="Text" name="username" label="Location"
                    />,
               <Input type="Date" name="dob" label="Move-in Date"
                     />
               <Input type="TextArea" name="description" label="Number of Rooms" />

               <Fieldset label="">
                 <button className="btn btn-primary" type="submit">submit</button>
               </Fieldset>
             </Form>
      </div>
    )
  }

})  

module.exports = Survey;
