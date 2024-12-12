import React, { Component } from 'react';

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Validate form fields to make sure they're filled
    if (!this.state.firstName || !this.state.lastName || !this.state.email) {
      alert("All fields are required!");
      return;
    }
    
    // Create a new student object based on the state
    const newStudent = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    };

    // Call the parent component's method to add the student
    this.props.onAddStudent(newStudent);
    
    // Clear the form fields after submission
    this.setState({ firstName: '', lastName: '', email: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleFirstNameChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.handleLastNameChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <button type="submit">Add Student</button>
      </form>
    );
  }
}

export default AddStudent;
