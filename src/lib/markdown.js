import dayjs from 'dayjs';
import yaml from 'js-yaml';
import highlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import frontmatter from 'remark-frontmatter';
import gfm from 'remark-gfm';
import parse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import vfile from 'to-vfile';
import {unified} from 'unified';

let parser = unified().use(parse).use(gfm).use(frontmatter, [ 'yaml' ]);

let runner = unified().use(remark2rehype).use(highlight).use(rehypeStringify);

function process(filename) {
  let tree = parser.parse(vfile.readSync(filename));
  let metadata = null;
  if (tree.children.length > 0 && tree.children[0].type == "yaml") {
    metadata = yaml.load(tree.children[0].value);
    tree.children = tree.children.slice(1, tree.children.length);
    metadata.date = dayjs(metadata.date).format("MMM D, YYYY");
  }
  let content = runner.stringify(runner.runSync(tree));
  if (!metadata) {
    metadata = {
      title : "Error!",
      date : "?",
      excerpt : "Missing Frontmatter! Expected at least a title and a date!"
    };
    content = "Missing Frontmatter! Expected at least a title and a date!"
  }
  return {metadata, content};
}

export {process};
