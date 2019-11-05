import React from 'react';
import ReactDOM from 'react-dom';

export const initialState = { list: [], item: '', completed: false, id: '' };

export const listReducer = (state, action) => {
    switch (action.type) {
        default:
            throw new Error("No action matched!");
    }

}