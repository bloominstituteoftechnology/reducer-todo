import React,{useReducer,useState}from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'
import "./App.css"
import {initialState,reducer} from "./reducers/TodoReducer"

const App =()=> {


  const [state,dispatch]= useReducer(reducer,initialState)
  const [todo, setTodo]=useState({task:"",id:new Date(),completed:false})


  const handleSubmit= (e)=>{
    e.preventDefault();
    dispatch({type:'ADD_TODO',payload:{todo}})
    setTodo({task:""})

  }

  const inputHandler=(e)=>{
      setTodo({task:e.target.value,completed:false,id:new Date()})
  }
   const toggleTodo = (id) => {
  
     dispatch({ type: 'TOGGLE_TODO', payload: id})


   }

   const removeCompleted=()=>{
    dispatch({ type: 'REMOVE_COMPLETED'})
   }

    return (
      <div className="app">
        <h2>To-Do List</h2>
        <div className="search">
           {/* <input className="searchInput" type="text" 
                  name="search" 
                  placeholder="search" 
                  value={this.state.searchTerm}
                  onChange={this.searchHandler}></input> */}
         </div>
         <TodoForm removeCompleted={removeCompleted} handleSubmit={handleSubmit} inputHandler={inputHandler} todo={todo}/>
          <TodoList toggleTodo={toggleTodo} todos={state.todos}/> 
      </div>
    );
  }

export default App;