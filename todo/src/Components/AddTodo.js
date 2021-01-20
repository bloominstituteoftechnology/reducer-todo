import React, {useState} from 'react';
import {addTodo} from '../actions/actions';
import {connect} from 'react-redux';
const AddTodo = (props) => {
    const formValues = {
        todo: ''
    }
    const [values, setValues] = useState(formValues);
   const onChange = (e) => {
    setValues(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.addTodo(values)
        setValues(formValues)

    }
    return (
        <div>
            <form onSubmit={onSubmit} >
                <input 
                type='text'
                onChange={onChange}
                placeholder='Add Todo'
                value={formValues.name}
                name='todo'

                />
                <button>Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return({
todos: state.todos
    })
}
export default connect(mapStateToProps, {addTodo})(AddTodo)