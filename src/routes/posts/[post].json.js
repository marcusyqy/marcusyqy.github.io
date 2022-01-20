// src/routes/posts/[url].json.js
import { convertMarkdown } from "$lib/markdown"

export function get({ params }) {
    const {post} = params;
    const md = convertMarkdown(`src/posts/${post}.md`)
    let body = JSON.stringify(md);

    return {body}
}
