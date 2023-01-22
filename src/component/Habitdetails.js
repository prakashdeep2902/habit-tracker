import React from 'react'
import { useDispatch } from 'react-redux'
import { RemoveTheHabite } from '../redux/ActionCreater/ActionType'

import '../App.css'


const Habitdetails = (props) => {

    const dispatch = useDispatch()

    return (

        <>
            <div className='habitdetails-container'  >
                <div className='habitdetails-container-left-div' >
                    <p>{props.elem.inputdata}</p>
                </div>
                <div className='habitdetails-container-right-div'>
                    <div className='anchertag'>
                        <i className="fa-solid fa-calendar-days"></i>
                        <a href='/week-details'>week view</a>
                    </div>
                    <div className='trashitam' onClick={() => { dispatch(RemoveTheHabite(props.elem.id)) }}>
                        <i className="fa-solid fa-trash" ></i>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Habitdetails
