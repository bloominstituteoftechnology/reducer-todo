import React, {useReducer, useState} from 'react';
import reducer from '../reducers/index';

const initialState = []

const TodoForm = () => {
    const[state, dispatch] = useReducer(reducer, initialState)
    const [formData, setFormData] = useState('')

    const changeHandler=(e)=> {
        setFormData(e.target.value)
    }

    const addTodo=(e)=> {
        e.preventDefault()
        dispatch({type:'add-todo', payload: formData})
        setFormData('')
    }



    return(
        <div>
            <form>
                <input name='todoInput' type='text' value={formData} onChange={changeHandler}/>
                <button onClick={addTodo}>Add</button>
                <button>Clear Selected</button>
            </form>
            <div>
                {state.map((todo) => 
                    <div key={todo.id} onClick={() => dispatch({type:'toggle-complete', payload: todo.id})} style={{textDecoration: todo.completed ? 'line-through' : ''}}>
                        {todo.item}
                    </div>    
                )}
            </div>
        </div>
    )

}

export default TodoForm;