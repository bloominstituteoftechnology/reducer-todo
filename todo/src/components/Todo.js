import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from './../actions/index';
 function Todo({dispatch}){
  let input;
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input.value));
        input.value = '';
    }
    
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' ref={(el)=>(input = el)}/>
                <button type='submit'>Add Todo</button>
            </form>
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}
export default connect(mapStateToProps)(Todo)