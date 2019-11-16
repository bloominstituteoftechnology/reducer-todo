import React, { useState, useReducer } from 'react';
import { initialState, todoReducer };

const todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <div>
      
    </div>
  )
}