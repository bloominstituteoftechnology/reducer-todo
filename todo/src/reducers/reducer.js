export const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
  };

export const listReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    item: action.item,
                    completed: false,
                    id: new Date()
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
      )
        return state;
    }    
};