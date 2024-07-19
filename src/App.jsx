import React from 'react'
import Users from './components/Users'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'

const App = () => {
  return (
    <div className='h-screen w-screen'>

      <nav className='pt-5  flex justify-center gap-x-10 '>
        <Link to ="/">Home</Link>
        <Link to ="/users">Users</Link>
        <Link to ="/products">Products</Link>
      </nav>
      
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element= {<Products/>}/>
      <Route path="/users" element={<Users/>} />
    </Routes>


    </div>
  )
}

export default App