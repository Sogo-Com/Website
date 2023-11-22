import { c as create_ssr_component } from './ssr-28b17f7a.js';
import '@editorjs/editorjs';
import '@editorjs/header';
import '@editorjs/nested-list';
import '@editorjs/image';

const Writer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contenu } = $$props;
  const methods = {
    loadContenu: (contenu2 = null) => {
    },
    saveContenu: async () => {
      let contenuSaved = {};
      return JSON.stringify(contenuSaved);
    }
  };
  if ($$props.contenu === void 0 && $$bindings.contenu && contenu !== void 0)
    $$bindings.contenu(contenu);
  if ($$props.methods === void 0 && $$bindings.methods && methods !== void 0)
    $$bindings.methods(methods);
  return `<div id="writer"></div>`;
});

export { Writer as W };
//# sourceMappingURL=Writer-ce799c2a.js.map
