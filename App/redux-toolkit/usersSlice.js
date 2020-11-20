import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  User_Data: []
}
let index = 0;
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      state.User_Data.push({
        'key': index,
        'userObj': action.payload
      })
      index++;
    },
    editUser(state, action) {
      const { key, userObj } = action.payload
      state.User_Data.forEach(element => {
        if (element.key == key) {
          element.userObj = userObj;
        }
      });
    },
    deleteUser(state, action) {
      state.User_Data = state.User_Data.filter((item) =>
        item.key !== action.payload
      )
    }
  }
})

export const {
  addUser,
  editUser,
  deleteUser
} = usersSlice.actions

export default usersSlice.reducer