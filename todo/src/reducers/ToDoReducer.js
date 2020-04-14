export const initialState = [
  {
    task: 'Family Time',
    id: 1528817084358,
    completed: false,
  },

  {
    task: 'Homework',
    id: 1528817077286,
    completed: false,
  },

  {
    task: 'Finish Project',
    id: 1528817070843,
    completed: false,
  },

  {
    task: 'Acrobatics',
    id: 15288489657265,
    completed: false,
  },

  {
    task: 'Dinner',
    id: 152889536749854,
    completed: false,
  },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_COMPLETED ':
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item;
      });

    case 'ADD_TODO':
      if (action.payload) {
        return [
          ...state,
          {
            task: action.payload,
            id: Date.now(),
            completed: true,
          },
        ];
      }
      break;
    case 'CLEAR_COMPLETED':
      return state.filter((item) => !item.completed);

    default:
      return state;
  }
};
