import React from "react";

export const initialState = [
{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
},
{
    item: 'Get Some Sleep',
    completed: false,
    id: 3892987590
},
{
    item: 'Work on Projects',
    completed: false,
    id: 3892987591
},
]

export const reducer = (state, action)  => {
    // simple reducer with just a default return
    switch(action.type) {
        case Edit_App:
            return {}
        default: 
        return state
    }
}
