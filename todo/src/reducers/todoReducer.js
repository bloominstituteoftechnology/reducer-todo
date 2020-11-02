
let initialState = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}]

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "ADD_TODO":
      newState = [...state,  
        {item: action.payload,
        completed: false,
        id: Date.now()
      }];
      return newState;
    case "TOGGLE_COMPLETED":
      let idx = Number(action.payload);
      newState = [...state];
      newState[idx] = {...newState[idx], completed: !newState[idx].completed};
      return newState;
    case "CLEAR_COMPLETED":
      for (let i in state) {
        if (!state[i].completed) {
          newState.push(state[i]);
        }
      }
      return newState;
    default:
      return state;
  }
};

export {reducer, initialState};
