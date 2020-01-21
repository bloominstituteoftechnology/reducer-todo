export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {

            }
        default:
            return state;
    }
}
// addItem = el => {
//     const newItem = {
//         name: el,
//         id: Date.now(),
//         completed: false
//     };
//     this.setState({
//         todoItems: [...this.state.todoItems, newItem]
//     });
// };