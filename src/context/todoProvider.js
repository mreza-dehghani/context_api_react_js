import React, { useReducer } from 'react';
import { TodoReducer } from '../reducers';
import todoInitialState from '../initialStates';

export const TodoContext = React.createContext(todoInitialState);

const TodoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(TodoReducer, todoInitialState);

	return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
