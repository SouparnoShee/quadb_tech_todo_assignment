import React, { useState } from 'react'
import EditTask from './EditTask'
import { useSelector } from 'react-redux';
import { deleteUser, updateUser } from '../reducers/useReducer';
import { useDispatch } from 'react-redux';

const SingleNote = ({ serial, todo }) => {
    const id = serial;
    // Getting global state
    const tasks = useSelector(state => state.tasks)
    // Checking the id from the global state
    const existingUser = tasks.filter(f => f.id === id)
    const { task } = existingUser[0]
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(false)
    const [edit, setEdit] = useState(false)
    const [updatedTask, setUpdatedTask] = useState(task)

    // Function to update the task
    const handleUpdate = (event) => {
        event.preventDefault;
        dispatch(updateUser({
            id: id,
            task: updatedTask,
        }))
        setEdit(false)
    }

    // Function to delete the task
    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }))
    }
    return (
        <div className="single-note">
            <input type="checkbox" className='checkbox' onClick={() => setChecked(!checked)} />
            <span className='serial'>{serial}</span>
            {/* Function to check and unCheck the tasks */}
            {
                checked ? <span className='note'> <s>
                    {todo}
                </s>
                </span> : <span className="note">
                    {todo}
                </span>
            }

            <button onClick={() => setEdit(true)} className='button-edit'>Edit</button>
            <button className='button-delete' onClick={() => handleDelete(serial)}>Delete</button>
            {
                edit ? <EditTask onClose={() => setEdit(false)} onClick={handleUpdate} onChange={(e) => setUpdatedTask(e.target.value)} value={updatedTask} /> : null
            }


        </div>
    )
}

export default SingleNote
