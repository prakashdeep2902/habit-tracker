import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import '../App.css'
import { AddTheHabite } from '../redux/ActionCreater/ActionType'


const Inputhabit = (props) => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const { isActive, setIsActive } = props
    const refClose = useRef(null)
    // const [Takeinput,SetTakeinput]=useState('')


    const handelonclick = () => {
        dispatch(AddTheHabite(input));
        refClose.current.click();
        setIsActive(false)
        setInput('')

    }


    return (

        <>

            <div className="modal fade col-sm-50" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Habit</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { isActive === false ? setIsActive(true) : setIsActive(false) }}></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Name Of The Habbit</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={input} onChange={(event) => setInput(event.target.value)} />
                                </div>


                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handelonclick} >Add</button>
                        </div>
                    </div>
                </div>
            </div>



        </>

    )
}

export default Inputhabit
