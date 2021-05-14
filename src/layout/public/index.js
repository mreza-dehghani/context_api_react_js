import { Suspense } from 'react';

export default ({ Component, route }) => {
	return (
		<div>
			<Suspense fallback={<div>loading...</div>}>
				<Component route={route} />
			</Suspense>
		</div>
	);
};
