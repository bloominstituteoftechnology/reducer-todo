import './App.css';
import { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import {setToDoList, setInputValue} from './actions'

//tests
// console.log(initialState);
// let currentState = reducer(initialState, setToDoList({
//   item: 'replacement item',
//   id: 'a',
//   completed: true
// }))
// console.log(currentState);

// currentState = reducer(currentState, setInputValue('hello!'))
// console.log(currentState);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setToDoList([
      ...state.toDoList, 
      {
        item: state.inputValue,
        completed: false,
        id: Date.now()
      }
    ]))
    dispatch(setInputValue(''));
  }

  const handleChange = e => {
    dispatch(setInputValue(e.target.value));
  }

  const toggleCompleted = e => {
    dispatch(setToDoList(state.toDoList.map(item => {
      const idToMatch = e.target.dataset.id * 1;
      if (item.id === idToMatch) {
        return {...item, completed: !item.completed}
      } else {
        return item;
      }
    })))

  };

  const handleClear = e => {
    e.preventDefault();
    dispatch(setToDoList(state.toDoList.filter(item => item.completed === false)))
  }

  const handleDeleteItem = e => {
    e.preventDefault();
    dispatch(setToDoList(state.toDoList.filter(item => {
      return item.id !== (e.target.dataset.id * 1)
    })))
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className='list-container'>
        {state.toDoList.map(item => {
          return (
            <div className='list-item' key={item.id}>
              <p onClick = {toggleCompleted} className={item.completed ? 'completed' : ''}data-id={item.id}>
                {item.item}
              </p>
              <button onClick={handleDeleteItem} data-id={item.id}>
                x
              </button>
            </div>
          )
        })}
      </div>
      <div className = 'add-new'>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type='text' value={state.inputValue} name='newItem' placeholder='new item...'/>
          <button>Add</button>
        </form>
      </div>
      <button onClick = {handleClear}>
        Clear completed
      </button>
    </div>
  );
}

export default App;
