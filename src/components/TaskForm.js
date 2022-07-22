import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from '../Context/TaskListContext'

const TaskForm = () => {
    const { addTask, clearList, findItem, editTask, updateItem } = useContext(TaskListContext);

    const [title, setTitle] = useState("")

    const handleChange = e => {
        setTitle(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (updateItem === null) {
            addTask(title)
            setTitle("")
        } else {
            editTask(title, updateItem.id)
        }
    }

    useEffect(() => {
        if (updateItem !== null) {
            setTitle(updateItem.title)
        } else {
            setTitle("")
        }
    }, [updateItem])

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                className="task-input"
                placeholder="Add Task"
                required
                onChange={handleChange}
            />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    {updateItem ? 'Edit Task' : "Add Task"}
                </button>
                <button type="button" className="btn clear-btn" onClick={clearList}>
                    Clear
                </button>
            </div>
        </form>
    );
};

export default TaskForm;
