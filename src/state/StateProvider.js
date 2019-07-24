import React, {useReducer} from 'react'
import {StateContext} from '../contexts/StateContext'

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const initialState = {
    todoList: [],
}


