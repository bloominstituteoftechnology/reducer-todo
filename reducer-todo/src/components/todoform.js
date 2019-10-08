import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
          task:''
        };
      }

      handChange=e=>{
        this.setState({task:e.target.value})
      }

      onSubmit=(e)=>{
          e.preventDefault();
       this.props.addTodo(this.state.task);
       this.setState({
         task: ''
       })
      }

    render(){
        console.log('...rendering form');
        return(
            <form
            onSubmit={this.onSubmit}>
                <input
                type='text'
                name='task'
                value={this.state.task}
                className='task'
                onChange={(e)=>this.handChange(e)}
                />

                <button
                type='submit'
                >Add Task</button>
            </form>
        );
    }
}

export default TodoForm;