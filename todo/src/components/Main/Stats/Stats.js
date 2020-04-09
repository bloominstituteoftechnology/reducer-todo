import React from 'react';
import './scss/stats.scss';

function Stats(props) {

        //find the total people confirmed
        const todoCompleted = props.state.todos.reduce((acc, current) => { return acc += current.completed },0);
    
        const todoToComplete = props.state.todos.length - todoCompleted;

    return (
    <div className="stats-box">
        <h1>Stats</h1>
        <p>Total todos: {props.state.todos.length}</p>
        <p>Completed todos: {todoCompleted} </p>
        <p>To be Completed todos: {todoToComplete} </p>

    </div>
    );
}

export default Stats;