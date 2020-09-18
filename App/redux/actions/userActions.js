import { Add_User, Delete_User, Edit_User } from "./actionType";


export const AddUser = (userObj) => (
  {
    type: Add_User,
    userObj
  }
);
export const EditUser = (key, userObj) => (
  {
    type: Edit_User,
    key: key,
    userObj
  }
);
export const DeleteUser = (key) => (
  {
    type: Delete_User,
    key: key
  }
);