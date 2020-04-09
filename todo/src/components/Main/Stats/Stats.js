import React from 'react';
import './scss/stats.scss';

function Stats(props) {

        //find the total people confirmed
        const todoCompleted = props.state.todos.reduce((acc, current) => { return acc += current.completed },0);
    
        const todoToComplete = props.state.todos.length - todoCompleted;

    return (
    <div className="stats-box">
        <h1>Stats</h1>
        <p>Total Todos: {props.state.todos.length}</p>
        <p>Completed Todos: {todoCompleted} </p>
        <p>To Be Completed Todos: {todoToComplete} </p>

    </div>
    );
}

export default Stats;