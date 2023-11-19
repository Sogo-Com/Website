import{S as f,i as g,s as h,d as l,e as x,k as p,h as v,j as $,l as d,n as u,o as m,p as b,q as _,r as q}from"../chunks/index.ba7754e9.js";import{p as y}from"../chunks/stores.b9e671aa.js";function A(r){let n,e,s,o=r[0].data.user+"",i,c;return{c(){n=l(`You are logged in Admin

`),e=x("pre"),s=l("  "),i=l(o),c=l(`
`)},l(t){n=p(t,`You are logged in Admin

`),e=v(t,"PRE",{});var a=$(e);s=p(a,"  "),i=p(a,o),c=p(a,`
`),a.forEach(d)},m(t,a){u(t,n,a),u(t,e,a),m(e,s),m(e,i),m(e,c)},p(t,[a]){a&1&&o!==(o=t[0].data.user+"")&&b(i,o)},i:_,o:_,d(t){t&&d(n),t&&d(e)}}}function E(r,n,e){let s;return q(r,y,o=>e(0,s=o)),console.log(s.data.user),[s]}class Y extends f{constructor(n){super(),g(this,n,E,A,h,{})}}export{Y as component};
