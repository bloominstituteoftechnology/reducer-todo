import React, { useReducer, useState, useEffect } from 'react';
import TodosApp from './components/TodosApp';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import AppContext from './context/AppContext';
import TodosReducer from './reducers/TodoReducer';
import { ALL } from './useFilter';

function App() {
  const [todos, todosDispatch] = useReducer(
      TodosReducer,
      JSON.parse(localStorage.getItem('todos')) || []
  );

  const [activeFilter, setActiveFilter] = useState(ALL);

  useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
      <AppContext.Provider value={{ todos, todosDispatch }}>
          <div className="todo-app">
              <TodosApp />
              <Filter setActiveFilter={setActiveFilter} />
              <TodoList filter={activeFilter} />
          </div>
      </AppContext.Provider>
  );
}
export default App;