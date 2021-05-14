import React from 'react';
import { TodoContext } from '../../context';
import './index.css';
import { TodoAction } from '../../actions';

export default () => {
	const [state, dispatch] = React.useContext(TodoContext);

	React.useEffect(() => {
		return () => {
			dispatch(TodoAction.removeTodo());
		};
	}, []);

	return (
		<div className="preview">
			<div className="preview-item">
				<h3>title</h3>
				<p>{state.todoTitle}</p>
			</div>
			<div className="preview-item">
				<h3>description</h3>
				<p>{state.todoDescription}</p>
			</div>
		</div>
	);
};
