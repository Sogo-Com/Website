import { c as create_ssr_component } from './index3-ec5c8fd3.js';
import './index5-2fb00356.js';
import './index2-8abc0c01.js';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}h1.svelte-1kiswwr.svelte-1kiswwr{color:var(--color-gris-dark)}.login-container.svelte-1kiswwr.svelte-1kiswwr{width:100%;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center}form.svelte-1kiswwr.svelte-1kiswwr{padding:0 32px;margin-top:20px;width:auto;max-width:600px;margin:0 auto}.form-group.svelte-1kiswwr.svelte-1kiswwr{margin-bottom:20px}.form-group.svelte-1kiswwr label.svelte-1kiswwr{display:block;font-family:var(--font-secondary-medium);color:var(--color-gris-dark);margin-bottom:5px}.form-group.svelte-1kiswwr input[type=text].svelte-1kiswwr,.form-group.svelte-1kiswwr input[type=password].svelte-1kiswwr{width:100%;padding:10px;border:1px solid var(--color-gris-clair);font-family:var(--font-secondary-regular)}.error.svelte-1kiswwr.svelte-1kiswwr{color:red;font-family:var(--font-secondary-regular)}button[type=submit].svelte-1kiswwr.svelte-1kiswwr{background-color:var(--color-jaune);color:var(--color-blanc);padding:10px 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;transition:background-color 0.3s ease}button[type=submit].svelte-1kiswwr.svelte-1kiswwr:hover{background-color:var(--color-bordeaux)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="login-container svelte-1kiswwr"><h1 class="svelte-1kiswwr">Login</h1>
  <form action="?/login" method="POST" class="svelte-1kiswwr"><div class="form-group svelte-1kiswwr"><label for="email" class="svelte-1kiswwr">Email</label>
          <input id="email" name="email" type="text" required class="svelte-1kiswwr"></div>

      <div class="form-group svelte-1kiswwr"><label for="password" class="svelte-1kiswwr">Password</label>
          <input id="password" name="password" type="password" required class="svelte-1kiswwr"></div>

      ${form?.invalid ? `<p class="error svelte-1kiswwr">Email and password are required.</p>` : ``}

      ${form?.credentials ? `<p class="error svelte-1kiswwr">You have entered the wrong credentials.</p>` : ``}

      <button type="submit" class="svelte-1kiswwr">Log in</button></form>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8961169b.js.map
