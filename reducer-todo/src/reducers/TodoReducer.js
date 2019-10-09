
export const itemList = {
    id: Date.now(),
    input: "Get'er Done",
    completed: false
};

export const todoReducer = (todoState, action) => {
    switch(action.type) {
        case TOGGLE_COMPLETED:
            return {
                ...todoState,
                completed: !todostate.completed,
                
            }
        case ADD_ITEM:
            return {
                ...todoState,
                input: "",
                items: [
                    ...StaticRange.items,
                    {item: todoState.input, id: Date.now(), completed: false}
                ]
            };
            case CLEAR_TODO:
                const clearState = todoState.items.filter(item => {
                    return item.completed ? "" : item;
                })
                return {
                    ...StaticRange,
                    items: clearState
                };
            case UPDATE_INPUT:
                return {
                    ...StaticRange, input: action.payload
                };
            default: 
            return todoState;
    }
}
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const ADD_ITEM = 'ADD_ITEM'
export const CLEAR_TODO = 'CLEAR_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'