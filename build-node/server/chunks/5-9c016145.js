import { f as fail, r as redirect } from './index-a4865dbd.js';
import bcrypt from 'bcrypt';
import { d as db } from './index5-21780dd4.js';
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

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-d51b61b4.js')).default;
const server_id = "src/routes/(admin)/admin/login/+page.server.js";
const imports = ["_app/immutable/nodes/5.99a49038.js","_app/immutable/chunks/index.6e3c4109.js","_app/immutable/chunks/index.2cefe83d.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.9eb499f3.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-9c016145.js.map
