export const initialState = {
    todos: [{
      task: "Learn about reducers",
      id: 1,
      completed: false
    }],
  };
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
        case "add":
            {
                const newTodo = {
                    id: Date.now(),
                    task: action.task,
                };
                return {
                    todos: [...state.todos, newTodo]
                };
            }
        case "toggle":
            {
                const newTodos = state.todos.map(task => {
                    if (task.todos.id === task.id){
                        return {
                            ...task,
                            completed: !task.completed
                        };
                    } else {
                        return task;
                    }
                })
                return {
                    todos: newTodos
                };
            }
    }
  };
  