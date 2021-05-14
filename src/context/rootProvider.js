import TodoProvider from './todoProvider';

const RootProvider = ({ children }) => {
	return <TodoProvider>{children}</TodoProvider>;
};

export default RootProvider;
