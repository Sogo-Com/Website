import './index-0087e825.js';

const load = async (serverloadEvent) => {
  let { locals } = serverloadEvent;
  return {
    user: locals.user
  };
};

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-65799871.js')).default;
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.cbadaa10.js","_app/immutable/chunks/index.107dcb2b.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-fbaf22d1.js.map
