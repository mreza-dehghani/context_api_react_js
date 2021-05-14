import * as actionTypes from '../constants/actionTypes';

export const addTodoTitle = payload => {
	return {
		type: actionTypes.ADD_TODO_TITLE,
		payload,
	};
};
export const addTodoDescription = payload => {
	return {
		type: actionTypes.ADD_TODO_DESCRIPTION,
		payload,
	};
};
export const removeTodo = () => {
	return {
		type: actionTypes.REMOVE_TODO,
	};
};
