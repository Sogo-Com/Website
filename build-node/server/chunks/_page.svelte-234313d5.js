import { c as create_ssr_component } from './index3-f0a5d41e.js';
import './index4-5a3e434e.js';
import './index2-270c726a.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `Register
<form action="?/register" method="POST"><div><label for="username">Username</label>
    <input id="username" name="username" type="text" required></div>

  <div><label for="password">Password</label>
    <input id="password" name="password" type="password" required></div>

  ${form?.user ? `<p class="error">Username is taken.</p>` : ``}

  <button type="submit">Register</button></form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-234313d5.js.map
