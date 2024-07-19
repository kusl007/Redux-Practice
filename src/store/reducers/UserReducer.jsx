import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [{ id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Brown' },
    { id: 4, name: 'David Williams' },
    { id: 5, name: 'Eva Green' },
    { id: 6, name: 'Frank Miller' },
    { id: 7, name: 'Grace Lee' },
    { id: 8, name: 'Henry Adams' },
    { id: 9, name: 'Isla Clark' },
    { id: 10, name: 'Jack White' }],
}

export const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers:{
    userDelete:(state,action)=>{
      // console.log("state",state)
      // console.log("state",state)
      // console.log("action",action)
      // console.log("Actual Value",action.payload)
      // state.users.filter((user)=>(user.id!= action.payload))
       state.users.splice( action.payload ,1)
    }
  }
})

export const { userDelete} = UserSlice.actions

export default UserSlice.reducer