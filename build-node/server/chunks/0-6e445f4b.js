import './index-39e97e00.js';

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
const component = async () => (await import('./layout.svelte-53e2b739.js')).default;
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.47891bab.js","_app/immutable/chunks/index.35481d87.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-6e445f4b.js.map
