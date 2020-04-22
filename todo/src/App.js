import React, {useState} from 'react';

import './App.css';

//components:
import TodoWrapper from './components/TodoWrapper';
//reducers
// import useReducer, { initialState } from './reducers/useReducer'

// const [state, dispatch] = useState(todoListReducer, initialState)



function App() {

  //List Data stored in state:
  const [listData, setListData ] = useState({
    itemData: []
  })
  console.log("App-State: listData", listData)

  //Add Item to list
  const addItem = (userEntry) => {
    const newListItem = {
      item:userEntry,
      completed: false,
      id: Math.random()
    }

    setListData({
      itemData: [...listData.itemData, newListItem]
    })
  }

  console.log("test")
  return (
    <div className="App">
      <TodoWrapper addItem={addItem} />
    </div>
  );
}

export default App;
