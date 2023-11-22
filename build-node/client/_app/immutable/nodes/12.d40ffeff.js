import{s as _,n as u,j as g}from"../chunks/boolean_attributes.7b38010d.js";import{S as h,i as x,t as l,b,k as p,f as v,g as $,d as c,a as f,r as d,l as y}from"../chunks/index.2a9c5617.js";import{p as A}from"../chunks/stores.ffa53cd4.js";function E(o){let n,e,r,s=o[0].data.user+"",i,m;return{c(){n=l(`You are logged in Admin\r
\r
`),e=b("pre"),r=l("  "),i=l(s),m=l(`\r
`)},l(t){n=p(t,`You are logged in Admin\r
\r
`),e=v(t,"PRE",{});var a=$(e);r=p(a,"  "),i=p(a,s),m=p(a,`\r
`),a.forEach(c)},m(t,a){f(t,n,a),f(t,e,a),d(e,r),d(e,i),d(e,m)},p(t,[a]){a&1&&s!==(s=t[0].data.user+"")&&y(i,s)},i:u,o:u,d(t){t&&(c(n),c(e))}}}function P(o,n,e){let r;return g(o,A,s=>e(0,r=s)),console.log(r.data.user),[r]}class k extends h{constructor(n){super(),x(this,n,P,E,_,{})}}export{k as component};
