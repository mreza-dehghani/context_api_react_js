import * as actionTypes from '../constants/actionTypes';
import todoInitialState from '../initialStates';

export default (state = todoInitialState, { type, payload }) => {
	switch (type) {
		case actionTypes.ADD_TODO_TITLE:
			return {
				...state,
				todoTitle: payload,
			};
		case actionTypes.ADD_TODO_DESCRIPTION:
			return {
				...state,
				todoDescription: payload,
			};
		case actionTypes.REMOVE_TODO:
			return {
				...state,
				todoDescription: '',
				todoTitle: '',
			};

		default:
			return state;
	}
};
