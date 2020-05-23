
export const initialTodoState = [{

    item:"Learn about reducers",
    completed: false,
    id: Date.now()

},

{

    item: "Learn Redux",
    completed: false,
    id: Date.now()
},

{

    item: "",
    completed: false,
    id: Date.now()
}
];


export const todoReducer = (state = initialTodoState, action = null) => {

    switch (action.type) {
        case 'DO_TODO':
          return state.map((item) => {
              return item.id === action.payload ? 
              {...item, completed: !item.completed} : item
          })

        case 'UNDO_TODO':
          return state.map(item => {
           return state.filter((item) => !item.completed)
          });

        case 'ADD_TODO':
          return [...state, action.payload]
        default:
          return state;
      }

}