import React from 'react';
import uuid from 'uuid';

const theID = uuid()

// Step 1 => Set State variables and shape
const initialState = {
  addToDo: {
    item: ''
  },
  toDoList : [
    {
      item: 'Fix Aircon',
      completed: false,
      id: 1
    }
  ]
}

// Step 2 => Define action types
const ADD_ITEM = 'ADD_ITEM';

function reducer(state, action){
  switch(action.type){
    case ADD_ITEM:
      const newItem = action.payload
    return{
      ...state,
      addToDo

    }
  }

}



function App() {



  const onChange = event => {
    const input = event.target.name
    dispatch({
      type: ADD_ITEM,
      payload: toDoItem,
    })
  }

  const submitThis = event => {
    debugger
    event.preventDefault();
    const toDoItem = {

    }
  }

  return (
    <div>
      <form onSubmit={submitThis}>
        <label>Add to your To Do List:</label>
        <input 
        placeholder="Add to your To Do list:"
        onChange={onChange}
        value={}
        />
      </form>

    </div>
  );
}

export default App;
