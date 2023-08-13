import { f as fail, r as redirect } from './index-39e97e00.js';
import bcrypt from 'bcrypt';
import { d as db } from './index5-21780dd4.js';
import '@prisma/client';

let Roles = {
  ADMIN: "ADMIN",
  USER: "USER"
};
const actions = {
  register: async (event) => {
    const request = event.request;
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");
    if (typeof username !== "string" || typeof password !== "string" || !username || !password) {
      return fail(400, { invalid: true });
    }
    const user = await db.user.findUnique({
      where: { username }
    });
    if (user) {
      return fail(400, { user: true });
    }
    await db.user.create({
      data: {
        username,
        passwordHash: await bcrypt.hash(password, 10),
        userAuthToken: crypto.randomUUID(),
        role: { connect: { name: Roles.USER } }
      }
    });
    throw redirect(303, "/admin/login");
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

const index = 7;
const component = async () => (await import('./_page.svelte-2485510b.js')).default;
const server_id = "src/routes/(admin)/admin/register/+page.server.js";
const imports = ["_app/immutable/nodes/7.162503cc.js","_app/immutable/chunks/index.f3f28aff.js","_app/immutable/chunks/index.e8ea833e.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.299f05d0.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-4cd9d8e9.js.map
