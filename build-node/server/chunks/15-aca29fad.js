import './index2-0087e825.js';
import { d as db } from './index-a6208fb6.js';
import '@prisma/client';

let csr = true;
let ssr = true;
const prerender = false;

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  csr: csr,
  prerender: prerender,
  ssr: ssr
});

const load = async (serverloadEvent) => {
  const actualite = await db.actualite.findFirst({});
  const projet = await db.projet.findFirst({});
  return {
    actualite,
    projet
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-efc02f7e.js')).default;
const universal_id = "src/routes/(front)/+page.js";
const server_id = "src/routes/(front)/+page.server.js";
const imports = ["_app/immutable/nodes/15.5ae3040c.js","_app/immutable/chunks/scheduler.f0ead462.js","_app/immutable/chunks/index.34cc1fde.js","_app/immutable/chunks/paths.79497da6.js","_app/immutable/chunks/Contact.9aeee150.js","_app/immutable/chunks/ScrollTrigger.88c70315.js","_app/immutable/chunks/SplitText.886cdc10.js","_app/immutable/chunks/swiper.3b5d8e33.js","_app/immutable/chunks/FlipCard.b3521d20.js","_app/immutable/chunks/navigation.d0c55e9b.js","_app/immutable/chunks/singletons.61107698.js"];
const stylesheets = ["_app/immutable/assets/15.4be929f9.css","_app/immutable/assets/Contact.fc6f56d4.css","_app/immutable/assets/swiper.0705b292.css","_app/immutable/assets/FlipCard.301fc32e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=15-aca29fad.js.map
