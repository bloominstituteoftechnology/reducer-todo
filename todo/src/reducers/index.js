//declaring initial state
export const initialState = {
    todoList: []
};

//setting up the todo Reducer
//takes previous state and an action object
export const todoReducer = (state, action) => {
    //switch statement 
    //this will switch between the action types.
    switch (action.type) {

        case "ADD_TODO":
            //this will update state to the new value. 
            //payload value is what the user is sending/typing in.
            return {
                todoList: [
                    ...state.todoList,
                    { todoList: action.payload, completed: false }
                ]
            }

            //this will reset state if the item is marked completed
        case "CLEAR_COMPLETED":
            return {
                todoList: [...state.todoList.filter(item => !item.completed)]
            }
            //check to see if the item is completed or not
        case "COMPLETED":
            return {
                todoList: state.todoList.map((item, index) => {
                    if (index === action.payload) {
                        return {...item, completed: !item.completed }
                    }

                    return item

                })
            }

        default:
            return state;
    }

}