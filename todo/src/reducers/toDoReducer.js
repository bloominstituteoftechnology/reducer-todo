export const ADD_ITEM = "ADD_ITEM"
export const DONE = "DONE"
export const CLEAR = "CLEAR" 
export const intitalState = { list: [
    {item: 'Learn about reducers',
        completed: false,
        id: 3892987581
    },
    {item: 'Read',
    completed: false,
    id: 3892987582  
    }
    ]
    }


export const toDoReducer = (state, action) => {
    console.log('AL:', state, action )

    switch (action.type) {
        case ADD_ITEM:
            return {...state, list: [...state.list, {item: action.payload, completed: false, id: Date.now()}]}
        case DONE:
        return {...state, list: state.list.map(todo => {
            if (todo.id ===action.payload) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo
            }
        })}
        case CLEAR: 
        return {...state, list: state.list.filter(todo => !todo.completed)} 

            default:
                return state
    }
}

// switch (action.type) {
//     case TOGGLE_EDITING:
//       return {
//         ...state,
//         editing: !state.editing
//       };
//     case SET_TITLE:
//       return {
//         ...state,
//         title: action.payload,
//         editing: false
//       };
//     default:
//       return state;
//   }
// };



// addTask = (taskName) => {
//     this.setState({
//       toDO: [
//         ...this.state.toDO,
//         {task: taskName, completed: false, id: Date.now()}
//       ]
//     })
//   }
