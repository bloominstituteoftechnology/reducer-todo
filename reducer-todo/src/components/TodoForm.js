import React from 'react'

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state ={
            item: ''
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    

    submitItem = e => {
        e.preventDefault();
        this.setState({item: ''});
        this.props.addItem(e, this.state.item);
    };
    render(){
        return(
            <form onSubmit={this.submitItem}>
                <input
                type="text"
                value={this.state.item}
                placeholder="what do you need to do?"
                name="item"
                onChange={this.handleChanges}
                />
            </form>
        )
    }

}

export default TodoForm