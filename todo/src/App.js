import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/titleReducers'
import TodoForm from "./TodoForm";
import './App.css';
var text=""
const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state)

  var addItem = itemname => {
    dispatch({ type: 'ADD_TODO',name:itemname })
  }
var clearDone =()=>{
  dispatch({ type: 'CLEAR'})
}


  return (
    
    <div>

        <h1> Hello
          {state.title} {' '}
          <i
          onClick = {() => dispatch({ type: 'UPDATE_TODO' })}
          className = 'far fa-edit'
          />

        </h1>

       
      
         
       <div className='whattodo-list'>
            {state.toDo.map(item => (
                <div
                onClick = {() => dispatch({ type: 'UPDATE_ITEM', id:item.id })}
                className={`item${item.done ? " done" : ""}`}
                >
                    <p>{item.action}</p>
                </div>
            ))}

        </div>

       <TodoForm addItem={addItem}/>

        <button className='clear-button' onClick={clearDone}>
                CLEAR
            </button>
    </div>
    
  )
}

export default App;
