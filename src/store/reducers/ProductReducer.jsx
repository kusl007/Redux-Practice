import { createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'

const initialState = {
  products: [],
}

export const ProductSlice = createSlice({
  name: 'Products',
  initialState,
  reducers:{
    getProducts:(state,action)=>{


        // axios.get("https://fakestoreapi.com/products").then((response)=>{
        //     console.log(response.data)
        //     state.products=response.data
        // })
        // .catch((error)=>{console.log(error)})

        //yesma async code call garna mildaina
        state.products=action.payload   



    }
  }
})

export const { getProducts} = ProductSlice.actions

export default ProductSlice.reducer 