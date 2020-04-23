import React, { useState} from "react";

import "./App.css";

//components:
import TodoWrapper from "./components/TodoWrapper";
//reducers
// import { initialState, todoListReducer } from './reducers/useReducer'


function App() {
  //List Data stored in state:
  // const [listData, setListData] = useState({
  //   itemData: [],
  // });
  
  //Add Item to list
  // const addItem = (userEntry) => {
  //   const newListItem = {
  //     item: userEntry,
  //     completed: false,
  //     id: Math.random(),
  //   };

  //   setListData({
  //     itemData: [...listData.itemData, newListItem],
  //   });
  // };

  //When clicked, item styles will change
  // const toggleItem = (itemID) => {
  //   setListData({
  //     itemData: listData.itemData.map((item) => {
  //       if (itemID === item.id) {
  //         return {
  //           ...item,
  //           completed: !item.completed,
  //         };
  //       }
  //       return item;
  //     }),
  //   });
  // };

  // const deleteAll = () => {
  //   setListData({
  //     itemData:[]
  //   })
  // }

  return (
    <div className="App">
      <TodoWrapper
        // addItem={addItem}
        // toggleItem={toggleItem}
        // listData={listData}
        // deleteAll={deleteAll}
      />
    </div>
  );
}

export default App