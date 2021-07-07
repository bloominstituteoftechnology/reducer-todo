export const initialState = {
    todos: [{
        title: 'Wash car',
        id: '32523',
        completed: false
    },
    {
        title: 'Learn to code',
        id: '334673',
        completed: false
    }],
    inputValue: ''
}

export const reducer = (state, action) => {
    switch(action.type) {
        default:
            return state

        case 'ADD_TODO':
            console.log(state)
            return {
                todos: [
                    ...state.todos,
                    {
                        title: action.payload,
                        id: Date.now(),
                        completed: false
                    }
                ],
                inputValue: state.inputValue
            }
    }
}