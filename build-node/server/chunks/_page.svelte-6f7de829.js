import { c as create_ssr_component, a as subscribe, e as escape } from './index3-f0a5d41e.js';
import './index4-f49d557d.js';
import { p as page } from './stores-ce6105e6.js';
import './index2-270c726a.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page.data.user);
  $$unsubscribe_page();
  return `You are logged in Admin

<pre>  ${escape($page.data.user)}
</pre>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6f7de829.js.map
