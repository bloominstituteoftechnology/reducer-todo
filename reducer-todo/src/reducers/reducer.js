export const ADD_TASK = 'ADD_TASK';

export const initialState = {
    todoList: [
     {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
     }
  ]
}

export const reducer = (state, action) => {
  switch (action.type) {
      case ADD_TASK:
          const newTask = {
              item : action.payload, 
              completed: false,
              id: Date.now()
          };
          return {
              ...state,
              todoList: [...state.todoList, newTask]
          };
    }