import { process } from '$lib/markdown';
//
// [post].json.js
export function get({ params }) {
	// we could get the dynamic slug from the parameter of get.
	const { post } = params;
    console.log(`${post}`);

	const { metadata, content } = process(`src/posts/${post}.md`);
	const body = JSON.stringify({ metadata, content });

	return { body };
}
