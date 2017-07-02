import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component{
  renderField(field){
    const { meta: { touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values){
    //this === component
    console.log(values);
  }


  render() {
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values){
  //console.log(values); { title: 'sri', categories:'king', 'content':'Believe in God'}
  //create an error object
  const errors = {};

  //validate inputs from values object
  if(!values.title){
    errors.title = "Enter a valid title";
  }

  if(!values.categories){
    errors.categories = "Enter some categories";
  }

  if(!values.content){
    errors.content = "Enter some content please";
  }

  //If errors is empty then the form is fine to submit
  //if errors has *any* properties, redux form assumes form is invalid

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
}) (PostsNew);
