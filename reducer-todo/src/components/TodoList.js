import React, { useContext } from 'react';
import  AppContext  from '../context/AppContext';
import { TOGGLE_TODO, DELETE_TODO } from '../reducers/TodoReducer';
import { filterTodos } from '../useFilter';

const buttonStyle = {
    marginLeft: '5px'
};

function TodoListItem({ todo, onChangeTodo, onDeleteTodo }) {
    return (
        <li>
            <label className={todo.done ? 'done' : ''}>
                <input
                    checked={todo.done}
                    onChange={onChangeTodo}
                    type="checkbox"
                />
                {todo.text}
            </label>
            <button style={buttonStyle} onClick={onDeleteTodo}>
                Del
            </button>
        </li>
    );
}
function TodoList({ filter }) {
    const { todos, todosDispatch } = useContext(AppContext);
    const todosToDisplay = filterTodos(todos, filter);

    return (
        <ul className="todo-list">
            {todosToDisplay.map((todo, index) => (
                <TodoListItem
                    key={todo.text + index}
                    onChangeTodo={() =>
                        todosDispatch({ type: TOGGLE_TODO, index })
                    }
                    onDeleteTodo={() =>
                        todosDispatch({ type: DELETE_TODO, index })
                    }
                    todo={todo}
                />
            ))}
        </ul>
    );
}

export default TodoList;