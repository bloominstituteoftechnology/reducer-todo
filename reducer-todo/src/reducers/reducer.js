import React from 'react';

export const initialState = [{
    item: 'Learn more about reducers',
    completed: false,
    id: 3892987589
},
{
    item: 'Clean your room',
    completed: true,
    id: 19922020
}
];

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                {item: action.payload,
                 completed: false,
                 id: new Date()},
                 ...state,
                ];
            case 'TOGGLE_COMPLETE':

                let completedItem = state.map(items => {
                    console.log('item', items)
                    if (items.id === action.payload.id) {
                        return {
                            ...items,
                            completed: !items.completed
                        };
                    } else {
                        return items;
                    }
                })
                return completedItem;    
        case 'CLEAR_COMPLETE':
            return (
                state.filter(items => {
                    return items.completed === false
                }))

        default:
            return state;
    }
};


