import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { addUser } from '../reducers/useReducer';
import { useDispatch, useSelector } from 'react-redux';


const CreateTask = ({ onClose }) => {
    const [addTask, setAddTask] = useState('')

    // Selecting the state and using the global state
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    // Function to submit task
    const handleSubmit = () => {
        dispatch(addUser({ id: tasks[tasks.length - 1].id + 1, task: addTask }))
    }

    return (
        <div className='create-container'>
            <div className="cross">
                <RxCross1 onClick={onClose} />
            </div>
            <h2>Add Your Task Here</h2>
            <input type="text" className='task-input' onChange={(e) => setAddTask(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default CreateTask
