import React, { useState, useReducer } from 'react';


const initialState = {
    
    item: 'Do Laundry',
    completed: false,
    id: 1
    
}

const reducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default initialState;
export default reducer;