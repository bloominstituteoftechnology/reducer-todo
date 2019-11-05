
export const initialState = {
    todos: [
        {
        id: Date.now(),
        item: "Learn React",
        completed: false
        },
        {
        id: Date.now(),
        item: "Learn React",
        completed: false
        }
    ]
    
};

export const todoReducer = (todoState, action) => {
    switch(action.type) {
        
        case ADD_ITEM:
            letnewItem = {
                id: Date.now(),
                item: action.payload,
                completed: false
            };
            return {
                ...todoState,
                todos: [...todoState.todos, newItem]
            };
        case TOGGLE_COMPLETED:
            let updatedTodos = todoState.todos.map(item => {
                if(item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.purchased
                    };
                }else {
                    return item;
                }
            });
            return {
                ...todoState,
                todos: updatedTodos
            };    
        case CLEAR_TODO:
            return {
                ...todoState,
                todos: StaticRange.todos.filter(item => !item.completed)
            };    
            
            default: 
            return todoState;
    }
}
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const ADD_ITEM = 'ADD_ITEM'
export const CLEAR_TODO = 'CLEAR_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'