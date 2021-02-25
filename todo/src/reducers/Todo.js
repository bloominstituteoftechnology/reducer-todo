//ACTION function that returns an object
export const initialState = {
    todo: [
    {
    item: 'Finish todo reducer project', 
    complete: false,
    id: 1,
},
],
};

export const todoReducer = (state, action)=>{
    switch(action.type) {

        case 'ADD_TODO':
            return {...state, todo: [...state.todo, action.payload]};
        case 'TOGGLE_COMPLETE':
            return {...state, todo: state.todo.map((item)=>{
                if (item.id === action.payload.id) {
                    return {...item, complete: !item.complete }
                }else {
                    return item 
                }
            })};
        case 'CLEAR_TODO':
            return {...state, todo: state.todo.filter((item)=>
                !item.complete 
            )};

            default:
            return state;
    }
};



// import {createStore} from 'redux';



//STORE globalized state
// let store = createStore ()


//ACTION function that returns an object
// const addTodo = () => {
//   return {
//     type: 'ADD'
//   }
// }
// const clearTodo = () => {
//   return {
//     type: 'CLEAR'
//   }
// }
// const toggleTodo = () => {
//   return {
//     type: 'TOGGLE'
//   }
// }

//REDUCER
// const todoReducer = (state = [{
//   item: 'Task', 
//   complete: false,
//   id: 1
// }], action) => {
//   switch(action.type){
//     case 'ADD':
//       return {...state, item: action.payload};
//     case 'CLEAR':
//       return {...state, complete:!state.complete};
//     case 'TOGGLE':
//       return {id: dateNow()}; 
//     default: 
//     return state;
//   }
// }



//DISPATCH
// export const TodoUseState(){
//     const [state, dispatch] = useReducer(todoReducer)} 