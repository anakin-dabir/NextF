import mongoose from 'mongoose';
import { cache } from 'react';
const Mongod = () => {
	const mongod = cache(async () => {
		'use server';
		try {
			const url = 'mongodb://127.0.0.1:27017/AppFest';
			mongoose.connect(url, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
			console.log(`DB Connected on ${url}`);
		} catch (err) {
			console.log(`Error: ${err}`);
		}
	});
	mongod();
	return null;
};

export default Mongod;
