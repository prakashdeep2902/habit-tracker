
import moment from 'moment/moment'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import '../App.css'

const WeekDetials = () => {

  const { productId } = useParams();

  const list = useSelector((state) => state.habitreducers.data)
  let name_of_habbite;
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element.id === productId) {
      name_of_habbite = element.inputdata;
    }

  }
  let todaydate = moment().date()
  let weekdays = moment.weekdays()
  let dayoftheweek = moment().weekday()
  let weekdayinwords = moment().format('dddd');
  let weekend=moment().days()
  console.log(weekend)


  const [changecorrectsign, setchangecorrectsign] = useState({

    backgroundColor: "white"
  })

  const [changeworangsign, setchangeworangsign] = useState({

    backgroundColor: 'white'
  })

  const clickoncorrectmark = () => {

    setchangecorrectsign({

      backgroundColor:'green'
    })
    setchangeworangsign({

      backgroundColor:''
    })




  }

  const clickonworngmark = () => {


    setchangeworangsign({

      backgroundColor:'red'
    })
    setchangecorrectsign({

      backgroundColor:''
    })



  }




  return (
    <>

      <div className='habitdetails_title'>
        <p>{name_of_habbite}</p>
      </div>
      <div className='container_habitdetails'>
        {
          weekdays.map((day, key) => {
            return (
              <div className={`all_week_days `} key={key} style={{ background: (day === weekdayinwords) === true ? 'lightgray' : "" }} >
                <div className='day'>
                  <p>{day}</p>
                </div>
                <div className='date'>
                  <p>{moment().format(`${(todaydate - weekend)+key}/MM/YYYY`)}</p>
                </div>

                <div className='status'>

                  <button id='sign' className='sign' style={{ backgroundColor: (key < dayoftheweek ||key>dayoftheweek) === true ? 'gray' : `${weekdayinwords === day ? changecorrectsign.backgroundColor : ''}`, cursor: (key < dayoftheweek ||key>dayoftheweek) === true ? 'text' : 'pointer' }} disabled={key < dayoftheweek ||key>dayoftheweek} onClick={clickoncorrectmark}   >
                    <i className="fa-solid fa-check"></i>
                  </button>
                  <button id='sign' className='sign' disabled={key < dayoftheweek ||key>dayoftheweek} style={{ backgroundColor: (key < dayoftheweek ||key>dayoftheweek) === true ? 'gray' : `${weekdayinwords === day ? changeworangsign.backgroundColor : ''}`, cursor: (key < dayoftheweek ||key>dayoftheweek) === true ? 'text' : 'pointer', }} onClick={clickonworngmark}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>

            )


          })
        }
      </div>


    </>
  )
}

export default WeekDetials
