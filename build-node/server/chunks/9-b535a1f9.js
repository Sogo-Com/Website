import { f as fail, r as redirect } from './index-0087e825.js';
import bcrypt from 'bcrypt';
import { d as db } from './index3-a6208fb6.js';
import '@prisma/client';

const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
      return fail(400, { invalid: true });
    }
    const user = await db.user.findUnique({ where: { email } });
    if (!user) {
      return fail(400, { credentials: true });
    }
    const userPassword = await bcrypt.compare(password, user.passwordHash);
    if (!userPassword) {
      return fail(400, { credentials: true });
    }
    const authenticatedUser = await db.user.update({
      where: { email: user.email },
      data: { userAuthToken: crypto.randomUUID() }
    });
    cookies.set("session", authenticatedUser.userAuthToken, {
      // send cookie for every page
      path: "/",
      // server side only cookie so you can't use `document.cookie`
      httpOnly: true,
      // only requests from same site can send cookies
      // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
      sameSite: "strict",
      // only sent over HTTPS in production
      secure: process.env.NODE_ENV === "production",
      // set cookie to expire after a month
      maxAge: 60 * 60 * 24 * 30
    });
    throw redirect(302, "/admin/home");
  }
};
const load = async (serverloadEvent) => {
  let { locals } = serverloadEvent;
  if (locals.user) {
    throw redirect(302, "/admin/home");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c7def076.js')).default;
const server_id = "src/routes/(admin)/admin/login/+page.server.js";
const imports = ["_app/immutable/nodes/9.99eb7722.js","_app/immutable/chunks/index.2d23d3b1.js"];
const stylesheets = ["_app/immutable/assets/9.63a6d81a.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-b535a1f9.js.map
