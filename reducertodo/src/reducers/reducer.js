export const initialState =[
    //     {
    //     task: "this is from the reducer!",
    //     completed: false,
    //     id: Date.now()
    // }
    ]


export const toDoReducer = (state , action) => {
    console.log('from reducer', state)
    switch (action.type) {
        case "Set_Task":
            return [
                ...state,
                {
                    task: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ]

        // case "Toggle_Completed":
        //     return state.map(task => task.id === action.payload ?
        //         { ...task, completed: !task.completed } : task);


        case "Toggle_Completed":
            return state.map(task => {
                if (task.id == action.payload) {
                    return { ...task, completed: !task.completed };
                } else {
                    return task
                }
            });

            case "Destroy_Completed":
                return state.filter(task => !task.completed);

        default:
            return state;
    }
};


