import React from 'react';

import { User } from '../../models/test';

const DirectorySingle = async ({ params: { id } }) => {
	const { name, createdAt } = await User.findById(id);
	return (
		<>
			<div> {name}</div>
			<div> {createdAt.toLocaleString()}</div>
		</>
	);
};

export default DirectorySingle;
