import React from 'react'
import Navbar from './component/Navbar'
import WeekDetials from './component/WeekDetials'
import './App.css'
import Habitdetails from './component/Habitdetails'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  const list = useSelector((state) => state.habitreducers.data)
  return (

    <>

      <Navbar />

      {
        list.map((elem, id) => {
          return (<Habitdetails elem={elem} key={id} />)

        })
      }

      <BrowserRouter>
        <Routes>
          <Route path="week-details" element={<WeekDetials />}></Route>
        </Routes>
      </BrowserRouter>





    </>


  )
}

export default App
