import React, { useContext } from 'react'
import { TaskListContext } from '../Context/TaskListContext'
import Task from './Task'
const TaskList = () => {
    const { tasks } = useContext(TaskListContext)
    return (
        <div>{
            tasks.length > 0 ? (<ul className='list'>
                {tasks?.map((task) => {
                    return <Task key={task.id} {...task} />
                })}
            </ul>) : (
                <div className="no-tasks">No Task</div>
            )
        }
        </div>
    )
}

export default TaskList
