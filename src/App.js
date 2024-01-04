import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import CreateProduct from './routes/CreateProduct'
import DeleteProduct from './routes/DeleteProduct'
import EditProduct from './routes/EditProduct'
import ShowProduct from './routes/ShowProduct'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/api/create' element={<CreateProduct />} />
        <Route path='/api/delete/:id' element={<DeleteProduct />} />
        <Route path='/api/put/:id' element={<EditProduct />} />
        <Route path='/api/details/:id' element={<ShowProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App