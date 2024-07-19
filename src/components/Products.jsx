import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/reducers/ProductReducer'
import { asyncGetProducts } from '../store/actions/ProductActions'

export default function Products() {
    const {products}=useSelector((state)=>state.ProductReducer)
    console.log(products)
    const dispatch=useDispatch()
    useEffect(()=>{
            // dispatch(getProducts())
            dispatch(asyncGetProducts())
    },[])

  
    return (
     <div className="mx-auto  container p-10 mt-5  bg-red-100 w-[90%]">
      <div className="text-2xl font-bold  text-red-900"> Product List</div>
        <ul>
        {products.map((product,index)=>(
      <div key={product.id}>
      <h1>
        {product.id}{`) `}
        {product.title}{" "}
       
      </h1>
    </div>))}
        </ul>
  
     </div>
    )
  }