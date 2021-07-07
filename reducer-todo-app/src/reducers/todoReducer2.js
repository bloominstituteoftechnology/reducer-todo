// export const initialState = {
//   todos: [
//     {
//       item: 'Reducers are awful',
//       completed: false,
//       id: 9692967583
//     },
//     {
//       item: 'Go away reducers!',
//       completed: true,
//       id: 1092967521
//     }
//   ]
// };

// export function todoReducer(state, action) {
//   switch (action.type) {
//   case "TOGGLE_TODO":
//     return {
//       ...state,
//       todos: state.todos.map(todo => (
//         todo.id === action.payload ? {...todo, completed: !todo.completed } : todo
//       ))
//     };
//   case "ADD_TODO":
//     return {
//       ...state,
//       todos: state.todos.concat({ item: action.payload, completed: false, id: Date.now() })
//     };
//   case "CLEAR_COMPLETED":
//     return {
//       ...state,
//       todos: state.todos.filter(({completed}) => !completed)
//     };
//   default:
//     return state;
//   }
// }
