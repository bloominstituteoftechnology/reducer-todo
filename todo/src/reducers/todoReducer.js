export const initialState = {
    tasks: [ 
        {
            id: 1,
            item: 'Fix bedroom window',
            completed: false
        }, 
        {
            id: 2,
            item: 'Water plants',
            completed: true
        },
        {
            id: 3,
            item: 'Go to the gym',
            completed: false
        }
    ]
}

export const todoReducer = (state, action) => {
    console.log(state)
}
