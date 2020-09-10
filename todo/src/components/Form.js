import React, {useReducer, useState} from "react";


function reducer (state, action) {
  console.log("State, action from reducer:", state, action)
  switch (action.type) {
    case "ADD_TODO":
      return state.concat({
        item: action.payload,
        completed: false,
        id: new Date()
      });
    case "TOGGLE_TODO":
      return state.map((todoObj) => {
        if (todoObj.id === action.id) {
          return {
            ...todoObj,
            completed: !todoObj.completed
          }
        } else {
          return todoObj
        }
      })
    case "CLEAN_TODOS":
      return state.filter(todoObj => {
        return !todoObj.completed
      });
    default:
      return state;
  }
}


const Form = () => {
  const [inputState, setInputState] = useState("");
  const [state, dispatch] = useReducer(reducer, [{
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }])

  const handleChange = (e) => {
    setInputState(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputState("");
    dispatch({ type: "ADD_TODO", payload: inputState})
  }

  return (
    <div>
      <h1>Bestest Form Ever.</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          value={inputState}
          onChange={handleChange}
        />
        <button
          type="submit"
        > Add Todo</button>
      </form>
      {state.map((todo) => {
        return (
          <>
            <h2
              onClick={() =>dispatch({ type: "TOGGLE_TODO", id: todo.id})}
              style={todo.completed ? {textDecoration: "line-through"} : null}
            >
              {todo.item}
            </h2>
          </>
        )
      })}
      <hr />
      <button onClick={() => dispatch({ type: "CLEAN_TODOS"})}>
        Clear 'em  thar completed's
      </button>
    </div>
  )
}

export default Form;