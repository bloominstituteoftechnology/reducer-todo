import React, { useState } from "react";
// import useTodoForm from "../hooks/useTodoForm";

const TodoForm = (props) => {
  const [item, setItem] = useState({
    name: "",
    id: Date.now(),
    completed: false,
  });
  //     {
  //   item: "",
  //   id: Date.now(),
  //   completed: false,
  // }
  //   const [values, handleChanges, initialValue] = useTodoForm(initialValue);

  const handleChanges = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const submitItem = (e) => {
    e.preventDefault();
    setItem({ name: "", id: Date.now(), completed: false });
    props.addItem(e, item.name);
  };

  console.log(item);

  return (
    <div>
      <form onSubmit={submitItem}>
        <input
          type="text"
          value={item.name}
          name="name"
          onChange={handleChanges}
        />
        <button>Add Item</button>
      </form>
    </div>
  );
};
export default TodoForm;

// import React from "react";

// class TodoForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       item: "",
//     };
//   }

//   handleChanges = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   submitItem = (e) => {
//     e.preventDefault();
//     this.setState({ item: "", id: Date.now(), completed: false });
//     this.props.addItem(e, this.state.item);
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.submitItem}>
//           <input
//             type="text"
//             value={this.state.item}
//             name="item"
//             onChange={this.handleChanges}
//           />
//           <button>Add Item</button>
//         </form>
//       </div>
//     );
//   }
// }
// export default TodoForm;
