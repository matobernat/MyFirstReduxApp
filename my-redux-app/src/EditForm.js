import React, { Component } from 'react'

class AddForm extends Component{
  constructor(props) {
    super(props)

    this.initialState = {
      name: this.props.currentEditUser.name,
      surname: this.props.currentEditUser.surname
    }

    this.state = this.initialState
  }


  handleChange = event => {

    if (event.target.name === "name"){
      this.setState({
        name: event.target.value,
      })
    }
    else{
      this.setState({
        surname: event.target.value
      })
    }

  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.props.currentEditUser.id = nextProps.currentEditUser.id
    this.setState({
      name: nextProps.currentEditUser.name,
      surname: nextProps.currentEditUser.surname,
    })
  }


  handleSubmit = (event) => {
    this.props.updateUser({id: this.props.currentEditUser.id, name: this.state.name, surname: this.state.surname, job: this.props.job})
  }

  render(){

    return (
      <div className = "editDiv">
        <h2> Edit: </h2>
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
          <input type="button" value="Submit" onClick = {this.handleSubmit}/>
        </form>
      </div>
    );
  }
}

export default AddForm;
