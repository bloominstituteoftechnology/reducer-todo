export const NEW_TODO = "NEW_TODO";
export const FINISHED_TODO = "FINISHED_TODO";
export const TOGGLE_TODO = "CLEAR_TODO";

export const createTodo = (todo) => {
	return { type: NEW_TODO, payload: todo };
};

export const doneTodo = (e) => {
	return { type: FINISHED_TODO, payload: e.target.id };
};

export const clearedTodo = () => {
	return { type: TOGGLE_TODO };
};
