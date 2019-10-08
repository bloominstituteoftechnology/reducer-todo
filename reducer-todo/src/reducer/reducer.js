import React from "react";

const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 389298789
  },
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn about reducers',
    completed: false,
    id: 389298759
  }]

  function reducer( state, action ) {
        switch(action.type) {
            default:
                return state;
        }
  }

  export {initialState, reducer};