

export const appReducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            return{...state, item: action.payload, completed: false, id: new Date(), }

        default:
            return state;
    }
}

export const initialState = [ {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
  item: 'reach mvp',
  completed: false,
  id: 3892987590
}


]
  export default initialState;