import { useHistory } from 'react-router-dom';
import Input from '../../components/input';
import Button from '../../components/button';
import { TodoAction } from '../../actions';
import './index.css';
import React from 'react';
import { TodoContext } from '../../context';

export default () => {
	const history = useHistory();
	const { dispatch } = React.useContext(TodoContext);

	const addTodoTitle = value => {
		dispatch(TodoAction.addTodoTitle(value));
	};

	const addTodoDescription = value => {
		dispatch(TodoAction.addTodoDescription(value));
	};

	return (
		<div className="home">
			<h3>Form</h3>
			<div className="field-wrapper">
				<Input type="text" onChange={e => addTodoTitle(e.target.value)} placeholder="todo title..." />
			</div>
			<div className="field-wrapper">
				<Input type="text" onChange={e => addTodoDescription(e.target.value)} placeholder="todo description..." />
			</div>
			<Button onClick={() => history.push('/preview')}>Save</Button>
		</div>
	);
};
