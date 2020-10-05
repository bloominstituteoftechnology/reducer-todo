import React from 'react';

class App extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state

    constructor() {
        super();
        this.state = {
            task: ""
        }
    }

    submit() {

        let todo = this.state.task;

        this.setState({//clear state
            task: ""
        }
        );

        console.log("IN SUBMIT", todo)

        return todo;
    }


    render() {
        return (
            <div>
                <form>
                    <label>
                        <input type="text" value={this.state.task} placeholder="new task..." onChange={(event) => {console.log("SETTING STATE TASK TO ", event.target.value); this.setState({task: event.target.value})}}/>
                    </label>
                </form>
                <button onClick={(event) => { event.preventDefault(); this.props.newTodo(this.submit()) }}>Submit</button>
                <button onClick={(event) => { event.preventDefault(); this.props.clearCompleted()}}>Clear Completed</button>
            </div>
        );
    }
}

export default App;