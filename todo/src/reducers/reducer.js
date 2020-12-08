export const initialState = {
    list: []
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
                { item: action.payload, completed: false, id: Date() }
            ]
        };

        case "CLEAR_COMPLETED":
            return {...state, list: state.list.filter(item => !item.completed)}
        default:
            return state
    };
};