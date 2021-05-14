import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { PublicLayout } from '../../layout';
import { Routes } from '../../routes';

export default () => {
	const layoutManager = (item, key) => {
		switch (item.layout) {
			case 'public':
				return (
					<Route
						key={key}
						path={item.path}
						exact={true}
						strict={true}
						render={route => <PublicLayout Component={item.component} route={route} />}
					/>
				);
			default:
				return <Route path={item.path} exact={true} strict={true} component={item.component} />;
		}
	};

	const switchRoute = () => {
		return Routes.map((item, key) => {
			return layoutManager(item, key);
		});
	};

	return (
		<Router>
			<Switch>{switchRoute()}</Switch>
		</Router>
	);
};
