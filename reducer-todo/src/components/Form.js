import React, {useState} from 'react';

function Form (props) {
    const [addTask, setTask] = useState({
        item: ''
    })

    return (
        <div>
          <form>
           <h4>Create Task 📄</h4> 
           <input
             name='item'
             type='text'
             value={addTask.name}
             
           />  
           <button>Submit</button>
          </form>
        </div>
     )
}

export default Form;