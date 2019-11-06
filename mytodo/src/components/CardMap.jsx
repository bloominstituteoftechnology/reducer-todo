import React, {useState} from "react";

const CardMap = ({ bMap, dispatch}) => {
    // console.log(bMap);

    const toggleCompleted = () => {
        dispatch ({
            type: "TOGGLE_EDIT",
            payload: bMap.id
        });
    };

    const clearCompletedTodo = () => {
        dispatch ({
            type: "DONE_TOGGLE",
            payload: bMap.id
        });
    }

    return (
        <div className="Card">
            <div className="cTop">
                <div 
                    className={`bMap${bMap.completed ? ' completed' : ''}`}
                    onClick={toggleCompleted}
                >
                    <h1>{bMap.item}</h1>
                </div>
            </div>
            <div className="cBottom">
                <button className="bCard" onClick={clearCompletedTodo}>Clear Completed</button>
            </div>
        </div>
    )
}

export default CardMap;