export const todos = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
    deadline: ''
}];

export const reducer = (state, action) => {
    switch(action.type){
        case 'add':
        return(
            [...state, {
                item: action.payload.todo,
                completed: false,
                id: Math.floor(Math.random() * (10000000000 - 1000000000)) + 1000000000
            }]
        );
        case 'clear':
            return state.filter(todo => !todo.completed);
        case 'toggle':
            return state.map(todo => {
                if(todo.id === action.payload){
                const completed = !todo.completed;
                const newTodo = {...todo, completed: completed, timeCompleted: ''};
                if(completed){
                    const date = new Date();
                    const timestamp = date.getTime();
                    newTodo['timeCompleted'] = timestamp;
                }
                return newTodo;
            }else{
                return todo;
            }
            });
        case 'deadline':
            return state.map(todo => todo.id === action.payload.id ? {...todo, deadline: action.payload.deadline} : todo);
        default: 
            return state;
    }
};
