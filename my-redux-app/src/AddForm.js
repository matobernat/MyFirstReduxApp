import React, { Component } from 'react'

class AddForm extends Component{
  constructor(props) {
    super(props)

    this.initialState = {
      name: '',
      surname: '',
      job: ''
    }

    this.state = this.initialState
  }

  handleChange = event => {

    switch (event.target.name) {

      case "name":
        this.setState({ name: event.target.value }); break;

      case "surname":
        this.setState({ surname: event.target.value }); break;

      default:
        this.setState({ job: event.target.value });
    }
  }


  handleSubmit = (event) => {
    this.setState(this.initialState);
    this.props.addUser(this.state)
  }

  render(){

    return (
      <div className = "registerDiv">
        <h2> Register: </h2>
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value= {this.state.name}
            onChange={this.handleChange} />
          <label>Surname</label>
          <input
            type="text"
            name="surname"
            value= {this.state.surname}
            onChange={this.handleChange} />
          <label>Job</label>
            <input
              type="text"
              name="job"
              value= {this.state.job}
              onChange={this.handleChange} />
          <input type="button" value="Submit" onClick = {this.handleSubmit}/>
        </form>
      </div>
    );
  }
}

export default AddForm;
