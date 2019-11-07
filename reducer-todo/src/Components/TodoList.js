import React from 'react';
// import { initialState, todoReducer } from './reducers/reducer';
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
        props.dispatch({type: "CLEAR"})
      }

    return(
        <div>
            <h1>TODO LIST</h1>
            <h2 className="addedTask">
                 {props.state.map((element) =>  {
                    return <Todo key={element.id} dispatch={props.dispatch} element={element} toggleComplete={element.completed}/> })}
            </h2>
            <button onClick={filterCompleted}> Clear Done </button>
        </div>
    )
}

export default TodoList;
//className={`item${}`}

//className={`item${element.completed ? " Done" : ""}`}