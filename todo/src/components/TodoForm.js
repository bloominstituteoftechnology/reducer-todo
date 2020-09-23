import React, {Component} from "react"
//1. Add a constructor
//  a. make a state variable called "item"
//2. On the input element, set it's value to the "item" state variable
//3. Build out handleChanges to update the "item" state variable wiith that changes in the input field
//MAKE SURE TO ADD THE ""

class TodoForm extends Component{
//constructor with state
    state = {
        item: ""
    }

    handleChanges = (e) => {
        this.setState({
            item: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.item)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                {
                    <input 
                        type="text"
                        name="item"
                        value={this.state.item}
                        onChange={this.handleChanges}
                    />
                }
                <button>Add</button>
            </form>
        )
    }

}

export default TodoForm;