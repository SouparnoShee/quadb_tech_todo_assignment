import React, { useEffect, useState } from 'react'
import note from "../assets/main.png"
import SingleNote from '../components/SingleNote'
import CreateTask from '../components/CreateTask'
import { useSelector } from 'react-redux'

const Home = () => {
    const [create, setCreate] = useState(false)
    // Getting the Global state
    const tasks = useSelector(state => state.tasks)

    return (
        <div className='home-container'>
            <div className="head">
                <img src={note} alt="" />
                <h1>To-Do List </h1>
            </div>
            <div className="notepad">
                <div className="pad-head">
                    <h2>Your Todo</h2>
                </div>
                <div className="pad-body">
                    {
                        tasks.map((t) => (
                            <SingleNote key={t.id} serial={t.id} todo={t.task} />
                        ))
                    }

                </div>
            </div>
            <div className="add-butt">
                <button onClick={() => setCreate(true)}>Add Task</button>
            </div>
            {
                create ? <CreateTask onClose={() => setCreate(false)} /> : null
            }

        </div>
    )
}

export default Home
