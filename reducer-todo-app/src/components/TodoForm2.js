// import React, { useState } from 'react';

// const TodoForm2 = ({addTodo, clearCompleted}) => {

//   const [item, setItem] = useState("");

//   const handleSubmit = event => {
//     event.preventDefault();
//     addTodo(item);
//     setItem('');
//   };
//   const handleClear = event => {
//     event.preventDefault();
//     clearCompleted();
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text"
//              name="item"
//              placeholder="new todo"
//              onChange={e => setItem(e.target.value)}
//              value={item} />
//       <div>
//         <button type="submit">Add</button>
//         <button onClick={handleClear}>Clear</button>
//       </div>
//     </form>
//   );
// };

// export default TodoForm2;