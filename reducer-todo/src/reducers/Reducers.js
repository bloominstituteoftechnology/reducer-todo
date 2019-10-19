export const initialState = {
     addTodo: [
         {
             item: 'Learn about reducers',
             completed: false,
             id: 3892987589 
         }
     ]
}

export const reducer = (state, action) => {
    switch(action.type) {

        case 'ADD_TODO':
            return{
                ...state, addTodo: [ ...state.addTodo,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now(),
                }]
            }

        case "TOGGLE_EDITING":

            const Todos = state.addTodo.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo;
                }
            })

            return {
                ...state,
                addTodo: Todos
            }

            case 'CLEAR_COMPLETED':
                return {
                    addTodo: state.addTodo.filter(todo => 
                        !todo.completed )
                }

              default:
                return state;
    }
}




// export const initialState = {
//     todo: "",
//     editing: false
// }

// export function todo(state, action) {
//     switch (action.type) {
        
//         case "UPDATE_TODO":
//             return {
//                 ...state,
//                 todo: action.payload
//             }

//         default:
//             return state;
//     }
// }