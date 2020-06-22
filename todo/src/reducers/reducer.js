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
            return [...state,{
            item: action.payload,
            completed: false,
            id: Date.now()}]

        case "TOGGLE_COMPLETED" :
                return state.map(item => {return(
                    item.id === action.payload ? {...item, completed: !item.completed} : item
                )})

        case "CLEAR_ITEMS" :
                return (
                state.filter(itemFilter => {return (!itemFilter.completed)}))

        default:
            return state;
    }
}