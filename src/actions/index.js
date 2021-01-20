export const addTodo = title => {
    return({
        type: "ADD_TODO",
        payload: title
    })
}

export const toggleCompleted = id => {
    return({
        type: "TOGGLE_COMPLETED",
        payload: id
    })
}