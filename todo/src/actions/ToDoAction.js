
export const addTodo = title => {
    return({
        type: "ADD_TODO",
        payload: title
    });
}