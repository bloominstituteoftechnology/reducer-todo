export const TOGGLE_TODO = 'TOGGLE_TODO'

export const initialNoteState = [
	{
		item: 'Learn about reducers',
		id: 3892987589,
    completed: false
	}
]

export const noteReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			console.log(action.note)
			return ([
				...state,
				{
					item: action.note,
					completed: false,
					id: Date.now()
				}
			])
    case 'TOGGLE_TODO':
			return state.map(todo => {return todo.id == action.id
			    ? {...todo, completed: !todo.completed}: todo}
			)
      // return state.map((todo) => todo.id == action.id ? console.log : console.log("yo"))
      case 'DELETE_COMPLETED':
        return state.filter(todo => {
          return todo.completed === false
        })
		default:
			return state
    }
}