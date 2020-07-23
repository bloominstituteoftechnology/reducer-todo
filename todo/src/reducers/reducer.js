
export const initialState = [
    {
        item: 'Brush Teeth',
        completed:false,
        id:3928294839
    },
    {
        item: 'Water Plants',
        completed:false,
        id:3928294838
    },
    {
        item: 'Feed Cat',
        completed:false,
        id:3928294837
    }
]

export const reducer = (state,action) => {
    switch(action.type) {
        case 'ADD':
            return (
                [ 
                ...state,
                {item: action.payload.item,
                completed:false,
                id:Date.now()
            }]);
        case 'IS_COMPLETE':
           state.map(itemObj =>{
               return itemObj.id === action.id ? itemObj.completed = !action.completed: state
           });
        case 'REMOVE':
            state.filter(itemObj => {
                return !itemObj.completed 
            })
        default: return state;
    }

}