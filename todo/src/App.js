import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

const taskItem = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

function App() {

  const [todoItemList, setTodoItemList] =useState(taskItem);
  // const [dataText, setDataText] = useState('')

 console.log(todoItemList, 'todo item list')
  const toggleItem = clickedId =>{
    console.log('clicked the outside map')
    const newTaskList = todoItemList.map(item => { 
      console.log('clicked this inside map', item)

    if (item.id === clickedId){
console.log(clickedId ? `yes clicked ${item.task}`: 'not clicked')
      return {...item, completed: !item.completed}

    }else{
      console.log('item is untouched')
      return item;
    }
  
  })
  setTodoItemList(newTaskList)

  }
 

  const addNewItem = itemText =>{
    console.log('adding new item', itemText)
    const newTaskItem ={
      task: itemText,
      id: Date.now(),
      completed: false
    }
    setTodoItemList([...todoItemList, newTaskItem])
  
  }

  const removeList = itemTask =>{
    console.log('it should be removed now')
    setTodoItemList(todoItemList.filter(item=>{
      return !item.completed
    }))
  }

  // console.log('addnewitem--->', addNewItem)
  return (
    <div className="App">
<TodoForm addNewItem={addNewItem} removeList ={removeList} />
<TodoList taskItem={todoItemList} toggleItem={toggleItem}/>


    </div>
  );
}

export default App;
