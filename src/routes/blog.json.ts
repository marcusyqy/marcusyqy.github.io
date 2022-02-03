import { process } from '$lib/markdown';
import fs from 'fs';
import dayjs from 'dayjs';

export function get() {
	let posts = fs
		.readdirSync(`src/routes/posts`)
		.filter((fileName) => /.+\.md$/.test(fileName))
		.map((fileName) => {
			const { metadata } = process(`src/routes/posts/${fileName}`);
			return {
				metadata,
				url: fileName.slice(0, -3)
			};
		});
	// sort the posts by create date.
	posts.sort(
		(a, b) => dayjs(b.metadata.date, 'MMM D, YYYY') - dayjs(a.metadata.date, 'MMM D, YYYY')
	);
	let body = JSON.stringify(posts);

	return {
		body
	};
}
