import { revalidatePath, revalidateTag } from 'next/cache';
import { User } from '../models/test';
import Link from 'next/link';

export const revalidate = 10;
export const DirectoryPage = async () => {
	const customUser = async () => {
		'use server';
		try {
			let name = 'talha';
			await User.create({
				name,
			});
		} catch (err) {
			console.log(err);
		}
		console.log('New User created');
		revalidateTag('/Directory');
	};

	const data = JSON.parse(JSON.stringify(await User.find({})));

	return (
		<div>
			<ul>
				{data?.map((data) => {
					return (
						<li key={data._id}>
							<Link href={`/Directory/${data._id}`}>{data._id}</Link>
							<div>{data.name}</div>
						</li>
					);
				})}
			</ul>
			<form action={customUser}>
				<button className='m-10 p-4 bg-slate-800 text-slate-100'>
					Click Here
				</button>
			</form>
		</div>
	);
};

export default DirectoryPage;
