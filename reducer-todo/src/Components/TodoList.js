import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {


    // const filterCompleted = () => {
    //     props.state.filter(item => {
    //         console.log(item.completed);
    //         return item.completed === false
    //     })

    // }
    const filterCompleted = (event) => {
        event.preventDefault();
        props.dispatch({ type: "CLEAR" })
    }

    return (
        <div className="listParent" >
            <p className="addedTask">
                {props.state.map((element) => {
                    if (element.id !== 3892987589) { //This conditional excludes the empty string of the initial state from being rendered
                        return <Todo key={element.id} dispatch={props.dispatch} element={element} toggleComplete={element.completed} />
                    }
                })}
            </p>
            <button className="clearButton" onClick={filterCompleted}> Clear Done </button>
        </div>
    )
}
export default TodoList;