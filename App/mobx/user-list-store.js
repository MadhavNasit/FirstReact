import { decorate, observable, action } from "mobx";

class UserListStore {

  User_Data = [];

  index = 0;
  addUser = (userObj) => {
    this.User_Data.push({
      'key': this.index,
      'userObj': userObj
    })
    this.index++;
  }

  editUser = (key, userObj) => {
    this.User_Data.forEach(element => {
      if (element.key == key) {
        element.userObj = userObj;
      }
    });
  }

  deleteUser = (key) => {
    this.User_Data = this.User_Data.filter((item) =>
      item.key !== key
    )
  }
}

decorate(UserListStore, {
  User_Data: observable,
  addUser: action,
  editUser: action,
  deleteUser: action,
});

export default new UserListStore();
