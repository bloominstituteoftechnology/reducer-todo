export const initialState = {
    tasks = [ 
        {
            item: 'Fix bedroom window',
            completed: false,
            id: 03132020
        }, 
        {
            item: 'Water plants',
            completed: true, 
            id: 03142020
        }
    ]
}

export const todoReducer = (state, action) => {
    console.log(state)
}
