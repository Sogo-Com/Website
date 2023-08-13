import { c as create_ssr_component } from './index3-f0a5d41e.js';
import './index4-f49d557d.js';
import './index2-270c726a.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `Login


<h1>Login</h1>

<form action="?/login" method="POST"><div><label for="username">Username</label>
    <input id="username" name="username" type="text" required></div>

  <div><label for="password">Password</label>
    <input id="password" name="password" type="password" required></div>

  ${form?.invalid ? `<p class="error">Username and password is required.</p>` : ``}

  ${form?.credentials ? `<p class="error">You have entered the wrong credentials.</p>` : ``}

  <button type="submit">Log in</button></form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-46d22e3f.js.map
