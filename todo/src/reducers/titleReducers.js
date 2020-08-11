export const initialState = {
    toDo: [
        {
            action: 'Study React Components',
            id: 0,
            done: false
          },
          {
            action: 'Practic More React',
            id: 1,
            done: false
          },
          {
            action: 'Fix The Shover',
            id: 2,
            done: false
          },
          {
            action: 'Water Plants',
            id: 3,
            done: false
          },
          {
            action: 'Collect Trash',
            id: 4,
            done: false
          },
          {
            action: 'Watch Movie',
            id: 5,
            done: false
          }, 
    ],
     }
    
     export const reducer = (state, action) => {
         console.log(action)
        var toDo=state.toDo
        switch (action.type) {
             case 'UPDATE_TODO':
                 return {
                  ...state,
                 editing: !state.editing
                 };
            case 'UPDATE_ITEM':
                
               toDo[action.id].done=!toDo[action.id].done
                console.log(toDo)
                    return{
                        ...state,
                        toDo:toDo
                    }

            case 'ADD_TODO':
                    var n={
                        action: action.name,
                        id: state.toDo.length,
                        done: false
                    }
                    toDo.push(n)
                return{
                    ...state,
                    toDo:toDo
                }


        

                
            case 'CLEAR':
                var clean=[]
                toDo.map(i=>{
                    if(!i.done)
                        clean.push(i)
                })
                return{
                    ...state,
                    toDo:clean
                }
                 
                default:
                     return state
         }
    }