import { c as create_ssr_component, a as subscribe, e as escape } from './index3-560a1835.js';
import { p as page } from './stores-da6e2aaa.js';

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
//# sourceMappingURL=_page.svelte-83f0c2e1.js.map
