
export const UPDATE_USER = 'user: updateUser';
export const LOAD_USERS = 'users: loadUsers';
export const UPDATE_CURRENT_EDIT_USER = 'currentEditUser: updateUser'
export const UPDATE_CURRENT_DETAIL_USER = 'currentDetailUser: updateUser'
export const HIDE_EDIT_DIV = 'updateDivIsHidden : true'




export function loadUsers(newUsers){
  return{
    type: LOAD_USERS,
    payload: {
      users: newUsers
    }
  }
}


export function loadRequest(){
  return dispatch => {
    const url =
      'http://localhost:8888/user'

    fetch(url)
      .then(result => result.json())
      .then(result => { dispatch(loadUsers(result))
      })
  }
}


export function deleteRequest(userId){
  return dispatch =>{
    const url = 'http://localhost:8888/user'
    return fetch(url + '/' + userId, {
      method: 'delete'
    })
    .then(response => response.json(), dispatch(loadRequest())
    );
  }
}


export function addRequest(user){
  return dispatch =>{
    fetch('http://localhost:8888/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: user.name,
        surname: user.surname,
        job: user.job
      })
    })
    dispatch(loadRequest())
  }
}


export function updateRequest(user){
  return dispatch =>{
    const url = 'http://localhost:8888/user'

    fetch(url + '/' + user.id, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: user.name,
        surname: user.surname,
      })
    })
    dispatch(hideEditDiv())
    dispatch(loadRequest())
  }
}


export function updateCurrentEditUser(userId){
  return{
    type: UPDATE_CURRENT_EDIT_USER,
    payload: {
      userId: userId
    }
  }
}

export function updateCurrentDetailUser(userId){
  return{
    type: UPDATE_CURRENT_DETAIL_USER,
    payload: {
      userId: userId
    }
  }
}

export function hideEditDiv(){
  return{
    type: HIDE_EDIT_DIV,
    payload: {
      updateDivIsHidden : true
    }
  }
}
