import Link from 'next/link';

 const NotFound = ()  => {
	return (
		<>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href={'/'}>Go to home</Link>
		</>
	);
}
export default NotFound