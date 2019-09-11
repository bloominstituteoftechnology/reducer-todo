import React, {useReducer,reducer} from 'react';
import Reducers from '../../Reducers/Reducers'
import './Todo.css'



function Todo() {

    const initialState = {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
    // Use the useReducer hook by destructuring its two properties: state, and dispatch and pass in the reducer and the initialState to the useReducer function
    const [state, dispatch] = useReducer(reducer, initialState)
  
    // Return JSX that displays the count for the user
    // Note the two button elements which allow the user to increase and decrease the count.  Each of them contains an onClick event that dispatches the desired action object, with its given type.  Each action, when fired, is dispatched to the reducer and the appropriate logic is applied.
    return (
      <>
        {/* Note, we have access to the current state and the dispatch method from the useReducer hook, so we can utilize them to display the count as well as couple the dispatching of the actions from the appropriate buttons.*/}
        <div className="count">Count: {state.count}</div>
        <button onClick={() => dispatch({ type: 'INCREASE' })}>+1</button>
        <button onClick={() => dispatch({ type: 'DECREASE' })}>-1</button>
      </>
    )
  }

export default Todo;