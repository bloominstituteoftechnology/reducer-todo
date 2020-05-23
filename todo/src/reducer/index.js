
export const initialTodoState = [{

    item:"Learn about reducers",
    complete: false,
    id: 7979799009997

},

{

    item: "Learn Redux",
    complete: false,
    id: 242522
},

{

    item: "Learn UX design",
    complete: false,
    id: 353635322222
}
];


export const todoReducer = (state = initialTodoState, action = null) => {

    switch (action.type) {
        case 'DO_TODO':
          return state.map((item) => {
              return item.id === action.payload ? 
              {...item, complete: !item.complete} : item
          });

        case 'UNDO_TODO':
          return state.map(item => {
           return state.filter((item) => !item.complete)
          });

        case 'ADD_TODO':
          return [...state, action.payload]
        default:
          return state;
      }

}