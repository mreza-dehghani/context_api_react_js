import React from 'react';

const Home = React.lazy(() => import('../containers/home'));
const Preview = React.lazy(() => import('../containers/preview'));

export const Routes = [
	{
		path: '/',
		component: Home,
		layout: 'public',
	},
	{
		path: '/preview',
		component: Preview,
		layout: 'public',
	},
];
