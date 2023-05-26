import React from 'react';
import Image from 'next/image';

const keyStr =
	'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1, e2, e3) =>
	keyStr.charAt(e1 >> 2) +
	keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
	keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
	keyStr.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
	`data:image/gif;base64,R0lGODlhAQABAPAA${
		triplet(0, r, g) + triplet(b, 255, 255)
	}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
const rgbDataURL1 = (r, g, b) =>
	`iVBORw0KGgoAAAANSUhEUgAAASwAAAH0CAYAAACHEBA3AAAE4UlEQVR42u3UQREAAAQAQdKrJINUcjC7Ee5xOd0VAAekYQGGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWYFiGBRgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFiAYRkWYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQGGZViAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBRiWDIBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBhmVYgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgUYlmEBhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFmBYhgUYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYgGEZFmBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBhiUDYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFjAbwtSSmM0TRGt/gAAAABJRU5ErkJggg==`;

const ImagePage = () => {
	return (
		<>
			<div className='font-bold text-2xl'>Images</div>
			<div className='mx-auto flex-wrap flex gap-4'>
				<Image
					src={
						'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?cs=srgb&dl=pexels-roberto-nickson-2486168.jpg&fm=jpg'
					}
					width={300}
					height={400}
					loading='lazy'
					placeholder='blur'
					blurDataURL={rgbDataURL(237, 181, 6)}
				/>
				<Image
					src={
						'https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fHw%3D&w=1000&q=80'
					}
					width={300}
					height={400}
					loading='lazy'
					placeholder='blur'
					blurDataURL={rgbDataURL(237, 181, 6)}
				/>
				<Image
					src={
						'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1013-p-0019d-01-ksi8b5jn.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=105acc73dbd66de4e097301c10eb6af5'
					}
					width={300}
					height={400}
					loading='lazy'
					placeholder='blur'
					blurDataURL={rgbDataURL(237, 181, 6)}
				/>

				<Image
					src={
						'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1013-p-0019d-01-ksi8b5jn.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=105acc73dbd66de4e097301c10eb6af5'
					}
					width={300}
					height={400}
					loading='lazy'
					placeholder='blur'
					blurDataURL={rgbDataURL(237, 181, 6)}
				/>
				<Image
					src={
						'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1013-p-0019d-01-ksi8b5jn.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=105acc73dbd66de4e097301c10eb6af5'
					}
					width={300}
					height={400}
					loading='lazy'
					placeholder='blur'
					blurDataURL={rgbDataURL(237, 181, 6)}
				/>
				<Image
					src={
						'https://w.forfun.com/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg'
					}
					width={300}
					height={400}
					loading='lazy'
					placeholder='blur'
					blurDataURL={rgbDataURL(237, 181, 6)}
				/>
				<Image
					src={
						'https://i.pinimg.com/736x/28/ab/71/28ab71de15b11c195dfb90efd6f1ac11.jpg'
					}
					width={300}
					height={400}
					loading='lazy'
					placeholder='blur'
					blurDataURL={rgbDataURL(237, 181, 6)}
				/>
			</div>
		</>
	);
};

export default ImagePage;
