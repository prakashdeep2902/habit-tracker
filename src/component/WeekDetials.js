import moment from 'moment/moment'
import React from 'react'
import '../App.css'

const WeekDetials = () => {


  return (
    <>

      <div className='container_habitdetails'>


        <div className='habitdetails_title'>
          <p>reading</p>
        </div>
        <div className='all_week_days'>
          <div className='day'>
            <p>{moment().format("dddd")}</p>
          </div>
          <div className='date'> 
            <p>{moment().format("Do/MMM/YYYY")}</p>
          </div>
          <div className='status'>
            <div className='sign'>
              <i className="fa-solid fa-check"></i>
            </div>
            <div className='sign'>
              <i className="fa-solid fa-xmark"></i>
            </div>
          
          </div>
          
        </div>

 


 

      </div>

    </>
  )
}

export default WeekDetials
