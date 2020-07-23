import React ,{useState}from "react"
import {reducer,initialState} from'../reducers/reducer'

const ToDoForm = (props) => {

    const [formData,setFormData] = useState('')

    const eHandler=(e) => {
        return(
            setFormData({
                [e.target.name]: e.target.value                 
            })
        )
    }

    return(
        <>
            <label>
                What to do?
                <input name='item' onChange={eHandler}/>    
            </label> 
            <button onClick={() => props.dispatch({type:'ADD', payload:formData})}>
                ADD
            </button>
            <button onClick={() => props.dispatch({type:'REMOVE'})}>
                wemove
            </button>
        </>
    
    )
   
}


export default ToDoForm