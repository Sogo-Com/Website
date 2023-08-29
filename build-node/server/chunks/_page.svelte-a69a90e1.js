import { c as create_ssr_component, a as subscribe, e as escape } from './index3-f0a5d41e.js';
import './index4-18179ee0.js';
import { p as page } from './stores-c6c319cc.js';
import './index2-c614f0d6.js';

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
//# sourceMappingURL=_page.svelte-a69a90e1.js.map
