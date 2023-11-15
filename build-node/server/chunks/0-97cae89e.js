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
const component = async () => component_cache ??= (await import('./layout.svelte-59fe97d5.js')).default;
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.a1113da1.js","_app/immutable/chunks/boolean_attributes.7b38010d.js","_app/immutable/chunks/index.2e12a1dd.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-97cae89e.js.map
