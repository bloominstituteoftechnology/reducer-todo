// Sets initial state based on what is in local storage.
export const initialState = !JSON.parse(localStorage.getItem('cart'))
  ? []
  : JSON.parse(localStorage.getItem('cart'));

// export const initialState = {
//   item: 'Learn about reducers',
//   completed: false,
//   id: 3892987589
// };

export function reducer(state = initialState, action) {
  // Action === dispatch
  switch (
    action.type // Action is an object, it is passed through reducer to dispatch in the App.js file.
  ) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          todo: action.payload,
          completed: false,
          id: Date.now()
        }
      ];

    case 'TOGGLE_COMPLETED':
      // console.log("action object:", action, 'state:', state)
      return state.map(item => {
        if (action.payload === item.id) {
          item.completed = !item.completed;
        }
        return item;
      });

    case 'CLEAR_COMPLETED':
      // console.log(state)
      return state.filter(item => item.completed === false);

    default:
      return state;
  }
}
// Don't need to use the spread because map makes a new array.

// action is and object that contains dispatch with a type and payload key value pairs.
