import '../App.css';



function TaskFrom(props) {
  
  return (
    <div className="App">
      <input type='text' value={props.task} onChange={(e)=>{props.dispatchTask({type: 'change', payload:e.target.value})}} placeholder='type a new task...'/>
    </div>
  );
}

export default TaskFrom;
