import { process } from '$lib/markdown';
//
// [post].json.js
export function get({ params }) {
	// we could get the dynamic slug from the parameter of get.
	const { slug } = params;
    const url = `/assets/posts/${slug}.md`;
	const { metadata, content } = process(url);
	const body = JSON.stringify({ metadata, content });

	return { body };
}
