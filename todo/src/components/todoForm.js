import React, {useState} from 'react';

const Todoform=()=>{
const [task,setTask]=useState('')

   const handleChange=((e)=>{
        setTask(e.target.value)
    })
   
   const handleSubmit=((e)=>{
        e.preventDefault();
    //    this.props.addTask(this.state.task);
        setTask('');
   })

        return(        
        <div>
            <form >
                <input
                type='text'
                name='todo'
                placeholder='new todo'
                // value={this.state.task}
                // onChange={this.handleChange}
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        </div>
        )

}
export default Todoform;