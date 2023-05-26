import Link from 'next/link';

export const Navbar = () => {
	return (
		<>
			<div className='p-4 bg-slate-900 text-slate-100'>
				<div className='mx-auto container flex justify-between lg:max-w-screen-xl'>
					<div className='text-2xl font-bold'>Vercel</div>

					<div className='text-2xl flex space-x-8'>
						<Link href={'/'}>Home</Link>
						<Link href={'/Directory'}>Another Page</Link>
						<Link href={'/New'}>New Page</Link>
						<Link href={'/Images'}>Images</Link>
					</div>
				</div>
			</div>
		</>
	);
};
