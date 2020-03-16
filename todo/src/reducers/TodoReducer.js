// export const initialState =  {
//     item: '',
//     completed: false,
//     id: -1
// }
import $ from 'jquery'
export const todoReducer = (state, action) => {

    switch(action.type) {
        case 'toggle':
            state.forEach(i => {
                if (i.id === action.id) {
                    i.completed = !i.completed;
                }    
            })
            return [...state]
        break;
        case 'clear':
            state.forEach(i => {
                i.completed = false;
                $("input[type='checkbox']").each(function() {if (this.checked) this.checked = !this.checked});
            })
            return [...state]
        break;
    }

}