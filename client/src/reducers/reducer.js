export const initialState =
    [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }];

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            console.log('ADDED ITEM TO STATE')
            return [...state, action.payload];
        case "ITEM_COMPLETED":

            //This is wrong I will need to make the correct one be toggled
            //Will fix shortly
            // initialState.map(() => { const })
            // return [...state,
            // {
            //     completed: !state.completed
            // }
            //]

            state.map((el) => {
                console.log(`Item Clicked with id ${action.payload}`)
                if (action.payload === el.id) {
                    console.log(`Item clicked was ${el.completed} now is ${!el.completed}`)
                    el.completed = !el.completed;
                }
            })
            return state;
        case "CLEAR_COMPLETED":
            console.log('Clear Completed Triggered')
            return state.filter(el => !el.completed)
        default:
            return state;
    }

};
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