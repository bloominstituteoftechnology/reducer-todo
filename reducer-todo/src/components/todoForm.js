import React, { useReducer} from 'react'
import Todo from "../components/todo"

export default function TodoForm() {
    const [state,dispatch] = useReducer()

    const ACTIONS = {
    ADD_TODO: "add-todo"
    TOGGLE_TODO:"Toggle-todo-complete"

}
const reducer = (state, action) =>{
    switch(action.type){
       case(ACTIONS.ADD_TODO):
           return ({...state,newTodo(action.payload.name)});
       case(ACTIONS.TOGGLE_TODO):
           return todos.map(todo=>{
               if(todo.id===action.payload.id)
               return {...todo, complete: !todo.complete}
               return todo
           })
          
       case(DELETE_TODO):
           return({...state, id:action.payload});
    
       default:
           return(state);

    }


}

function newTodo = (name) {
    return {id:Date.now(),name:name, complete:false}
}
    function reducer(state, action) {
        switch (action.type) {
            case (ACTIONS.ADD_TODO):
                return ({ ...state, todo: action.payload })
            case (ACTIONS.TOGGLE_TODO_COMPLETE):
                return ({ ...state, completed: action.payload })
            case (DELETE_TODO):
                return ({ ...state, id: action.payload })

            default:
                return (state)

        }


    }

export default reducer;
    
      
   const   handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:ACTIONS.ADD_TODO, payload: {name:name}})
         
      }

      

    return (
        <>
        <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleChange} type="text" name="item" />
        <button>Add Task</button>
        <button onClick={handleClick}>Clear</button>
      </form>
      {todos.map(todo =>{

        <Todo key={todo.id} todo={todo} dispatch={dispatch}/>

      })}
      </>
    )

    }