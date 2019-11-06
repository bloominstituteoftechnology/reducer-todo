import React, {useState} from 'react';

const TForm = ({ dispatch }) => {
  const [todo, setTodo] = useState('')


  const handleChanges = event => {
    setTodo(event.target.value);
};


const addTodo = e => {
  e.preventDefault();
  dispatch ({ 
      type: "ADD_TODO", 
      payload: todo

  }) 

  setTodo('');

}



  return (
    <form 
    className="form-main" 
    onSubmit={ addTodo } >
    <input 
        className="input" 
        type="text" 
        name="todo" 
        value={todo} 
        onChange={handleChanges} />
  <div className='button-div'>
    <button 
        className="bForm"
        type="submit" >
        Add an item
    </button>
    </div>
</form>
  )
}
export default TForm;