import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		name: String,
	},
	{
		timestamps: true,
		collection: 'Users',
	}
);
export const User = mongoose.models.User || mongoose.model('User', userSchema);
