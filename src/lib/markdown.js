// handle-markdown.js

import rehypePrism from "@mapbox/rehype-prism";
// parse front matter and body of markdown
import fm from "front-matter";
import fs from 'fs';
// import files with pattern
import glob from "glob";
import {rehype} from "rehype";
// parse body to html
import {remark} from "remark";
import remarkHtml from "remark-html";

/**
 * import all markdown files in specified path, extract front matter and convert
 * to html
 * @param {string} markdownPath path to folder containing the markdown files
 *     (ends on /)
 * @returns [{path, attributes, body}]
 */
export function importMarkdowns(markdownPath) {
  let fileNames = glob.sync(`${markdownPath}*.md`);
  return fileNames.map((path) => convertMarkdown(path));
}

/**
 * convert markdown to object with attributes and html
 * @param {string} path path to file
 * @returns
 */
export function convertMarkdown(path) {
  // read file
  let file = fs.readFileSync(path, 'utf8');

  // extract frontmatter and body with the front-matter package
  let {attributes, body} = fm(file);

  // parse the body to html with the remark/rehype pipeline
  let result = remark().use(remarkHtml).use(rehypePrism).processSync(body).value;
  result = rehype().use(rehypePrism).processSync(result).value;
  return {path, attributes, html : result};
}

// src/lib/handle-markdown.js
export function convertToPostPreview(object) {
  const url = object.path.replace(".md", "").replace("src/", "");

  return {...object.attributes, url};
}
