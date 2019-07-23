// import React, { useState, useEffect } from 'react';

// export default function ToDoForm(props) {
//     const [formState, setFormState] = useState({
//         task: '',
//     });

//     const handleChange = e => {
//         setFormState({
//             task: e.target.value
//         });
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         props.addTask(e, formState)
//         console.log(formState)
//         setFormState({task: ''})
//     }

//     useEffect(() => console.log(formState), [formState]);

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                 name="task"
//                 value={formState.task}
//                 type="text"
//                 placeholder="Enter things you need to do!"
//                 onChange={handleChange}
//                 />
//                 <button>Add</button>
//             </form>
//         </div>
//     )
// }

import React from "react";

class ListForm extends React.Component {
    constructor() {
        super();
        this.state = {
        item: ""
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitItem = e => {
        e.preventDefault();
        this.setState({ item: "" });
        this.props.addTask(e, this.state.item);
    };

    render() {
        console.log("rendering form");
        return (
        <form onSubmit={this.submitItem}>
            <input
            type="text"
            value={this.state.item}
            name="item"
            onChange={this.handleChanges}
            />
            <button>Add</button>
        </form>
        );
    }
}

export default ListForm;