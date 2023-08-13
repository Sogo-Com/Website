import{S as f,i as g,s as h,q as l,k as x,r as p,l as b,m as v,h as c,b as d,G as u,u as $,H as _,I as q}from"../chunks/index.f3f28aff.js";import"../chunks/index.e8ea833e.js";import{p as y}from"../chunks/stores.51a37ead.js";function A(r){let n,e,s,o=r[0].data.user+"",i,m;return{c(){n=l(`You are logged in Admin

`),e=x("pre"),s=l("  "),i=l(o),m=l(`
`)},l(t){n=p(t,`You are logged in Admin

`),e=b(t,"PRE",{});var a=v(e);s=p(a,"  "),i=p(a,o),m=p(a,`
`),a.forEach(c)},m(t,a){d(t,n,a),d(t,e,a),u(e,s),u(e,i),u(e,m)},p(t,[a]){a&1&&o!==(o=t[0].data.user+"")&&$(i,o)},i:_,o:_,d(t){t&&c(n),t&&c(e)}}}function E(r,n,e){let s;return q(r,y,o=>e(0,s=o)),console.log(s.data.user),[s]}class k extends f{constructor(n){super(),g(this,n,E,A,h,{})}}export{k as component};
