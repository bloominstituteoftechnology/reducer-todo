import React, {useState} from "react"
// import Item from './item'




export default function Form ({ dispatch}) {
    
    const [items, setItem] = useState('');

    const handleChanges = e => {        
        setItem(e.target.value);
        
    }
console.log(items)
    return (        
            <div className="form-container">
                <form onSubmit= {(e)=> {
                    dispatch({type: 'ADD_ITEM', payload: items });
                    e.preventDefault();
                    }
                    
                    }>
                    Add To-do Item:
                    <input onChange={handleChanges} type="text" name="todo-item" value={items} placeholder="Enter Here"/>
                
                <button  type="submit" >Add Item</button>
                </form>
                <button onClick ={() => {
                    dispatch({type: 'CLEAR_COMPLETED'})}} >
                    Clear
                    </button>
                
            </div>
            
        
    )
}