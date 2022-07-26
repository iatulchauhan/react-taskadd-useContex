import React, { useContext } from 'react'
import { TaskListContext } from '../Context/TaskListContext'

const Task = ({ title, id }) => {

    const { removeTask, findItem } = useContext(TaskListContext)

    return (
        <li className='list-item'>
            {/* <span></span> */}
            <span><i className="far fa-sticky-note"></i> {title}</span>
            <div>
                <button className='btn-delete task-btn' onClick={() => removeTask(id)}>
                    <i className='fas fa-trash-alt'></i>
                </button>
                <button className='btn-edit task-btn' onClick={() => findItem(id)}>
                    <i className='fas fa-pen'></i>
                </button>
            </div>
        </li>
    )
}

export default Task
