import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userDelete } from "../store/reducers/UserReducer"

export default function Users() {

  const {users}=useSelector(state=>state.UserReducer  )
  console.log(users)
  const dispatch=useDispatch()

  const DeleteHandler=(index)=>{
      dispatch(userDelete(index))
  }

  return (
   <div className="mx-auto  container p-10 mt-5  bg-red-100 w-[90%]">
    <div className="text-2xl font-bold  text-red-900"> Userlist</div>
    {users.map((user,index)=>(
      <div key={user.id}>
      <h1>
        {user.name}{" "}
        <span
         className="text-red-500 font-black cursor-pointer" 
         onClick={()=>DeleteHandler(index)}> x</span>
      </h1>
    </div>))}

   </div>
  )
}