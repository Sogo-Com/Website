import { c as create_ssr_component, a as subscribe, e as escape } from './index3-20f57296.js';
import './index4-de144b65.js';
import { p as page } from './stores-dea36538.js';
import './index2-330ecdb0.js';

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
//# sourceMappingURL=_page.svelte-84183942.js.map
