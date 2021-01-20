
export const initialState=[{
item: 'Learn about reducers',
completed: false,
id: 3892987589
}]

export const reducer=(state,action)=>{
    console.log(state);
   switch(action.type){
    case("ADD_TODO"):
        return[...state,
        {
            item:action.payload,
            completed:false,
            id:Date.now()
        }]
    case("TOGGLE_TODO"):
    console.log(action.payload)
        return[...state,{
            item:state.item,
            id:action.payload,
            completed:!state.id
        }]
       default:
           return state;
   }
}