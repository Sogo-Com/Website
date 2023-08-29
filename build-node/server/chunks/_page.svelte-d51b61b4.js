import { c as create_ssr_component } from './index3-f0a5d41e.js';
import './index4-18179ee0.js';
import './index2-c614f0d6.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `Login


<h1>Login</h1>

<form action="?/login" method="POST"><div><label for="email">email</label>
    <input id="email" name="email" type="text" required></div>

  <div><label for="password">Password</label>
    <input id="password" name="password" type="password" required></div>

  ${form?.invalid ? `<p class="error">email and password is required.</p>` : ``}

  ${form?.credentials ? `<p class="error">You have entered the wrong credentials.</p>` : ``}

  <button type="submit">Log in</button></form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d51b61b4.js.map
