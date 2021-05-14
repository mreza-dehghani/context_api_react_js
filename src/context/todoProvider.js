import React, { useReducer } from 'react';
import { TodoReducer } from '../reducers';

export const TodoContext = React.createContext();

const TodoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(TodoReducer.reducer, TodoReducer.initialState);

	return <TodoContext.Provider value={[state, dispatch]}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
