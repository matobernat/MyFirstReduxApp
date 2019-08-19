import React, { Component } from 'react'

class Table extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      users : {id: '', name: '', surname: '', job: ''}
    }
    this.state = this.initialState
  }

  render() {

    return (
      <div className = "tableDiv">
      <h1>Hello, this is list of users </h1>
      <table className = "table table-sm">
      <TableHeader />
      <TableBody
        users = {this.props.users}
        deleteUser = {this.props.deleteUser}
        updateCurrentEditUser = {this.props.updateCurrentEditUser}
        updateCurrentDetailUser = {this.props.updateCurrentDetailUser}
        />
      </table>
      </div>
    )
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.users.map((row,index) => {

    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.surname}</td>
        <td>
          <button onClick={() => props.updateCurrentDetailUser(row.id)} >detail</button>
        </td>
        <td>
          <button onClick={() => props.updateCurrentEditUser(row.id)} >edit</button>
        </td>
        <td>
          <button onClick={() => props.deleteUser(row.id)} >Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>

}
export default Table
