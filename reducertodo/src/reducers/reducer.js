export const initialState = 
    [{
        task: "this is from the reducer!",
        completed: false,
        id: Date.now()      
    }
   
]
   

export const toDoReducer = (state = initialState, action) => {
    console.log('from reducer', state)
    switch (action.type) {
        case "Set_Task":
            return   [
                ...state, 
                    { 
                        task: action.payload,
                        completed: false,
                        id: Date.now()  
                    } 
                ]

        case "Toggle_Completed":
            return state.map(task => task.id === action.id ? 
                { ...task, completed: !task.completed } : task);

      
        default:
            return state;
    }
};


