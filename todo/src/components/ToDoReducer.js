

const reducer = (state, action) => {
    switch(action.type) {
        case('ADD_TASK'):
            return({...state, task:action.payload});
        case('COMPLETE_TASK'):
            return({...state, complete:action.payload});
        case('CLEAR_COMPLETED'):
            return({...state, clear:action.payload})
    }
}