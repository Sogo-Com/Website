import './index2-0087e825.js';

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
const component = async () => component_cache ??= (await import('./layout.svelte-f19a57e0.js')).default;
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.8236c8a6.js","_app/immutable/chunks/scheduler.f0ead462.js","_app/immutable/chunks/index.34cc1fde.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-c5c2c658.js.map
