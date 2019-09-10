import React from 'react';

import './App.css';

//componets
import TodoList from './components/TodoList';




// toggleItem = id => {
//   console.log(id);

//   this.setState({
//     todos: this.state.todos.map(item => {
//       if (item.id === id) {
//       return {
//         ...item,
//         purchased: !item.purchased
//       }
//     } else {
//       return item;
//     }
//     })
   
//   })

// };




function App() {

   

  
  
  return (
    
    <div className="App">
      <TodoList
      // toggleItem={this.toggleItem}
      />
    </div>
  );
}

export default App;
