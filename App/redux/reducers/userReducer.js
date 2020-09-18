
import { Add_User, Delete_User, Edit_User } from '../actions/actionType';

const initialState = {
  userList: []
}

function editUserHelper(array, action) {
  array.forEach(element => {
    console.log('element key', element.key, 'key', action.key);
    if (element.key == action.key) {
      console.log('in the fn123');
      element.userObj = action.userObj;
    }
  });
  return array;
}

function addUserHelper(array, action) {
  console.log('array', array);
  console.log('actioninfn', action.userObj);
  array.push({
    'key': Math.random(),
    'userObj': action.userObj
  })
  console.log('New Array', array);
  return array;
}

const userReducer = (state = initialState, action) => {
  console.log('action', action.type);

  if (action.type == 'Add_User') {
    console.log("In the condition");
    return {
      ...state,
      userList: addUserHelper(state.userList, action)
    }
  }
  else if (action.type == 'Edit_User') {
    return {
      ...state,
      userList: editUserHelper(state.userList, action)
    }
  }
  else if (action.type == 'Delete_User') {
    return {
      ...state,
      userList: state.userList.filter((item) =>
        item.key !== action.key
      )
    };
  }
  else {
    return {
      ...state,
      userList: state.userList
    }
  }
}

export default userReducer;