import { c as create_ssr_component, a as subscribe, e as escape } from './index3-f0a5d41e.js';
import { p as page } from './stores-c6c319cc.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-62vunb_START -->${$$result.title = `<title>SvelteKit Admin</title>`, ""}<!-- HEAD_svelte-62vunb_END -->`, ""}
  
  <nav>${!$page.data.user ? `<a href="/admin/login">Login</a>
      <a href="/admin/register">Register</a>` : ``}
  
    ${$page.data.user ? `Welcome Home ${escape($page.data.user.name)}
      <form action="/admin/logout" method="POST"><button type="submit">Log out</button></form>` : ``}</nav>
  
  <main>${slots.default ? slots.default({}) : ``}</main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-5edf1f8c.js.map
