import{S as f,i as g,s as h,d as l,e as x,k as p,h as v,j as $,l as c,n as u,o as d,p as b,q as _,r as q}from"../chunks/index.6e3c4109.js";import"../chunks/index.2cefe83d.js";import{p as y}from"../chunks/stores.b4e55a16.js";function A(r){let n,e,s,o=r[0].data.user+"",i,m;return{c(){n=l(`You are logged in Admin

`),e=x("pre"),s=l("  "),i=l(o),m=l(`
`)},l(t){n=p(t,`You are logged in Admin

`),e=v(t,"PRE",{});var a=$(e);s=p(a,"  "),i=p(a,o),m=p(a,`
`),a.forEach(c)},m(t,a){u(t,n,a),u(t,e,a),d(e,s),d(e,i),d(e,m)},p(t,[a]){a&1&&o!==(o=t[0].data.user+"")&&b(i,o)},i:_,o:_,d(t){t&&c(n),t&&c(e)}}}function E(r,n,e){let s;return q(r,y,o=>e(0,s=o)),console.log(s.data.user),[s]}class j extends f{constructor(n){super(),g(this,n,E,A,h,{})}}export{j as component};
