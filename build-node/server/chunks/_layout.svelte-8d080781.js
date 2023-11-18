import { c as create_ssr_component, v as validate_component, a as subscribe, e as escape, b as add_attribute, d as each, o as onDestroy, h as add_styles, j as spread, k as escape_object, m as missing_component, l as merge_ssr_styles, p as get_store_value } from './ssr-28b17f7a.js';
import { d as derived, w as writable } from './index3-519bc178.js';
import './index2-0087e825.js';

function writableDerived(origins, derive, reflect, initial) {
  var childDerivedSetter, originValues, blockNextDerive = false;
  var reflectOldValues = reflect.length >= 2;
  var wrappedDerive = (got, set, update3) => {
    childDerivedSetter = set;
    if (reflectOldValues) {
      originValues = got;
    }
    if (!blockNextDerive) {
      let returned = derive(got, set, update3);
      if (derive.length < 2) {
        set(returned);
      } else {
        return returned;
      }
    }
    blockNextDerive = false;
  };
  var childDerived = derived(origins, wrappedDerive, initial);
  var singleOrigin = !Array.isArray(origins);
  function doReflect(reflecting) {
    var setWith = reflect(reflecting, originValues);
    if (singleOrigin) {
      blockNextDerive = true;
      origins.set(setWith);
    } else {
      setWith.forEach((value, i) => {
        blockNextDerive = true;
        origins[i].set(value);
      });
    }
    blockNextDerive = false;
  }
  var tryingSet = false;
  function update2(fn) {
    var isUpdated, mutatedBySubscriptions, oldValue, newValue;
    if (tryingSet) {
      newValue = fn(get_store_value(childDerived));
      childDerivedSetter(newValue);
      return;
    }
    var unsubscribe = childDerived.subscribe((value) => {
      if (!tryingSet) {
        oldValue = value;
      } else if (!isUpdated) {
        isUpdated = true;
      } else {
        mutatedBySubscriptions = true;
      }
    });
    newValue = fn(oldValue);
    tryingSet = true;
    childDerivedSetter(newValue);
    unsubscribe();
    tryingSet = false;
    if (mutatedBySubscriptions) {
      newValue = get_store_value(childDerived);
    }
    if (isUpdated) {
      doReflect(newValue);
    }
  }
  return {
    subscribe: childDerived.subscribe,
    set(value) {
      update2(() => value);
    },
    update: update2
  };
}
const TOAST_LIMIT = 20;
const toasts = writable([]);
const pausedAt = writable(null);
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    remove(toastId);
  }, 1e3);
  toastTimeouts.set(toastId, timeout);
};
const clearFromRemoveQueue = (toastId) => {
  const timeout = toastTimeouts.get(toastId);
  if (timeout) {
    clearTimeout(timeout);
  }
};
function update(toast2) {
  if (toast2.id) {
    clearFromRemoveQueue(toast2.id);
  }
  toasts.update(($toasts) => $toasts.map((t) => t.id === toast2.id ? { ...t, ...toast2 } : t));
}
function add(toast2) {
  toasts.update(($toasts) => [toast2, ...$toasts].slice(0, TOAST_LIMIT));
}
function upsert(toast2) {
  if (get_store_value(toasts).find((t) => t.id === toast2.id)) {
    update(toast2);
  } else {
    add(toast2);
  }
}
function dismiss(toastId) {
  toasts.update(($toasts) => {
    if (toastId) {
      addToRemoveQueue(toastId);
    } else {
      $toasts.forEach((toast2) => {
        addToRemoveQueue(toast2.id);
      });
    }
    return $toasts.map((t) => t.id === toastId || toastId === void 0 ? { ...t, visible: false } : t);
  });
}
function remove(toastId) {
  toasts.update(($toasts) => {
    if (toastId === void 0) {
      return [];
    }
    return $toasts.filter((t) => t.id !== toastId);
  });
}
function startPause(time) {
  pausedAt.set(time);
}
function endPause(time) {
  let diff;
  pausedAt.update(($pausedAt) => {
    diff = time - ($pausedAt || 0);
    return null;
  });
  toasts.update(($toasts) => $toasts.map((t) => ({
    ...t,
    pauseDuration: t.pauseDuration + diff
  })));
}
const defaultTimeouts = {
  blank: 4e3,
  error: 4e3,
  success: 2e3,
  loading: Infinity,
  custom: 4e3
};
function useToasterStore(toastOptions = {}) {
  const mergedToasts = writableDerived(toasts, ($toasts) => $toasts.map((t) => ({
    ...toastOptions,
    ...toastOptions[t.type],
    ...t,
    duration: t.duration || toastOptions[t.type]?.duration || toastOptions?.duration || defaultTimeouts[t.type],
    style: [toastOptions.style, toastOptions[t.type]?.style, t.style].join(";")
  })), ($toasts) => $toasts);
  return {
    toasts: mergedToasts,
    pausedAt
  };
}
const isFunction = (valOrFunction) => typeof valOrFunction === "function";
const resolveValue = (valOrFunction, arg) => isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
const genId = (() => {
  let count = 0;
  return () => {
    count += 1;
    return count.toString();
  };
})();
const prefersReducedMotion = (() => {
  let shouldReduceMotion;
  return () => {
    if (shouldReduceMotion === void 0 && typeof window !== "undefined") {
      const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");
      shouldReduceMotion = !mediaQuery || mediaQuery.matches;
    }
    return shouldReduceMotion;
  };
})();
const createToast = (message, type = "blank", opts) => ({
  createdAt: Date.now(),
  visible: true,
  type,
  ariaProps: {
    role: "status",
    "aria-live": "polite"
  },
  message,
  pauseDuration: 0,
  ...opts,
  id: opts?.id || genId()
});
const createHandler = (type) => (message, options) => {
  const toast2 = createToast(message, type, options);
  upsert(toast2);
  return toast2.id;
};
const toast = (message, opts) => createHandler("blank")(message, opts);
toast.error = createHandler("error");
toast.success = createHandler("success");
toast.loading = createHandler("loading");
toast.custom = createHandler("custom");
toast.dismiss = (toastId) => {
  dismiss(toastId);
};
toast.remove = (toastId) => remove(toastId);
toast.promise = (promise, msgs, opts) => {
  const id = toast.loading(msgs.loading, { ...opts, ...opts?.loading });
  promise.then((p) => {
    toast.success(resolveValue(msgs.success, p), {
      id,
      ...opts,
      ...opts?.success
    });
    return p;
  }).catch((e) => {
    toast.error(resolveValue(msgs.error, e), {
      id,
      ...opts,
      ...opts?.error
    });
  });
  return promise;
};
function calculateOffset(toast2, $toasts, opts) {
  const { reverseOrder, gutter = 8, defaultPosition } = opts || {};
  const relevantToasts = $toasts.filter((t) => (t.position || defaultPosition) === (toast2.position || defaultPosition) && t.height);
  const toastIndex = relevantToasts.findIndex((t) => t.id === toast2.id);
  const toastsBefore = relevantToasts.filter((toast3, i) => i < toastIndex && toast3.visible).length;
  const offset = relevantToasts.filter((t) => t.visible).slice(...reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce((acc, t) => acc + (t.height || 0) + gutter, 0);
  return offset;
}
const handlers = {
  startPause() {
    startPause(Date.now());
  },
  endPause() {
    endPause(Date.now());
  },
  updateHeight: (toastId, height) => {
    update({ id: toastId, height });
  },
  calculateOffset
};
function useToaster(toastOptions) {
  const { toasts: toasts2, pausedAt: pausedAt2 } = useToasterStore(toastOptions);
  const timeouts = /* @__PURE__ */ new Map();
  let _pausedAt;
  const unsubscribes = [
    pausedAt2.subscribe(($pausedAt) => {
      if ($pausedAt) {
        for (const [, timeoutId] of timeouts) {
          clearTimeout(timeoutId);
        }
        timeouts.clear();
      }
      _pausedAt = $pausedAt;
    }),
    toasts2.subscribe(($toasts) => {
      if (_pausedAt) {
        return;
      }
      const now = Date.now();
      for (const t of $toasts) {
        if (timeouts.has(t.id)) {
          continue;
        }
        if (t.duration === Infinity) {
          continue;
        }
        const durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);
        if (durationLeft < 0) {
          if (t.visible) {
            toast.dismiss(t.id);
          }
          return null;
        }
        timeouts.set(t.id, setTimeout(() => toast.dismiss(t.id), durationLeft));
      }
    })
  ];
  onDestroy(() => {
    for (const unsubscribe of unsubscribes) {
      unsubscribe();
    }
  });
  return { toasts: toasts2, handlers };
}
const css$8 = {
  code: "div.svelte-11kvm4p{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #61d345);position:relative;transform:rotate(45deg);animation:svelte-11kvm4p-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:100ms}div.svelte-11kvm4p::after{content:'';box-sizing:border-box;animation:svelte-11kvm4p-checkmarkAnimation 0.2s ease-out forwards;opacity:0;animation-delay:200ms;position:absolute;border-right:2px solid;border-bottom:2px solid;border-color:var(--secondary, #fff);bottom:6px;left:6px;height:10px;width:6px}@keyframes svelte-11kvm4p-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-11kvm4p-checkmarkAnimation{0%{height:0;width:0;opacity:0}40%{height:0;width:6px;opacity:1}100%{opacity:1;height:10px}}",
  map: null
};
const CheckmarkIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#61d345" } = $$props;
  let { secondary = "#fff" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$8);
  return `  <div class="svelte-11kvm4p"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$7 = {
  code: "div.svelte-1ee93ns{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #ff4b4b);position:relative;transform:rotate(45deg);animation:svelte-1ee93ns-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:100ms}div.svelte-1ee93ns::after,div.svelte-1ee93ns::before{content:'';animation:svelte-1ee93ns-firstLineAnimation 0.15s ease-out forwards;animation-delay:150ms;position:absolute;border-radius:3px;opacity:0;background:var(--secondary, #fff);bottom:9px;left:4px;height:2px;width:12px}div.svelte-1ee93ns:before{animation:svelte-1ee93ns-secondLineAnimation 0.15s ease-out forwards;animation-delay:180ms;transform:rotate(90deg)}@keyframes svelte-1ee93ns-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-1ee93ns-firstLineAnimation{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes svelte-1ee93ns-secondLineAnimation{from{transform:scale(0) rotate(90deg);opacity:0}to{transform:scale(1) rotate(90deg);opacity:1}}",
  map: null
};
const ErrorIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#ff4b4b" } = $$props;
  let { secondary = "#fff" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$7);
  return `  <div class="svelte-1ee93ns"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$6 = {
  code: "div.svelte-1j7dflg{width:12px;height:12px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--secondary, #e0e0e0);border-right-color:var(--primary, #616161);animation:svelte-1j7dflg-rotate 1s linear infinite}@keyframes svelte-1j7dflg-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
  map: null
};
const LoaderIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#616161" } = $$props;
  let { secondary = "#e0e0e0" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$6);
  return `  <div class="svelte-1j7dflg"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$5 = {
  code: ".indicator.svelte-1kgeier{position:relative;display:flex;justify-content:center;align-items:center;min-width:20px;min-height:20px}.status.svelte-1kgeier{position:absolute}.animated.svelte-1kgeier{position:relative;transform:scale(0.6);opacity:0.4;min-width:20px;animation:svelte-1kgeier-enter 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards}@keyframes svelte-1kgeier-enter{from{transform:scale(0.6);opacity:0.4}to{transform:scale(1);opacity:1}}",
  map: null
};
const ToastIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type;
  let icon;
  let iconTheme;
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  $$result.css.add(css$5);
  ({ type, icon, iconTheme } = toast2);
  return `${typeof icon === "string" ? `<div class="animated svelte-1kgeier">${escape(icon)}</div>` : `${typeof icon !== "undefined" ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `${type !== "blank" ? `<div class="indicator svelte-1kgeier">${validate_component(LoaderIcon, "LoaderIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})} ${type !== "loading" ? `<div class="status svelte-1kgeier">${type === "error" ? `${validate_component(ErrorIcon, "ErrorIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})}` : `${validate_component(CheckmarkIcon, "CheckmarkIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})}`}</div>` : ``}</div>` : ``}`}`}`;
});
const css$4 = {
  code: ".message.svelte-1nauejd{display:flex;justify-content:center;margin:4px 10px;color:inherit;flex:1 1 auto;white-space:pre-line}",
  map: null
};
const ToastMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  $$result.css.add(css$4);
  return `<div${spread([{ class: "message" }, escape_object(toast2.ariaProps)], { classes: "svelte-1nauejd" })}>${typeof toast2.message === "string" ? `${escape(toast2.message)}` : `${validate_component(toast2.message || missing_component, "svelte:component").$$render($$result, { toast: toast2 }, {}, {})}`} </div>`;
});
const css$3 = {
  code: "@keyframes svelte-ug60r4-enterAnimation{0%{transform:translate3d(0, calc(var(--factor) * -200%), 0) scale(0.6);opacity:0.5}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes svelte-ug60r4-exitAnimation{0%{transform:translate3d(0, 0, -1px) scale(1);opacity:1}100%{transform:translate3d(0, calc(var(--factor) * -150%), -1px) scale(0.6);opacity:0}}@keyframes svelte-ug60r4-fadeInAnimation{0%{opacity:0}100%{opacity:1}}@keyframes svelte-ug60r4-fadeOutAnimation{0%{opacity:1}100%{opacity:0}}.base.svelte-ug60r4{display:flex;align-items:center;background:#fff;color:#363636;line-height:1.3;will-change:transform;box-shadow:0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);max-width:350px;pointer-events:auto;padding:8px 10px;border-radius:8px}.transparent.svelte-ug60r4{opacity:0}.enter.svelte-ug60r4{animation:svelte-ug60r4-enterAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.exit.svelte-ug60r4{animation:svelte-ug60r4-exitAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}.fadeIn.svelte-ug60r4{animation:svelte-ug60r4-fadeInAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.fadeOut.svelte-ug60r4{animation:svelte-ug60r4-fadeOutAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}",
  map: null
};
const ToastBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toast: toast2 } = $$props;
  let { position = void 0 } = $$props;
  let { style = "" } = $$props;
  let { Component = void 0 } = $$props;
  let factor;
  let animation;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.Component === void 0 && $$bindings.Component && Component !== void 0)
    $$bindings.Component(Component);
  $$result.css.add(css$3);
  {
    {
      const top = (toast2.position || position || "top-center").includes("top");
      factor = top ? 1 : -1;
      const [enter, exit] = prefersReducedMotion() ? ["fadeIn", "fadeOut"] : ["enter", "exit"];
      animation = toast2.visible ? enter : exit;
    }
  }
  return `<div class="${"base " + escape(toast2.height ? animation : "transparent", true) + " " + escape(toast2.className || "", true) + " svelte-ug60r4"}"${add_styles(merge_ssr_styles(escape(style, true) + "; " + escape(toast2.style, true), { "--factor": factor }))}>${Component ? `${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {
    message: () => {
      return `${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2, slot: "message" }, {}, {})}`;
    },
    icon: () => {
      return `${validate_component(ToastIcon, "ToastIcon").$$render($$result, { toast: toast2, slot: "icon" }, {}, {})}`;
    }
  })}` : `${slots.default ? slots.default({ ToastIcon, ToastMessage, toast: toast2 }) : ` ${validate_component(ToastIcon, "ToastIcon").$$render($$result, { toast: toast2 }, {}, {})} ${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2 }, {}, {})} `}`} </div>`;
});
const css$2 = {
  code: ".wrapper.svelte-v01oml{left:0;right:0;display:flex;position:absolute;transform:translateY(calc(var(--offset, 16px) * var(--factor) * 1px))}.transition.svelte-v01oml{transition:all 230ms cubic-bezier(0.21, 1.02, 0.73, 1)}.active.svelte-v01oml{z-index:9999}.active.svelte-v01oml>*{pointer-events:auto}",
  map: null
};
const ToastWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let top;
  let bottom;
  let factor;
  let justifyContent;
  let { toast: toast2 } = $$props;
  let { setHeight } = $$props;
  let wrapperEl;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  if ($$props.setHeight === void 0 && $$bindings.setHeight && setHeight !== void 0)
    $$bindings.setHeight(setHeight);
  $$result.css.add(css$2);
  top = toast2.position?.includes("top") ? 0 : null;
  bottom = toast2.position?.includes("bottom") ? 0 : null;
  factor = toast2.position?.includes("top") ? 1 : -1;
  justifyContent = toast2.position?.includes("center") && "center" || (toast2.position?.includes("right") || toast2.position?.includes("end")) && "flex-end" || null;
  return `<div class="${[
    "wrapper svelte-v01oml",
    (toast2.visible ? "active" : "") + " " + (!prefersReducedMotion() ? "transition" : "")
  ].join(" ").trim()}"${add_styles({
    "--factor": factor,
    "--offset": toast2.offset,
    top,
    bottom,
    "justify-content": justifyContent
  })}${add_attribute("this", wrapperEl, 0)}>${toast2.type === "custom" ? `${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2 }, {}, {})}` : `${slots.default ? slots.default({ toast: toast2 }) : ` ${validate_component(ToastBar, "ToastBar").$$render($$result, { toast: toast2, position: toast2.position }, {}, {})} `}`} </div>`;
});
const css$1 = {
  code: ".toaster.svelte-1phplh9{--default-offset:16px;position:fixed;z-index:9999;top:var(--default-offset);left:var(--default-offset);right:var(--default-offset);bottom:var(--default-offset);pointer-events:none}",
  map: null
};
const Toaster = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toasts, $$unsubscribe_toasts;
  let { reverseOrder = false } = $$props;
  let { position = "top-center" } = $$props;
  let { toastOptions = void 0 } = $$props;
  let { gutter = 8 } = $$props;
  let { containerStyle = void 0 } = $$props;
  let { containerClassName = void 0 } = $$props;
  const { toasts: toasts2, handlers: handlers2 } = useToaster(toastOptions);
  $$unsubscribe_toasts = subscribe(toasts2, (value) => $toasts = value);
  let _toasts;
  if ($$props.reverseOrder === void 0 && $$bindings.reverseOrder && reverseOrder !== void 0)
    $$bindings.reverseOrder(reverseOrder);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.toastOptions === void 0 && $$bindings.toastOptions && toastOptions !== void 0)
    $$bindings.toastOptions(toastOptions);
  if ($$props.gutter === void 0 && $$bindings.gutter && gutter !== void 0)
    $$bindings.gutter(gutter);
  if ($$props.containerStyle === void 0 && $$bindings.containerStyle && containerStyle !== void 0)
    $$bindings.containerStyle(containerStyle);
  if ($$props.containerClassName === void 0 && $$bindings.containerClassName && containerClassName !== void 0)
    $$bindings.containerClassName(containerClassName);
  $$result.css.add(css$1);
  _toasts = $toasts.map((toast2) => ({
    ...toast2,
    position: toast2.position || position,
    offset: handlers2.calculateOffset(toast2, $toasts, {
      reverseOrder,
      gutter,
      defaultPosition: position
    })
  }));
  $$unsubscribe_toasts();
  return `<div class="${"toaster " + escape(containerClassName || "", true) + " svelte-1phplh9"}"${add_attribute("style", containerStyle, 0)} role="alert">${each(_toasts, (toast2) => {
    return `${validate_component(ToastWrapper, "ToastWrapper").$$render(
      $$result,
      {
        toast: toast2,
        setHeight: (height) => handlers2.updateHeight(toast2.id, height)
      },
      {},
      {}
    )}`;
  })} </div>`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:360px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 360px){:root{font-size:10px}}.back-office{display:flex;min-height:100vh;height:100%}.back-office h1{font-family:var(--font-primary-bold);color:var(--color-rose)}.back-office .sidebar-container{width:250px;background-color:#E1E1E1;padding:20px}.back-office .sidebar{position:sticky;top:0}.back-office .sidebar .logo{margin-bottom:20px}.back-office .sidebar .logo img{max-width:100%}.back-office .sidebar .menu{list-style:none;padding:0}.back-office .sidebar .menu li{margin-bottom:10px}.back-office .sidebar .menu li a{text-decoration:none;color:var(--color-gris-dark);font-family:var(--font-secondary-regular);font-size:16px;transition:color 0.3s ease}.back-office .sidebar .menu li a:hover{color:var(--color-gris)}.back-office .main-content{flex:1}.back-office .header{background-color:#E1E1E1;position:sticky;top:0;z-index:10}.back-office .header .header-content{display:flex;justify-content:space-between;align-items:center}.back-office .header .header-content [slot=buttons]{width:100%;height:50px;display:flex;justify-content:start;align-items:center}.back-office .header .header-content .logout-button{height:50px;background-color:var(--color-bordeaux);color:var(--color-blanc);padding:0 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;transition:background-color 0.3s ease}.back-office .header .header-content .logout-button:hover{background-color:var(--color-rose)}.back-office .header .header-content .create-button{height:50px;background-color:var(--color-jaune);color:var(--color-blanc);padding:0 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;transition:background-color 0.3s ease;display:flex;align-items:center;text-decoration:none}.back-office .header .header-content .create-button:hover{background-color:var(--color-kaki)}.back-office .header .header-content .save-button{height:50px;background-color:var(--color-bleu);color:var(--color-blanc);padding:0 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;transition:background-color 0.3s ease;display:flex;align-items:center;text-decoration:none}.back-office .header .header-content .save-button:hover{background-color:var(--color-gris)}.back-office .header .header-content .back-button{height:50px;background-color:var(--color-jaune);color:var(--color-blanc);padding:0 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;transition:background-color 0.3s ease}.back-office .header .header-content .back-button:hover{background-color:var(--color-gris)}.back-office .header .header-content .delete-button{height:50px;background-color:var(--color-bordeaux);color:var(--color-blanc);padding:0 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;transition:background-color 0.3s ease}.back-office .header .header-content .delete-button:hover{background-color:var(--color-rose)}.back-office .header .header-content .create-button{height:50px;background-color:var(--color-jaune);color:var(--color-blanc);padding:0 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;transition:background-color 0.3s ease}.back-office .header .header-content .create-button:hover{background-color:var(--color-kaki)}.back-office .header .header-content .view-site-button{height:50px;background-color:var(--color-bleu);color:var(--color-blanc);padding:0 20px;font-family:var(--font-secondary-bold);text-decoration:none;border:none;cursor:pointer;transition:background-color 0.3s ease;display:flex;align-items:center}.back-office .header .header-content .view-site-button:hover{background-color:var(--color-kaki)}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})} <div class="back-office"> <div class="sidebar-container" data-svelte-h="svelte-1f6amt4"><div class="sidebar"><div class="logo"><img src="/images/sogo-pink.png" alt="Logo de l'entreprise"></div> <ul class="menu"><li><a href="/admin/contacts">Demandes de contact</a></li> <li><a href="/admin/actualites">Actualites</a></li> <li><a href="/admin/projets">Projets</a></li> <li><a href="/admin/collaborateurs">Collaborateurs</a></li></ul></div></div>  <div class="main-content"><header class="header"><div class="header-content"><button class="logout-button" data-svelte-h="svelte-1416ua3">Déconnexion</button> ${slots.buttons ? slots.buttons({ class: "btn-container" }) : ``} <a href="/" target="_blank" class="view-site-button" data-svelte-h="svelte-1w62j5o"><div>Voir le site</div></a></div></header> ${slots.default ? slots.default({}) : ``} </div> </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-8d080781.js.map
