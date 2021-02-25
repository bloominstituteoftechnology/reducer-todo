import {TOGGLE_EDITING, UPDATE_TITLE, UPDATE_TODO} from '../actions/todoAction'

const todoReducer = (state, action) =>{
    // why is it called .type = because it is the parameter from the action
    switch(action.type){
        case TOGGLE_EDITING:
            console.log('TOGGLE EDITING ACTION CALLED IN THE REDUCER')
            return{...state, editing: !state.editing  }
        case UPDATE_TITLE:
            console.log('update title action called in the reducer')
            return{...state, title: action.payload, editing: false}

    }
}

