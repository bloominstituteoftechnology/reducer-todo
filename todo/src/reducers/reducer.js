export const initialState = [
    {item: 'Go staple bread to a tree',
    completed: false,
    id: 13243546},

    {item: 'Hold my RedBull as I jump roof to roof',
    completed: false,
    id: 21435465},

    {item: 'Do Photoshop battle with dog in bikini',
    completed: false,
    id: 12323434}
]

export const Reducer =
(state, action) => {
    switch (action.type) {
        case "UPDATE_ITEM" :
            return {...state,
            item: action.payload,
            completed: false}
        case "UPDATE_COMPLETED" :
            return {...state, completed: !state.completed}
        default:
            return state;
    }
}