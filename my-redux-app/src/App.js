import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './detailStyle.css'
import Table from './Table.js'
import AddForm from './AddForm.js'
import EditForm from './EditForm.js'
import Detail from './DetailForm.js'


import { connect } from 'react-redux';
import {
  loadRequest,
  deleteRequest,
  addRequest,
  updateRequest,
  updateCurrentEditUser,
  updateCurrentDetailUser
} from './actions/user-actions';


class App extends Component {



  componentDidMount(){
    this.props.onLoadRequest();
  }

  render(){

    return (
      <div className="container">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Table
          users = {this.props.users}
          deleteUser = {(userId)=> {this.props.onDeleteRequest(userId)}}
          updateCurrentEditUser = {(userId)=> {this.props.onUpdateCurrentEditUser(userId)}}
          updateCurrentDetailUser = {(userId)=> {this.props.onUpdateCurrentDetailUser(userId)}}
        />

        <AddForm addUser = {(user)=> {this.props.onAddRequest(user)}}/>

        {!this.props.updateDivIsHidden &&
          <EditForm
            currentEditUser = {this.props.currentEditUser}
            updateUser = {(user)=> {this.props.onUpdateRequest(user)}}
          />
        }

        {!this.props.detailDivIsHidden &&
          <Detail
            currentDetailUser = {this.props.currentDetailUser}
          />
        }

      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  return{
    users : state.users,
    currentDetailUser : state.currentDetailUser,
    currentEditUser : state.currentEditUser,
    detailDivIsHidden: state.detailDivIsHidden,
    updateDivIsHidden: state.updateDivIsHidden
  }
};

const mapActionsToProps = {
    onLoadRequest: loadRequest,
    onDeleteRequest: deleteRequest,
    onAddRequest: addRequest,
    onUpdateRequest: updateRequest,
    onUpdateCurrentEditUser: updateCurrentEditUser,
    onUpdateCurrentDetailUser: updateCurrentDetailUser
};

export default connect(mapStateToProps, mapActionsToProps) (App);
