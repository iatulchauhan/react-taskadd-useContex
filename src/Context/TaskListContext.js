import React, { createContext, useState, useEffect } from 'react'
import { v1 as uuidv1 } from 'uuid';
export const TaskListContext = createContext()

const ContextProvider = ({ children }) => {

    const [tasks, setTasks] = useState([])

    const [updateItem, setUpdateItem] = useState(null)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (title) => {
        setTasks([...tasks, { title, id: uuidv1() }])
    }

    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))

    }

    const clearList = () => {
        setTasks([])
    }

    const findItem = id => {
        const item = tasks.find(task => task.id === id)
        setUpdateItem(item)
    }

    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))
        setTasks(newTasks)
        setUpdateItem(null)
    }

    return (
        <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearList, findItem, editTask, updateItem }}>
            {children}
        </TaskListContext.Provider>
    )
}

export default ContextProvider
