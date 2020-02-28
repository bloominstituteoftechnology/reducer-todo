import { combineReducers } from "redux";

import { TodoListReducer } from "./TodoListReducer";
import { TitleReducer } from "./TitleReducer";

export const rootReducer = combineReducers({
  TodoListReducer,
  TitleReducer
});
