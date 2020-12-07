import React, {useReducer} from 'react';
import reducer, {initialState} from '../reducers/index';

const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)


    return(
        <div>
            {state.item}
        </div>
    )

}

export default Todo;