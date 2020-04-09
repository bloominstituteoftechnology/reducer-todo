import React from 'react';
import './scss/stats.scss';

function Stats(props) {
    return (
    <div className="stats-box">
        <h1>Stats</h1>
        <p>Total todos: {props.state.todos.length}</p>
        <p>Completed todos: </p>
        <p>To be Completed todos: </p>

    </div>
    );
}

export default Stats;