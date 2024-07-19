import axios from 'axios'
import { getProducts } from '../reducers/ProductReducer';

export const asyncGetProducts= ()=>async(dispatch,getstate) =>{
    // console.log(getstate()) 
     try{
        const response = await axios.get("https://fakestoreapi.com/products");
        // console.log(response.data)
        dispatch( getProducts(response.data))
     }
     catch(error){
        console.log(error)

     }
}


//both are same
// function a(){
//     return function(){

//     }
// }

// ()=>()=>{}