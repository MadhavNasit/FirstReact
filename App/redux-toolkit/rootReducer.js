import { combineReducers } from '@reduxjs/toolkit'

import usersSliceReducer from './usersSlice'

const rootReducer = combineReducers({
  users: usersSliceReducer
})

// export type RootState = ReturnType<typeof rootReducer>

export default rootReducer