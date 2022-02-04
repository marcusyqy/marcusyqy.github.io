import adapter from '@sveltejs/adapter-static';
import {mdsvex} from 'mdsvex';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess : [
    preprocess(), mdsvex({
      extensions : [ '.md' ],
      layout : {posts : 'src/routes/posts/_post_layout.svelte'}
    })
  ],

  extensions : [ '.svelte', '.md' ],

  kit : {
    adapter : adapter(),
    // hydrate the <div id="svelte"> element in src/app.html
    target : '#svelte'
  }
};

export default config;
