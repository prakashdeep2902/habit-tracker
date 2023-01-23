import React, { useRef, useState } from 'react'
import '../App.css'
import Inputhabit from './Inputhabit';
const Navbar = () => {

    const [isActive, setIsActive] = useState(false);
    const ref = useRef(null);

    const handelonclick = () => { 

        ref.current.click();
        setIsActive(current => !current)
    }

    return (
        <>
            <div className='navbar'>
                 <div className='navbar_title' >
                    <h1>Habbitracker &#x1f3c3;</h1>
                </div>

                <div className='left_div'>

                    <button ref={ref} type="button" className="btn btn-primary d-none " data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                    </button>
                    <button style={{ transform: isActive ? 'translateY(4px)' : '', boxShadow: isActive ? "0 5px #666" : "" }} onClick={handelonclick}>+ Add Habits</button>
                </div>
            </div>
            <Inputhabit isActive={isActive} setIsActive={setIsActive} />

        </>






    )
}

export default Navbar
