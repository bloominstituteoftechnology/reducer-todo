import React from "react"

export const AppList = ({ 
    toDoItems, 
    toggleCompleted 
}) => {
    return (
        <div className="listContainer">
            {toDoItems.map(task => (
                <div 
                    className={task.completed ? 'completed' : '' }
                    onClick={(e) => {
                        e.preventDefault()
                        toggleCompleted(task)
                    }} 
                    key={task.id}
                >
                    {task.item}
                </div>
            ))}
        </div>
    )
}
export default AppList