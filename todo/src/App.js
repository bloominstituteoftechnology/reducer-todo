import React, { useReducer, useState } from 'react';
import { ToDo } from './Components/ToDo'
import { reducer, initialState } from './Reducers/Reducer'



function App() {
  const [{todo}, dispatch] = useReducer(reducer, {todo: [initialState]} )
  const [value, setValue] = useState('');

  const handleChanges = (e => {
    const item = e.target.value
    setValue(item)
  }) 
  
  const handleSubmit = (e => {
    e.preventDefault()

    dispatch({type: 'ADD_TODO', payload: value} )
    setValue('')
  })
  return (
    <div>
      {todo.map((item, i) => { return <h1 onClick={() => {dispatch({type: 'TOGGLE-TODO', i })}}>{item.item}</h1> })}
      <ToDo submit={handleSubmit} handleChanges={handleChanges} values={value}/>
      <pre>
        {JSON.stringify(todo)}
      </pre>
    </div>
  );
}

export default App;
