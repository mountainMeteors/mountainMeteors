  import React from 'react';
  import Form, { Input, Fieldset } from 'react-bootstrap-form';


  const submitButton = React.createClass({
    componentWillMount(){
      console.log("iiiiiiiiiii");
    },
    renderComment(comment, i) {
      return (
        <div className="comment" key={i}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
          </p>
        </div>
      )
    },
    handleSubmit(e) {
      e.preventDefault();
      const { postId } = this.props.params;
      const author = this.refs.author.value;
      const comment = this.refs.comment.value;
      this.props.addComment(postId, author, comment);
      this.refs.commentForm.reset();
    },
    render() {
      console.log('hhhhheii')
      return (
        <div className="comments">
          {this.props.postComments.map(this.renderComment)}
          <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
            <input type="text" ref="author" placeholder="author"/>
            <input type="text" ref="comment" placeholder="comment"/>
            <input type="submit" hidden />
          </form>
        </div>
      )
    }
  });

  export default submitButton;






/*
  const submitButton = React.createClass({
    onFormSubmit: function (e) {
      e.preventDefault();

      var address = this.refs.address
.value;

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
*/
