import { r as redirect } from './index-0087e825.js';

const actions = {
  default: async ({ cookies }) => {
    cookies.set("session", "", {
      path: "/",
      expires: /* @__PURE__ */ new Date(0)
    });
    throw redirect(302, "/admin/login");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 14;
const server_id = "src/routes/(admin)/admin/logout/+page.server.js";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=14-46476658.js.map
