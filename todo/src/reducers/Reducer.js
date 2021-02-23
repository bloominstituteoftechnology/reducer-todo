export const initialState = [
    {
        item: 'Clean house',
        completed: false,
        id: new Date(),
    },
    {
        item: 'Walk dog',
        completed: false,
        id: Date.now(),
    }
];

export const reducer = (state, action) => {

    switch(action.type){
        case 'add':
            return [
                ...state,
                {
                    item: 'state.item',
                    completed: false,
                    id: new Date(),
                }
            ];
        default:
            return state;
    }
}