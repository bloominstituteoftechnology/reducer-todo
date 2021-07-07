
export const initialState = [
    {
        item: 'Brush Teeth',
        completed:false,
        id:111111111
    },
    {
        item: 'Water Plants',
        completed:false,
        id:222222222
    },
    {
        item: 'Feed Cat',
        completed:false,
        id:3333333333
    }
]

export const reducer = (state,action) => {
    switch(action.type) {
        case 'ADD':
            return (
                [ 
                ...state,
                {item: action.payload.item,
                completed:false,
                id:Date.now()
            }]);

        case 'REMOVE':
            return state.filter(itemObj => 
                 !itemObj.completed 
            )            
            
        case 'IS_COMPLETE':
            return state.map(todo =>  
                todo.id === action.payload.id? 
                {...todo, completed:!action.payload.completed}:
                todo
           ) 
        default: return state;
    }
            
            

            // state.map(to => {
            //     console.log('1:',to.id)
            //     console.log('2:', action.payload.id)
            //     to.id === action.payload.id?
            //     console.log('yes'):
            //     // { ...item, completed:!action.payload.completed}:
            //     console.log('no')


}