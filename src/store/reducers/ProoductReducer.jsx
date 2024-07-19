import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers:{
    userDelete:(state,action)=>{
   
       state.users.splice( action.payload ,1)
    }
  }
})

export const { userDelete} = ProductSlice.actions

export default ProductSlice.reducer