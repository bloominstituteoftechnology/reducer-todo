export const initialState = {data: [
    {
      task: 'Organize Garatge',
      id: '1',
      completed: false
    },
    {
      task: 'Organize House',
      id: '2',
      completed: false
    },
    {
      task: 'Organize Room',
      id: '3',
      completed: false
    }
  ]}

export const reducer = (state, action) => {
    switch(action.type) {
        case'ADD_TODO':
            return {data: [...state.data, {task: action.payload, id: Date.now(), completed: false}]};
        case 'CROSS_OUT':
            const newTodo = {data: state.data.map(task => {
                if (task.id === action.payload) {
                    return {...task, completed: !task.completed};
                } else {
                    return task;
                }
            })};
            return newTodo;
        case 'CLEAR_FINISHED':
            return {data: state.data.filter(task => task.completed === false)};
        default:
            console.log('here is an error')

    }

};

