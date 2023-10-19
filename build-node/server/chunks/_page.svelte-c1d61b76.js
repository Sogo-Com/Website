import { c as create_ssr_component, a as subscribe, e as escape } from './index3-ec5c8fd3.js';
import './index5-2fb00356.js';
import { p as page } from './stores-145f0734.js';
import './index2-8abc0c01.js';

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
//# sourceMappingURL=_page.svelte-c1d61b76.js.map
