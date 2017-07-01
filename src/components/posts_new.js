import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
  renderField(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }


  render() {
    return(
      <form>
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
