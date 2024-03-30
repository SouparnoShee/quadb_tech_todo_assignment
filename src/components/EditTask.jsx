import React from 'react'
import { RxCross1 } from "react-icons/rx";


const EditTask = ({ onClose, onClick, onChange, value }) => {
    return (
        <div className='create-container'>
            <div className="cross">
                <RxCross1 onClick={onClose} />
            </div>
            <h2>Edit Your Task Here</h2>
            <input type="text" className='task-input' value={value} onChange={onChange} />
            <button onClick={onClick}>Update</button>
        </div>
    )
}

export default EditTask
