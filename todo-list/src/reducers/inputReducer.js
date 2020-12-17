import {TOGGLE_INPUT_FIELD} from "../Actions/actions.js";

const inputReducer = (state, action) => {
    switch(action.type) {
        case TOGGLE_INPUT_FIELD :
            return(!state);
        default:
            return state;
    }
}

export default inputReducer