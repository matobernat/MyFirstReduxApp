import {
  LOAD_USERS,
  UPDATE_CURRENT_DETAIL_USER,
  UPDATE_CURRENT_EDIT_USER,
  HIDE_EDIT_DIV
} from '../actions/user-actions';




export default function reducer(state = '' , action) {

  switch (action.type) {


    case LOAD_USERS:
      return {...state, users: action.payload.users}


     case UPDATE_CURRENT_EDIT_USER:
      var selectedUsers = state.users.filter((user) => { return user.id === action.payload.userId })[0]
      return{...state, currentEditUser: selectedUsers, updateDivIsHidden: false}


      case UPDATE_CURRENT_DETAIL_USER:
        selectedUsers = state.users.filter((user) => { return user.id === action.payload.userId })[0]

         // if u are clicking on same detail, it will be hidind and showing
         if (state.currentDetailUser.id === selectedUsers.id){
           return{...state, detailDivIsHidden: !state.detailDivIsHidden}}
         // else will be shown and changed current detailUser
         return{...state, currentDetailUser: selectedUsers, detailDivIsHidden: false}


        case HIDE_EDIT_DIV:
          return {...state, updateDivIsHidden: action.payload}


    default:
      return state;
  }
}
