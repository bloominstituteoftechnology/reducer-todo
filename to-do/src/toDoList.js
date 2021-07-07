import React, {useReducer} from "react";
import {reducer, toDo} from "./reducers/Reducer";
import {Completed} from "./Completed";
import {ToDoForm} from "./ToDoForm";

export const ToDoList = () => {
    
    const [state, dispatch] = useReducer(reducer, toDo);

    return (
        <div>
            <ToDoForm dispatch={dispatch} />
            {state.map(toDo => {
                return <Completed
                        todo={toDo}
                        dispatch={dispatch}
                        key = {toDo.id}
                        />
            })}
        </div>
    )
}