import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import RootProvider from './context/rootProvider';

ReactDOM.render(
	<React.StrictMode>
		<RootProvider>
			<App />
		</RootProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
