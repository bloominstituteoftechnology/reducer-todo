import React from 'react';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        };
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit = event => {
     event.preventDefault();
     this.props.addTodo(this.state.newTodo); 
     this.setState({newTodo: ''});  

    }


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text'
                        name ='newTodo'
                        placeholder = 'Add a New ToDo'
                        onChange={this.handleChange}
                        value ={this.state.newTodo} />
                <button type = 'submit'> Add a New To Do, You!</button>
                <button onClick={this.props.filterCompleted}>Clear Completed Tasks</button> 

            </form>
        )
    }
}

        export default TodoForm