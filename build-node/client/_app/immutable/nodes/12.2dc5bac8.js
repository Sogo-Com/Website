import{s as _,n as u,b as g}from"../chunks/scheduler.f0ead462.js";import{S as h,i as b,b as l,e as x,f as p,c as v,d as $,g as m,j as f,k as d,l as y}from"../chunks/index.34cc1fde.js";import{p as A}from"../chunks/stores.c9cce57a.js";function E(r){let n,e,s,o=r[0].data.user+"",i,c;return{c(){n=l(`You are logged in Admin

`),e=x("pre"),s=l("  "),i=l(o),c=l(`
`)},l(t){n=p(t,`You are logged in Admin

`),e=v(t,"PRE",{});var a=$(e);s=p(a,"  "),i=p(a,o),c=p(a,`
`),a.forEach(m)},m(t,a){f(t,n,a),f(t,e,a),d(e,s),d(e,i),d(e,c)},p(t,[a]){a&1&&o!==(o=t[0].data.user+"")&&y(i,o)},i:u,o:u,d(t){t&&(m(n),m(e))}}}function P(r,n,e){let s;return g(r,A,o=>e(0,s=o)),console.log(s.data.user),[s]}class k extends h{constructor(n){super(),b(this,n,P,E,_,{})}}export{k as component};
