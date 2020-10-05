export const initialState = {

    list: [
      {
          item: 'get out of bed',
          completed: false,
          id: 345
        },
        {
            item: 'drink coffee',
            completed: false,
            id: 396
          },
          {
            item: 'pretend to be human',
            completed: false,
            id: 343
          },
    ]
  };
  
  export function reducer(state, action) {
   
    switch (action.type) {
      case "TOGGLE_LIST":
        return {
          ...state,
          list: state.list.map(item => {
            if (item.id === action.payload) {
              return {
                ...item,
                completed: !item.completed
              };
            } else {
              return item;
            }

          })
        };


      case "ADD_TODO":
        return {
          ...state,
          list: [
            ...state.list,
            { item: action.payload, completed: false, id: Date.now() }
          ]
        };



      case "CLEAR_COMPLETED":
        return {...state, list: state.list.filter(item => !item.completed)}
      default:
        return state
    }
  }