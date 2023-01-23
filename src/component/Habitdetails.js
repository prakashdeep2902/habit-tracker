import React from 'react'
import { useDispatch } from 'react-redux'
import { RemoveTheHabite} from '../redux/ActionCreater/ActionType'
import '../App.css'
import { Link } from 'react-router-dom';


const Habitdetails = (props) => {


    const dispatch = useDispatch()
    const handelclick = () => {

  }
    return (

        <>
            <div className='habitdetails-container'  >
                <div className='habitdetails-container-left-div' >
                    <p>{props.elem.inputdata}</p>
                </div>
                <div className='habitdetails-container-right-div'>
                    <Link to={`/week-details/${props.elem.id}`} className='link'>
                        <div className='anchertag' onClick={handelclick}>
                            <i className="fa-solid fa-calendar-days"></i>
                            <p>week view</p>

                        </div>
                    </Link>

                    <div className='trashitam' onClick={() => { dispatch(RemoveTheHabite(props.elem.id)) }}>
                        <i className="fa-solid fa-trash" ></i>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Habitdetails
