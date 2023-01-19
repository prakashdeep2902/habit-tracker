import React from 'react'
import Navbar from './component/Navbar'
import './App.css'
import Habitdetails from './component/Habitdetails'
import { useSelector } from 'react-redux'
const App = () => {
  const list = useSelector((state) => state.habitreducers.data)
  return (

    <>
      <Navbar />
      {
        list.map((elem,id) => {
          return (<Habitdetails elem={elem} key={id} />)

        })
      }

    </>


  )
}

export default App
