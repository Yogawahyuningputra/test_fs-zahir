import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Companies, CreateCompanies, Home, ListCompanies, MyCompanies } from '../../pages'
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/companies' element={<Companies />} />
            <Route path='/my-companies' element={<MyCompanies />} />
            <Route path='/list-companies' element={<ListCompanies />} />
            <Route path='/add-companies' element={<CreateCompanies />} />
        </Routes>
    )
}

export default Router